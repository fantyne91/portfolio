<script setup>

    let ActiveCookie = true;
 setTimeout(() => {
    if (ActiveCookie===true){
            const cookie = document.getElementById('cookie-banner'); 
            cookie.style.opacity = 1; // Cambia la opacidad a 1 para mostrar el banner
            cookie.style.transform = 'translateX(-100px)'; 
            cookie.style.transition= 'all 2s ease-in'; // Añade una transición suave

            
        document.getElementById('reject-cookies')?.addEventListener('click', function () {
            // Oculta banner
            document.getElementById('cookie-banner').style.display = 'none';
            ActiveCookie=false;
        });
        document.getElementById('accept-cookies')?.addEventListener('click', function () {
                // Oculta banner
                document.getElementById('cookie-banner').style.display = 'none';

                // Google Analytics
                const ga = document.createElement('script');
                ga.async = true;
                ga.src = "https://www.googletagmanager.com/gtag/js?id=G-TG5RNBHJS6";
                document.head.appendChild(ga);

                ga.onload = function () {
                    window.dataLayer = window.dataLayer || [];
                    function gtag() { dataLayer.push(arguments); }
                    gtag('js', new Date());
                    gtag('config', 'G-TG5RNBHJS6', { anonymize_ip: true });
                };

                // Microsoft Clarity
               try {
                    const clarity = document.createElement('script');
                    clarity.async = true;
                    clarity.src = "https://www.clarity.ms/tag/r6jlijmo5b";
                    document.head.appendChild(clarity);
                } catch (e) {
                    console.error('Clarity no pudo cargarse...:', e);
                } 

                ActiveCookie=false;
            });
        }
        }, 19000);
        

</script>

<template>
       <div id="cookie-banner" v-cloak>
        <svg viewBox="0 0 72 72" id="emoji" xmlns="http://www.w3.org/2000/svg" fill="#000000">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <g id="color">
                    <path fill="#180f02" stroke="none"
                        d="M64,36c0.001-1.9424-0.5752-3.7461-1.5576-5.2627c0.3262-1.7754,0.168-3.6606-0.5742-5.4526 c-0.7422-1.7935-1.9649-3.2403-3.4522-4.2652c-0.3779-1.7651-1.2451-3.4463-2.6181-4.8178 c-1.3711-1.3736-3.0547-2.2417-4.8204-2.6197c-1.0244-1.4858-2.4697-2.707-4.2617-3.4497 c-1.7939-0.7431-3.6806-0.9018-5.457-0.5757C39.7422,8.5757,37.9404,8,35.999,8c-1.9404,0-3.7441,0.5762-5.2597,1.5576 c-1.7764-0.3266-3.6622-0.1684-5.4551,0.5737c-1.793,0.7432-3.2393,1.9654-4.2637,3.4532 c-1.7656,0.3779-3.4473,1.2451-4.8203,2.6172c-1.3721,1.3725-2.2402,3.0551-2.6172,4.8217 c-1.4873,1.0245-2.709,2.4693-3.4531,4.2622c-0.7422,1.7935-0.9004,3.6807-0.5723,5.4576C8.5762,32.2598,8.001,34.0615,8,36.002 c0,1.9414,0.5771,3.7451,1.5586,5.2617c-0.3252,1.7754-0.168,3.6611,0.5732,5.4531c0.7442,1.793,1.9668,3.2402,3.4551,4.2646 c0.377,1.7647,1.2442,3.4463,2.6152,4.8194c1.3731,1.373,3.0567,2.2402,4.8223,2.6172c1.0254,1.4863,2.4697,2.709,4.2617,3.4511 c1.794,0.7432,3.6807,0.9004,5.4571,0.5743C32.2588,63.4238,34.0615,64,36.0029,64c1.9405,0,3.7442-0.5762,5.2598-1.5576 c1.7754,0.3262,3.6621,0.168,5.4551-0.5733c1.792-0.7441,3.2392-1.9658,4.2636-3.4541c1.7657-0.3779,3.4473-1.2451,4.8184-2.6162 c1.374-1.373,2.2422-3.0566,2.6191-4.8232c1.4864-1.0244,2.7071-2.4697,3.4502-4.2608c0.7432-1.7939,0.9014-3.6816,0.5752-5.458 C63.4248,39.7402,63.999,37.9395,64,36z">
                    </path>
                    <circle cx="19" cy="35" r="2" fill="#c9872c" stroke="none" stroke-linecap="round" stroke-linejoin="round"
                        stroke-miterlimit="10" stroke-width="1.9394"></circle>
                    <circle cx="32" cy="41" r="2" fill="#c9872c" stroke="none" stroke-linecap="round" stroke-linejoin="round"
                        stroke-miterlimit="10" stroke-width="1.9394"></circle>
                    <circle cx="30" cy="51" r="2" fill="#c9872c" stroke="none" stroke-linecap="round" stroke-linejoin="round"
                        stroke-miterlimit="10" stroke-width="1.9394"></circle>
                    <circle cx="46" cy="51" r="2" fill="#c9872c" stroke="none" stroke-linecap="round" stroke-linejoin="round"
                        stroke-miterlimit="10" stroke-width="1.9394"></circle>
                    <circle cx="52" cy="36" r="2" fill="#c9872c" stroke="none" stroke-linecap="round" stroke-linejoin="round"
                        stroke-miterlimit="10" stroke-width="1.9394"></circle>
                    <circle cx="48" cy="21" r="2" fill="#c9872c" stroke="none" stroke-linecap="round" stroke-linejoin="round"
                        stroke-miterlimit="10" stroke-width="1.9394"></circle>
                    <circle cx="32" cy="22" r="2" fill="#c9872c" stroke="none" stroke-linecap="round" stroke-linejoin="round"
                        stroke-miterlimit="10" stroke-width="1.9394"></circle>
                </g>
                <g id="hair"></g>
                <g id="skin"></g>
                <g id="skin-shadow"></g>
                <g id="line">
                    <path fill="none" stroke="#c9872c" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
                        stroke-width="1.9394"
                        d="M64,35.875c0.001-1.9414-0.5752-3.7461-1.5576-5.2617c0.3262-1.7759,0.168-3.6612-0.5742-5.4531 c-0.7422-1.7935-1.9649-3.2403-3.4522-4.2652c-0.3779-1.7651-1.2451-3.4463-2.6181-4.8179 c-1.3711-1.3735-3.0547-2.2417-4.8204-2.6196c-1.0244-1.4858-2.4697-2.707-4.2617-3.4497 c-1.7939-0.7432-3.6806-0.9018-5.457-0.5757c-1.5166-0.9809-3.3184-1.5566-5.2598-1.5566c-1.9404,0-3.7441,0.5762-5.2597,1.5576 c-1.7764-0.3267-3.6622-0.1685-5.4551,0.5737c-1.793,0.7432-3.2393,1.9654-4.2637,3.4532 c-1.7656,0.3779-3.4473,1.2451-4.8203,2.6171c-1.3721,1.3726-2.2402,3.0552-2.6172,4.8218 c-1.4873,1.0244-2.709,2.4693-3.4531,4.2622c-0.7422,1.7935-0.9004,3.6807-0.5723,5.458C8.5762,32.1348,8.001,33.9375,8,35.877 c0,1.9414,0.5771,3.746,1.5586,5.2617c-0.3252,1.7754-0.168,3.6621,0.5732,5.4531c0.7442,1.793,1.9668,3.2402,3.4551,4.2656 c0.377,1.7647,1.2442,3.4463,2.6152,4.8184c1.3731,1.373,3.0567,2.2402,4.8223,2.6181c1.0254,1.4854,2.4697,2.7081,4.2617,3.4512 c1.794,0.7432,3.6807,0.9004,5.4571,0.5733c1.5156,0.9804,3.3183,1.5566,5.2597,1.5566c1.9405,0,3.7442-0.5762,5.2598-1.5566 c1.7754,0.3261,3.6621,0.1679,5.4551-0.5743c1.792-0.7431,3.2392-1.9648,4.2636-3.4531c1.7657-0.3779,3.4473-1.2451,4.8184-2.6172 c1.374-1.373,2.2422-3.0556,2.6191-4.8222c1.4864-1.0254,2.7071-2.4698,3.4502-4.2618c0.7432-1.7929,0.9014-3.6806,0.5752-5.457 C63.4248,39.6162,63.999,37.8145,64,35.875z">
                    </path>
                    <circle cx="19" cy="35" r="2" fill="none" stroke="#c9872c" stroke-linecap="round" stroke-linejoin="round"
                        stroke-miterlimit="10" stroke-width="1.9394"></circle>
                    <circle cx="32" cy="41" r="2" fill="none" stroke="#c9872c" stroke-linecap="round" stroke-linejoin="round"
                        stroke-miterlimit="10" stroke-width="1.9394"></circle>
                    <circle cx="30" cy="51" r="2" fill="none" stroke="#c9872c" stroke-linecap="round" stroke-linejoin="round"
                        stroke-miterlimit="10" stroke-width="1.9394"></circle>
                    <circle cx="46" cy="51" r="2" fill="none" stroke="#c9872c" stroke-linecap="round" stroke-linejoin="round"
                        stroke-miterlimit="10" stroke-width="1.9394"></circle>
                    <circle cx="52" cy="36" r="2" fill="none" stroke="#c9872c" stroke-linecap="round" stroke-linejoin="round"
                        stroke-miterlimit="10" stroke-width="1.9394"></circle>
                    <circle cx="48" cy="21" r="2" fill="none" stroke="#c9872c" stroke-linecap="round" stroke-linejoin="round"
                        stroke-miterlimit="10" stroke-width="1.9394"></circle>
                    <circle cx="32" cy="22" r="2" fill="none" stroke="#c9872c" stroke-linecap="round" stroke-linejoin="round"
                        stroke-miterlimit="10" stroke-width="1.9394"></circle>
                </g>
            </g>
        </svg>
        <p>¿Me ayudas a mejorar aceptando un par de cookies?</p> 
        <div class="cookie-buttons">
            <button id="accept-cookies">Aceptar</button>
            <button id="reject-cookies">Rechazar</button>
        </div>        
    </div>
</template>
<style>
    
        
        #cookie-banner {
            opacity: 0;
            position: fixed;
            display: flex;            
            bottom: 6vh;
            right: -100px;
            height: 70px;
            width: 400px;
         background-color: var(--color-secondary);
            gap:var(--space-xxs);
            z-index: 6;
            text-align: center;
            justify-content: center;
            border-radius: 20px 0 0 20px;
            align-items: center;     
            padding-left: 80px;     
            flex-wrap: nowrap;

        }
        #cookie-banner p, .cookie-buttons button{
            z-index: 99999;
            font-size: 0.8rem;         
        }
        .cookie-buttons {
            display: flex;
            width: fit-content;
            gap:var(--space-xxs);            
        }
        .cookie-buttons button{
            padding:var(--space-xxs);   
        }
        .cookie-buttons button:nth-child(1){
            position:relative;
            background-color: #c9872c;
            color: var(--color-secondary);
            font-weight: 600;
            
        } 
         #cookie-banner svg{
            position: absolute;
            height: 100px;
            width: 100px;           
            left: -4px;
         }
</style>