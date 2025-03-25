export default {
	async fetch(request, env) {
		const url = new URL(request.url);
		const ALLOWED_ORIGINS = [
			'https://mariadevdesign.com',
			'https://www.mariadevdesign.com',
			'https://admin.mariadevdesign.com',
			'https://mi-dashboard.mjortiz93.workers.dev',
			'https://portfolio-gq6.pages.dev',
		];

		const origin = request.headers.get('Origin');

		// Manejo de CORS para preflight requests (OPTIONS)
		if (request.method === 'OPTIONS') {
			return new Response(null, {
				headers: {
					'Access-Control-Allow-Origin': origin || '*', // Permite el origen correcto
					'Access-Control-Allow-Methods': 'POST, GET, OPTIONS', // Métodos permitidos
					'Access-Control-Allow-Headers': 'Content-Type, Authorization', // Encabezados permitidos
					'Access-Control-Allow-Credentials': 'true', // Si usas autenticación o cookies
				},
			});
		}

		// Rutas disponibles
		if (url.pathname === '/submit' && request.method === 'POST') {
			return await this.handleSubmitForm(request, env, ALLOWED_ORIGINS);
		} else if (url.pathname === '/dashboard' && request.method === 'GET') {
			return await this.handleDashboard(request, env, ALLOWED_ORIGINS);
		}

		// Si la ruta no es válida
		return new Response('Not Found', { status: 404 });
	},

	async handleSubmitForm(request, env, ALLOWED_ORIGINS) {
		try {
			const data = await request.json();
			const origin = request.headers.get('Origin');

			if (!data.nombre || !data.email || !data.mensaje) {
				return this.createResponse({ success: false, message: 'Nombre, email y mensaje son obligatorios.' }, 400, origin, ALLOWED_ORIGINS);
			}

			await env.DB.prepare(
				`INSERT INTO projects (nombre, email, telefono, interes, tipoProyecto, tamanoProyecto, help, mensaje, fromPage) 
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
			)
				.bind(
					data.nombre,
					data.email,
					data.telefono || null,
					data.interes || null,
					data.tipoProyecto || null,
					data.tamanoProyecto || null,
					data.help ? 1 : 0,
					data.mensaje,
					data.fromPage || 'Desconocido',
				)
				.run();

			// Respuesta con redirección a la landing
			return this.createResponse(
				{ success: true, message: 'Formulario guardado exitosamente' },
				200,
				origin,
				ALLOWED_ORIGINS,
			);
		} catch (error) {
			return this.createResponse({ success: false, message: 'Error al guardar: ' + error.message }, 500, origin, ALLOWED_ORIGINS);
		}
	},

	async handleDashboard(request, env, ALLOWED_ORIGINS) {
		const authHeader = request.headers.get('Authorization');
		const origin = request.headers.get('Origin');

		if (!authHeader || !this.authenticateRequest(authHeader, env)) {
			return this.createResponse({ success: false, message: 'Unauthorized' }, 401, origin, ALLOWED_ORIGINS);
		}

		try {
			const result = await env.DB.prepare('SELECT * FROM projects ORDER BY fecha DESC').all();

			// Asigna color de fondo a cada proyecto basado en "interes"
			const projects = result.results.map((project) => ({
				...project,
				backgroundColor: this.getBackgroundColor(project.interes),
			}));

			return this.createResponse(projects, 200, origin, ALLOWED_ORIGINS);
		} catch (error) {
			return this.createResponse({ success: false, message: 'Error al obtener datos: ' + error.message }, 500, origin, ALLOWED_ORIGINS);
		}
	},

	getBackgroundColor(interes) {
		const colors = {
			uxui: '#FFA500', // Naranja
			programming: '#ADD8E6', // Azul claro
			games: '#D8BFD8', // Violeta claro
		};
		return colors[interes] || '#FFFFFF'; // Blanco por defecto si no hay coincidencia
	},

	authenticateRequest(authHeader, env) {
		const validToken = `Bearer ${env.AUTH_TOKEN}`;
		return authHeader === validToken;
	},

	createResponse(body, status, origin, ALLOWED_ORIGINS) {
		const headers = {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': origin || '*', // Permite el origen correcto
			'Access-Control-Allow-Methods': 'POST, GET', // Métodos permitidos
			'Access-Control-Allow-Headers': 'Content-Type, Authorization', // Encabezados permitidos
			'Access-Control-Allow-Credentials': 'true', // Si usas autenticación o cookies
		};

		// Bloquea orígenes no permitidos
		if (origin && !ALLOWED_ORIGINS.includes(origin)) {
			return new Response('Forbidden', { status: 403 });
		}

		return new Response(JSON.stringify(body), {
			status,
			headers,
		});
	},
};
