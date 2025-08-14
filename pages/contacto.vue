<template>
  <ui-header></ui-header>
 
 
  <div class="image-container" data-carousel-item>
  
  <img src="~/assets/images/banner_soporte.jpg" class="" alt="..." />
  <div class="text-overlay">Automatizamos tus tareas repetitivas </div>
  <div class="text-overlay-file2">Deja en manos de desarrolladores de Agentes de IA</div>
</div>




<div class="flex flex-col lg:flex-row w-full gap-8 " >
<!-- Columna izquierda: Información de contacto -->
<div class="w-full lg:w-1/2 pl-[20px] mt-[15px] flex flex-col gap-4">
  <p class="text-title font-semibold">
    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-current text-[#38f5b3]" viewBox="0 0 24 24">
  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8l8 5 8-5v10H4z"/>
</svg>
    CONTACTA A UN AGENTE DE AI
  </p>
  <div class="flex items-center gap-2 mt-[10px] ml-[30px]">
    
     <!-- Ícono Correo -->
     <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V6a2 2 0 00-2-2H3a2 2 0 00-2 2v8a2 2 0 002 2z"/>
    </svg>
    <span>salesai@wappiad.com</span>
  </div>
   

  <div class="flex items-start gap-3 ml-[30px]">
    <!-- Ícono Teléfono -->
    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3l2 5-2 2a16 16 0 006 6l2-2 5 2v3a2 2 0 01-2 2h-1c-8.837 0-16-7.163-16-16V5z"/>
    </svg>
    <span>+593958893378</span>
  </div>

  <div class="flex items-start gap-3 ml-[30px]">
    <!-- Ícono País -->
    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 12l4.243-4.243a8 8 0 10-11.314 11.314A8 8 0 0017.657 16.657z"/>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12h.01"/>
    </svg>
    <span>Horario GMT-5 - L - V - 08h00 am a 17h45 pm</span>
  </div>

  <div class="flex items-start gap-3 ml-[30px]">
   <!-- Ícono Dirección -->
   <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c1.656 0 3-1.344 3-3S13.656 5 12 5 9 6.344 9 8s1.344 3 3 3z"/>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 10c0 7-7 13-7 13S5 17 5 10a7 7 0 1114 0z"/>
    </svg>
    <span>Ecuador - México</span>
  </div>
  <div class="flex items-start gap-3 ml-[30px]">
    <!-- Mapa de Google -->
    <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58741.84244749288!2d-78.52403216307037!3d-0.17194970430767617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5853fae31beaf%3A0x908ad93082fbb637!2sWappiad%20S.A.S.%20-%20Programadores%20Web%20Apps%20-%20Entrenamiento%20de%20IA%20-%20Desarrollo%20Software%20-%20Desarrollo%20Bots!5e0!3m2!1ses-419!2sec!4v1753874419765!5m2!1ses-419!2sec"
    width="600"
    height="510"
    class="rounded-lg"
    style="border:0;"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
</div>

<!-- Columna derecha: Formulario -->
<div class="w-full lg:w-1/2 mt-[60px]">
  <FormularioSoporte />
</div>
</div>




 <div class="spacer"></div>
<ui-footer></ui-footer>
</template>
<script>
import ImagenSoporte from '~/components/ImagenSoporte.vue';
import FormularioSoporte from '~/components/FormularioSoporte.vue';

export default {
components: {
  ImagenSoporte,
  FormularioSoporte,
},
};
</script>


<style scoped lang="scss">
body {

position: relative;
}

.flex {
 overflow-x: hidden !important;
position: relative;
}

.spacer {
height:55px; /* Altura del espacio entre los divs */
}

.image-container {
position: relative;
display: inline-block; /* Para asegurarse de que el contenedor se ajuste al tamaño de la imagen */
}

.image {
max-width: 100%; /* Asegura que la imagen no sea más ancha que su contenedor */
}

h1.text-base {
 overflow-x: hidden !important;
font-size: 22px;
}

.text-overlay {

font-size: 35px;
color: #FFF200;
background: rgba(0, 0, 0); /* Fondo semitransparente para hacer que el texto sea legible */
padding: 40px;
}
h1.text-base {
 overflow-x: hidden !important;
font-size: 22px;
}

.p-4 {
     background-color: #FBF8FF;
     border-radius: 9px;
     margin-top: 20px;


   }

   .text-xs {
     font-size: 18px;
     padding: 12px;
 }

 .text-overlay {
position: absolute;
top: 50%; /* Coloca el texto en el centro vertical */
left: 18%; /* Coloca el texto en el centro horizontal */
transform: translate(-50%, -50%); /* Alinea el centro del texto con el centro del contenedor */
font-family: 'Poppins', sans-serif; /* Establece la fuente 'Poppins' como tipografía */
font-weight:300; /* Establece el grosor de fuente 'Medium' */
/* El resto de tus estilos para el texto superpuesto */
font-size: 1.5vw;
color: white; /* Cambia el color del texto según tus preferencias */
background: rgba(0, 0, 0, 0.6); /* Fondo semitransparente para hacer que el texto sea legible */
padding: 2px 5px; /* Añade relleno al texto */
border-radius: 5px; /* Añade esquinas redondeadas al fondo del texto */
}

.text-overlay-file2 {
position: absolute;
top: 65%; /* Coloca el texto en el centro vertical */
left:32%; /* Coloca el texto en el centro horizontal */

transform: translate(-50%, -50%); /* Alinea el centro del texto con el centro del contenedor */
font-family: 'Poppins', sans-serif; /* Establece la fuente 'Poppins' como tipografía */
font-weight:200; /* Establece el grosor de fuente 'Medium' */
/* El resto de tus estilos para el texto superpuesto */
font-size: 1.3vw; /* Tamaño del texto relativo al ancho de la pantalla */
color: white;
background: rgba(0, 0, 0, 0.6); /* Fondo semitransparente para hacer que el texto sea legible */
padding: 0.5em 1em;
border-radius: 5px;
}


.text-title {

font-size: 35px;
color: #38f5b3 ;

padding: 40px;
display: flex;
align-items: center;
gap: 1rem;
}
.columborder {

  background: rgba(255, 255, 255, 0.733); /* Fondo semitransparente para hacer que el texto sea legible */
  padding: 35px 20px 35px 20px ;
  border-radius: 5px;
  border: 1px solid #585858c0; /* Borde de color negro */

}
</style>