<template>
  <header
    :class="{
      'fixed top-0 left-0 right-0 z-[9999]': isFixed,
      scrolled: isScrolled,
    }"
    class="bg-[#232c4d] w-full p-7 flex justify-between items-center transition-all duration-300 ease-in-out"
  >
    <!-- Logo o título -->
    <nuxt-link to="/home" class="flex items-center active">
  <!-- Logo Default -->
  <img
    src="~/assets/images/logowappiad.png"
    alt="Logo Default"
    class="transition-all duration-300 ease-in-out max-w-[150px] h-auto"
    :class="{ 'opacity-0 hidden': isScrolled }"
  />
  <!-- Logo Scrolled -->
  <img
    src="~/assets/images/logowappiadblack.png"
    alt="Logo Scrolled"
    class="transition-all duration-300 ease-in-out hidden max-w-[150px] h-auto"
    :class="{ 'opacity-100 !block': isScrolled }"
  />
</nuxt-link>



    <!-- Botones -->
    <div class="space-x-4 p-0 hide-for-mobile flex items-center">
      <!-- Botón 1 -->

      <nuxt-link to="/home" class="active">
        <button
          class="hover:text-[#7d7d7d] text-sm px-4 py-2 rounded-lg"
          style="font-family: 'Montserrat', sans-serif; font-size: 18px"
        >
          {{ t("layout.header.start") }}
        </button>
      </nuxt-link>

      <!-- Botón 2 -->
      <nuxt-link to="/servicios" class="active">
        <button
          class="hover:text-[#7d7d7d] text-sm px-4 py-2 rounded-lg"
          style="font-family: 'Montserrat', sans-serif; font-size: 18px"
        >
          {{ t("layout.header.pricing") }}
        </button>
      </nuxt-link>

      <!-- Botón 3 -->

      <nuxt-link to="/chatbotconinteligenciaartificial" class="active">
        <button
          class="hover:text-[#7d7d7d] text-sm px-4 py-2 rounded-lg"
          style="font-family: 'Montserrat', sans-serif; font-size: 18px"
        >
          {{ t("layout.header.successCases") }}
        </button>
      </nuxt-link>
      <!-- Language Dropdown -->

      <!-- Botón 4 -->
      <nuxt-link to="/contacto" class="active">
        <button
          class="hover:text-[#7d7d7d] text-sm px-4 py-2 rounded-lg"
          style="font-family: 'Montserrat', sans-serif; font-size: 18px"
        >
          {{ t("layout.header.contact") }}
        </button>
      </nuxt-link>
    </div>

    <!-- Links de inicio de sesión y registro -->
    <div class="space-x-4 hide-for-mobile flex items-center">

      
      <div class=" language-selector hide-for-mobile">
        <select
          @change="changeLanguage($event)"
          class="bg-[#38f5b3] text-[#232c4d] hover:bg-[#9dfa2b] text-sm px-4 py-2 rounded-lg transition-colors duration-300"
          style="font-family: 'Montserrat', sans-serif; font-size: 18px"
          v-model="selectedLanguage"
        >
          
          <option value="es" ><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="flag-icon">
        <rect width="24" height="24" rx="3" ry="3" style="fill: #ffcc00;"></rect>
        <rect y="8" width="24" height="8" style="fill: #d52b1e;"></rect>
        <rect y="16" width="24" height="8" style="fill: #ffc400;"></rect>
      </svg>ES</option>

          <option value="en">EN</option>
          <option value="pt">PO</option>
        </select>
      </div>
    </div>

    <div class="mobile-menu">
      <button @click="toggleSubmenu">
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      <div class="menuList" v-if="isActive">
        <ul>
          <li>
            <a href="/home"> {{ t("layout.header.start") }} </a>
          </li>
          <!-- Botón 2 -->
          <li>
            <nuxt-link to="/servicios">
              {{ t("layout.header.pricing") }}
            </nuxt-link>
          </li>

          <li>
            <a href="/chatbotconinteligenciaartificial">
              {{ t("layout.header.successCases") }}
            </a>
          </li>

          <li>
            <nuxt-link to="/contacto">
              {{ t("layout.header.contact") }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </header>

  <div
    class="hide-for-mobile bg-white py-0 text-[#000000] text-sm flex justify-center items-center space-x-4"
    style="font-family: 'Poppins', sans-serif; font-size: 18px"
  ></div>
</template>

<script>
import { useI18n } from "vue-i18n";
export default {
  setup() {
    const { setLocale, t } = useI18n();

    return {
      setLocale,
      t,
    };
  },
  data() {
    return {
      isActive: false,
      selectedLanguage: "es",
      isScrolled: false,
      isFixed: false,
      lastScrollPosition: 0,
    };
  },
  methods: {
    toggleSubmenu() {
      this.isActive = !this.isActive;
      console.log(">>>>>>> running ", this.isActive);
    },
    changeLanguage(event) {
      const selectedLocale = event.target.value;
      this.selectedLanguage = selectedLocale;
      this.setLocale(selectedLocale);
      // Optional: You might want to persist the language selection in localStorage
      localStorage.setItem("user-language", selectedLocale);
    },
    handleScroll() {
      const currentScrollPosition = window.pageYOffset;

      // Activate fixed positioning and scrolled state
      if (currentScrollPosition > 200) {
        this.isFixed = true;
        this.isScrolled = true;
      } else {
        this.isFixed = false;
        this.isScrolled = false;
      }

      // Update last scroll position
      this.lastScrollPosition = currentScrollPosition;
    },
  },
  mounted() {
    const language = localStorage.getItem("user-language");
    console.log(">>>>>>> language ", language);
    if (language) {
      this.setLocale(language);
      this.selectedLanguage = language;
    } else {
      this.setLocale("es");
      this.selectedLanguage = "es";
    }
    // Add scroll event listener
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    // Remove scroll event listener to prevent memory leaks
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
/* Estilo para eliminar el margen inferior del encabezado */
header {
  background-color: #232c4d;
  color: white;
  transition: all 0.3s ease-in-out;
}

/* Scrolled state styles */
header.scrolled {
  background-color: white;
  color: #232c4d;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: headerAppear 0.3s ease-in-out;
}

/* Keyframe animation for header appearance */
@keyframes headerAppear {
  from {
    opacity: 0.7;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Button and link color adjustments when scrolled */
header.scrolled .active button,
header.scrolled .active {
  color: #232c4d !important;
}

header.scrolled .language-selector select,
header.scrolled .language-selector select option {
  color: #232c4d !important;
  background-color: white !important;
}

/* Modify SVG color for mobile menu when scrolled */
header.scrolled .mobile-menu button svg path {
  stroke: #232c4d;
}

/* Responsive adjustments */
@media only screen and (max-width: 1076px) {
  header {
    padding: 10px;
  }
}

.active {
  color: #ffffff; /* Cambia el color del texto cuando el enlace está activo */
  font-weight: normal !important;
  background-color: transparent !important;
}
/* Clase para el texto con color blanco */
.texto-blanco {
  color: #636363;
}

/* Clase para el hover con color gris claro */
.hover-turquesa:hover {
  color: #232c4d; /* Color de texto gris claro para el hover */
  border-radius: 9px;
  width: 100%;
  height: 100%; /* Asegura que el fondo ocupe el 100% del alto */
  display: block; /* Asegura que el enlace se muestre como bloque y ocupe el 100% del ancho */
  position: relative; /* Asegura que el elemento contenedor tenga un contexto de posición para el borde redondeado */
}

nav {
  position: relative;
}

nav::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 10px;
  background-color: #232c4d;
}

.nuxt-link-active {
  background-color: white; /* Establece el fondo blanco cuando el enlace está activo o se ha visitado */
  /* Otros estilos si es necesario */
}

.mobile-menu {
  display: none;
}
.mobile-menu button svg path {
  stroke: #38f5b3;
}
.mobile-menu button:hover {
  background-color: transparent;
}
.mobile-menu .menuList {
  position: absolute;
  left: 0;
  width: 100%;
  z-index: 999;
  background-color: #fff;
  display: block;
}
.mobile-menu .menuList.active {
  display: block;
}
.mobile-menu .menuList ul {
  margin: 0;
  padding: 0;
  border-bottom: solid 1px #ccc;
  padding: 10px;
}
.mobile-menu .menuList ul li {
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
}
.mobile-menu .menuList ul li a {
  text-decoration: none;
  color: #000;
  display: block;
}

@media only screen and (max-width: 1076px) {
  .mobile-menu {
    display: block;
  }
  .hide-for-mobile {
    display: none;
  }
}
.sub-menu-item {
  position: relative;
}

.submenu {
  display: none;
  position: absolute;
  top: 90%;
  left: 0;

  transform: translate(-40%, 0%);
  background-color: rgb(255, 255, 255);
  padding: 5px;
  border-radius: 0 0 9px 9px; /* Aplicando un radio de borde de 9px en la parte inferior */
  z-index: 10;
}

.submenu a:hover {
  color: #232c4d; /* Cambia el color al hacer hover, reemplaza con tu color preferido */
}

.sub-level-menu {
  width: max-content;
  display: flex;
  flex-direction: column;
}

.sub-level-menu a {
  margin-bottom: 10px;
}

.submenu > div {
  display: flex;
}

.sub-menu-item:hover .submenu {
  display: block;
}

.h-6:hover {
  transform: translateY(
    3px
  ); /* Puedes ajustar la cantidad de desplazamiento vertical */
  transition: transform 0.3s ease-in-out; /* Añade una transición suave */
}

.mobile-submenu {
  width: max-content;
  display: flex;
  flex-direction: column;
  top: 100%;
  left: 50px;
}

.logo-svg {
  width: 100px; /* Ancho deseado */
  height: auto; /* Altura ajustada automáticamente */
}

.language-selector select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M1 4l5 5 5-5z' fill='%23232c4d'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.5rem center;
  padding-right: 1.5rem;

}


</style>
