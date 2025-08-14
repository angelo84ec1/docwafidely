<template>
  <div
    class="w-full bg-[#232c4d] shadow-xl shadow-indigo-200 py-10 px-20 flex justify-between items-center"
  >
    <p class="text-white">
      <span class="text-4xl font-medium">{{
        $t("layout.footer.call_to_action")
      }}</span>
      <br />
      <span class="text-lg">{{ $t("layout.footer.description") }}</span>
    </p>
    <a
  href="https://wafidely.com/aiembudo/689370f31ba36e68f0bae824"
  target="_blank"
  rel="noopener"
>
    <button
  class="px-5 py-3 sm:py-1 text-sm sm:text-base font-medium text-slate-700 shadow-xl hover:bg-white duration-150 rounded-lg bg-[#9dfa2b]"
>
  {{ $t("layout.footer.register_button") }}
</button>
</a>
  </div>

  <footer
    style="
      background-image: url('https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png');
    "
  >
    <div class="mx-auto max-w-screen-xl px-2 py-2 sm:px-3 lg:px-8">
      <div class="menu">
  <div class="grid grid-cols-1 gap-4 place-items-justify pt-1 pb-2">
    <img
      src="/assets/images/logowappiad.png"
      
      alt="Wafidely"
      class="ease-in-out max-w-[150px] h-auto"
    />
    <p class="text-gray-700 text-justify max-w-xs tracking-tight ml-1">
      {{ $t("layout.footer.company_info.description") }}
    </p>
  </div>

        <div class="menu-item">
          <div class="menu-title">
            {{ $t("layout.footer.plans.title") }}
          </div>
          <ul>
            <li>
              <a class="menu-link" href="servicios">{{
                $t("layout.footer.plans.waPyme")
              }}</a>
            </li>
            <li>
              <a class="menu-link" href="servicios">{{
                $t("layout.footer.plans.waMedium")
              }}</a>
            </li>
            <li>
              <a class="menu-link" href="servicios">{{
                $t("layout.footer.plans.waLarge")
              }}</a>
            </li>
            <a class="px-5 py-7" href="#"></a>
          </ul>
        </div>
        <div class="menu-item">
          <div class="menu-title">
            {{ $t("layout.footer.info.title") }}
          </div>
          <ul>
           
            <li>
              <a class="menu-link" href="/terminosycondiciones">{{
                $t("layout.footer.info.terms")
              }}</a>
            </li>
            <li>
              <a class="menu-link" href="/contacto">{{
                $t("layout.footer.info.support")
              }}</a>
            </li>
            <a class="px-5 py-7" href="#"></a>
          </ul>
        </div>
      </div>
    </div>

    <div style="border-top: 1px solid #e3e3e3"></div>
  </footer>

  <div
    class="fooback md:mb-0 mx-auto flex flex-col md:flex-row justify-between items-center"
  >
    <!-- Columna Izquierda: Texto de Copyright -->
    <div class="fooback mb-15 md:mb-0">
      {{ $t("layout.footer_bottom.copyright") }}
    </div>

    <!-- Columna Central: Logotipo -->

    <!-- Columna Derecha: Iconos de Redes Sociales -->
    <div class="foobackred ml-0 md:ml-[700px] flex items-center gap-6">

      <img
    src="~/assets/images/aws-svgrepo-com.png"
    alt="Logo AWS"
    class="w-12 h-auto mr-5"
  />

      <a
        href="https://www.facebook.com/wappiad"
        target="_blank"
        class="text-[#232c4d] hover:text-[#38f5b3] transition duration-300 text-right cursor-pointer"
      >
        <i class="fab fa-facebook-f ml-5 md:mb-0"></i>
        <!-- Icono de Facebook -->
      </a>
      <a
        href="https://www.instagram.com/wappiad"
        target="_blank"
        class="text-[#232c4d] hover:text-[#38f5b3] transition duration-300 cursor-pointer"
      >
        <i class="fab fa-instagram ml-5"></i>
        <!-- Icono de Instagram -->
      </a>
      <a
        href="https://www.linkedin.com/company/wappiad-s-a-s"
        target="_blank"
        class="text-[#232c4d] hover:text-[#38f5b3] transition duration-300 cursor-pointer"
      >
        <i class="fab fa-linkedin ml-5"></i>
        <!-- Icono de TikTok -->
      </a>
    </div>
  </div>

  <div class="whatsapp-float">
  <a
    href="https://wa.me/593958893378"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="https://amcacmin.automotorsclub.com/uploads/Animation_1750186633654_d5a4a6806e.gif"
      alt="WhatsApp"
      class="whatsapp-icon"
    />
  </a>
</div>

</template>

<script setup>
const { t } = useI18n();
</script>
<style scoped>
.barra {
  position: relative;
  overflow: hidden;
  background-image: linear-gradient(135deg, #8b5cf6, #00ffff);
  color: #fff; /* Cambiar el color de texto en modo oscuro según tus preferencias */

  z-index: -1;
}

.fooback {
  overflow: hidden;
  background: #ffffff;

  color: #232c4d; /* Color de texto blanco */
  text-align: center; /* Alinear los enlaces a la izquierda */
  padding: 10px; /* Agregar relleno de 20 píxeles en todas las direcciones */
  z-index: 0;
}

.foobackred {
  position: relative;
  overflow: hidden;
  color: #232c4d;
  margin-left: 400px;
  margin-right: 0px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 5px;
  padding-left: 0px;
}

@media only screen and (max-width: 1076px) {
  .foobackred {
    margin-left: 0px;
  }
  .hide-for-mobile {
    display: none;
  }
}
.foobacklogo {
  padding: 50px; /* Agregar relleno de 20 píxeles en todas las direcciones */
  margin-right: 30px;
}

.menu {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px;
  gap: 30px;
}

.menu-item {
  display: flex;

  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
}

.menu-title {
  color: #18f3dc;
  font-weight: bold;
  top: 50px;
  margin-bottom: 30px;
  font-size: 20px; /* Tamaño de letra de 16px */
}

.menu-link {
  text-decoration: none;
  color: #232c4d;
  margin-top: 50px;
  text-align: justify; /* Alinear los enlaces a la izquierda */
  font-size: 18px; /* Tamaño de letra de 16px */
}

.menu-link::before {
  content: "\2022"; /* Código Unicode para viñeta */
  color: #18f3dc; /* Color de la viñeta */
  display: inline-block;
  width: 1em; /* Espacio entre la viñeta y el texto */
  margin-right: 0.5em; /* Espacio entre la viñeta y el texto */
}

.logofooter {
  width: 335px;
  height: 89px;
  flex-shrink: 0;
}

.whatsapp-float {
  
  position: fixed;
  bottom: 20px;
  right: 20px;
  
  z-index: 1000;
}

.whatsapp-icon {
  
  width: 70px;
  height: 70px;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;
  margin-top: -150px;
}

.whatsapp-icon:hover {

transform: scale(1.1);
}



.bottoncontrata:hover {
  color: #000000;
  background: #ffffff;
  background: rgba(255, 255, 255, 0.8); /* Fondo con transparencia del 80% */
}

.logo-svg {
  width: 100px; /* Ancho deseado */
  height: auto; /* Altura ajustada automáticamente */
}

/* @media only screen and (max-width: 767px) {
  .menu-link {
    margin: 20px 0;
  }
} */
</style>
