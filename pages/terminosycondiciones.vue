<template>
  <ui-header></ui-header>
 
 
<div class="mx-auto text-overlay">

<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-current text-[#38f5b3]" viewBox="0 0 24 24">
  <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6zm1 7V3.5L18.5 9H15zM8 13h8v2H8v-2zm0 4h5v2H8v-2zm0-8h8v2H8V9z"/>
</svg>
  
Términos y condiciones</div>

  <div class="flex flex-wrap" style="padding-left: 30px; padding-right: 18px;">
      
    <div class="p-2 space-y-1">
    <section class=" ">
      <h2 class="text-lg font-bold mb-2">Responsabilidad</h2>
  <div class="text-gray-700 ">
    <li> Wappiad SAS se compromete a cumplir con cada etapa del desarrollo acordado según los requerimientos del cliente.</li>
      <li> Se incluye soporte técnico gratuito por 30 días posteriores a la entrega final del sistema web o aplicación.</li>
        <li> Durante el proceso, se brindarán recomendaciones para escalar el sistema de forma eficiente y sostenible.</li>
          <li> También se propondrán mejoras orientadas a fortalecer la seguridad y estabilidad del desarrollo entregado.</li>
            <li> El cliente es responsable de mantener actualizado el entorno de ejecución, salvo acuerdos adicionales.</li>
  </div>
</section>



<!-- Conservación de datos -->
<div>
<h2 class="text-lg font-bold mb-2">Conservación de datos</h2>
<p>
  Sus datos personales serán almacenados durante el tiempo necesario para el cumplimiento de las finalidades mencionadas.
  Cada 2 años se realizará una revisión sobre la pertinencia de su conservación.
 
</p>
</div>

<!-- Acceso y transferencia -->
<div>
<h2 class="text-lg font-bold mb-2">Acceso y transferencia</h2>
<p>
 Wappiad SAS no venderá ni divulgará su información personal a terceros, salvo:
</p>
<ul class="list-disc list-inside mt-2">
  <li>En cumplimiento de obligaciones contractuales o legales.</li>
  <li>
    En el caso de alianzas con empresas relacionadas directamente con la prestación de nuestros servicios

  </li>
</ul>
</div>

<!-- Derechos del titular -->
<div>
<h2 class="text-lg font-bold mb-2">Derechos del titular</h2>
<p>Usted puede ejercer en cualquier momento sus derechos legalmente reconocidos:</p>
<ul class="list-disc list-inside mt-2">
  <li>Acceso, rectificación, actualización y eliminación</li>
  <li>Oposición o limitación del tratamiento</li>
  <li>Portabilidad</li>
  <li>Revocación del consentimiento</li>
  <li>No ser objeto de decisiones automatizadas</li>
</ul>
</div>
<div class="spacer"></div>
</div>
</div>






<ui-footer></ui-footer>
</template>


<style scoped lang="scss">
body {

position: relative;
}



.spacer {
height: 15px; /* Altura del espacio entre los divs */
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
color: #38f5b3 ;

padding: 40px;
display: flex;
align-items: center;
gap: 1rem;
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
 .bullet-list {
    list-style-type: disc;
    margin-left: 40px;
  }
</style>