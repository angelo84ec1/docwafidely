<script setup>
import { initFlowbite } from "flowbite";
import { usePaymentStore } from "@/store/payment/index.js";
import { useRouter } from "vue-router";
import { reactive } from "vue";


const store = usePaymentStore();
const router = useRouter();
const user = true;

function redirectToUrl() {
  window.location.href = 'https://wafidely.com/aiembudo/689370f31ba36e68f0bae824';
}

const Subscription = reactive([
  {
    id: 4,
    name: "Desarrollo Web a la Medida",
    price: 1899,
    time: ["una sola vez"],
    details: ["1 solo pago"],
    discount: 0,

    benifits: [
      "Recordatorio automático Citas Whatsapp hasta 250 ",
      "QR de establecimiento",
      "Página de Aterrizaje con agendamiento de citas en calendario",
      "Reporte de citas confirmadas y canceladas",
    ],
  },
  {
    id: 5,
    name: "Desarrollo de Apps".trim(),

    price: 7999,
    time: ["una sola vez"],
    details: ["Anuales o hasta que se termine los 500 whatsapp automáticos"],
    discount: 0,

    benifits: [
      "Recordatorio automático Citas hasta 500 Whatsapp",
      "QR de establecimiento",
      "Página de Aterrizaje con agendamiento de citas en calendario",
      "Reporte de citas confirmadas y canceladas",
    ],
  },
  {
    id: 6,
    name: "Entrenamiento IA",

    price: 69,
    time: ["x mes"],
    details: ["Anual"],

    discount: 0,

    benifits: [
      "Recordatorio automático Citas hasta 1000 Whatsapp",
      "QR de establecimiento",
      "Página de Aterrizaje con agendamiento de citas en calendario",
      "Reporte de citas confirmadas y canceladas",
    ],
  },
]);

const addToCart = (item) => {
  if (user) {
    store.cart.push(item);
    store.successMessage("Añadido al Carrito");
    router.push("products");
  }
};

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>

<template>
  <ui-header></ui-header>
  <div class="w-full bg-[#ffffff] text-[#38f5b3] text-[35px] px-10 py-10 relative z-10">
  <div class="titulo-con-icono">
    <svg xmlns="http://www.w3.org/2000/svg" class="w6 h-6 fill-current text-[#38f5b3]" viewBox="0 0 24 24">
      <path d="M12 2L2 7l10 5 10-5-10-5zm0 18.7l10-5V10l-10 5-10-5v5.7l10 5z" />
    </svg>
    <span>{{ $t("pages.planes.title") }}</span>
  </div>
</div>
  <div class="spacer"></div>

  <div class="columcss grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div
      v-for="(sub, i) in Subscription"
      :key="sub.name"
      class="w-full subscription-card bg-[#fff] rounded-[10px] shadow-[0px 1px 2px #E1E3E5] border border-[#E1E3E5] divide-y"
    >
      <div class="pt-[15px] px-[25px] pb-[25px]">
        <div class="flex justify-end">
          <div
            class="bg-[#F6F6F7] rounded-[20px] flex justify-center align-center px-[12px]"
          >
            <p
              class="text-[#00153B] heading text-[50px] leading-[28px] font-bold"
            >
              {{ sub.heading }}
            </p>
          </div>
        </div>

        <div>
          <span
            class="inline-flex rounded-full bg-[#18f3dc] px-3 py-1 text-[20px] font-medium text-[#232c4d]"
          >
            {{ $t(`pages.planes.subscriptions[${i}].name`) }}
          </span>
        </div>

        <p class="subscription-price text-[25px] leading-[63px] font-bold">
            $ {{ sub.price }}/ {{ $t(`pages.planes.subscriptions[${i}].time`) }}
        </p>

        <div>
          <p
            class="text-[#717F87] text-[14px] leading-[28px] font-medium justify-between rounded-2xl bg-[#fbf8ff] dark:bg-[#fbf8ff] p-4 sm:p-4"
            v-for="(detail, index) in sub.details"
          >
            {{ $t(`pages.planes.subscriptions[${i}].details[${index}]`) }}
          </p>
        </div>
      </div>

      <div
        class="pt-[25px] px-[25px] pb-[35px] i-mdi-home hover:i-mdi-home-alert text-5xl text-green-800 bg-[#fbf8ff] pt-10 pb-8"
      >
        <div>
          <div
            v-for="(benifit, index) in sub.benifits"
            :key="index"
            class="flex items-center space-x-2"
          >
            <!-- SVG icon -->
            <div class="w-5 h-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="0.5em"
                height="0.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#232c4d"
                  d="m10.562 15.908l6.396-6.396l-.708-.708l-5.688 5.688l-2.85-2.85l-.708.708zM12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709"
                />
              </svg>
            </div>

            <!-- Texto del beneficio -->
            <p
              class="flex-grow text-[#232c4d] text-[14px] leading-[24px] font-medium"
            >
              {{ $t(`pages.planes.subscriptions[${i}].benefits[${index}]`) }}
            </p>
          </div>
        </div>

        <div class="mt-[25px] flex justify-center w-7/10">
          <button
    class="button w-full ml-20 font-medium"
    @click="redirectToUrl"
  >
  {{ $t(`pages.planes.button`) }}
</button>
        </div>
      </div>
    </div>
  </div>

  <div class="spacer"></div>
  <ui-footer></ui-footer>
</template>

<style scoped lang="scss">
body {
  position: relative;
}

.heading {
  margin-left: 1rem;
  margin-top: 4px;
  padding: 0px 8px;
  background-color: rgb(109, 109, 177);
  border-radius: 16px;
  font-size: 0.8rem;
  color: white;
  font-weight: bold;
}

.spacer {
  height: 15px; /* Altura del espacio entre los divs */
}

.bannerfoot {
  position: relative;
  text-align: center; /* Alinea el texto en el centro horizontal */
}

.text-left-center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Establece la altura del contenedor a la altura de la ventana */
  /* Añade estilos adicionales para el contenedor según tus necesidades */

  position: absolute;
  top: 50%;
  left: 500px;
  transform: translate(0, -50%);
  font-size: 60px;
  font-family: "Poppins", sans-serif; /* Establece la fuente a Poppins y utiliza sans-serif como fuente de respaldo */
  font-weight: bold; /* Establece la fuente en negrita */
  font-size: 60px; /* Establece el tamaño de fuente en 30px */
  color: #0200ab; /* Puedes ajustar el color según tus preferencias */
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 25px;
  padding-right: 0;
}

/* Media query para ajustar estilos en pantallas más pequeñas */
@media (max-width: 768px) {
  .text-left-center {
    position: absolute;
    top: 50%;
    left: 50px;
    transform: translate(0, -50%);
    font-size: 30px; /* Establece el tamaño de fuente en 30px */
    /* Cambia el diseño o estilos en pantallas más pequeñas si es necesario */
  }
}

.button {
  display: flex;
  justify-content: center;
  background-color: #18f3dc;
  border-radius: 9px;
  padding: 25px 25px;
  color: #232c4d;
  font-size: 0.3em;
  line-height: 17px;
  text-align: center;
  cursor: pointer;
}

/* Estilo de hover */
.button:hover {
  background-color: #2f1071;
}

/* Estilos normales del contenedor */

/* Estilo del contenedor en modo oscuro */
.dark .container {
  background-color: #333; /* Cambiar el color oscuro según tus preferencias */
  color: #fff; /* Cambiar el color de texto en modo oscuro según tus preferencias */
}




/* Estilos para el contenedor de las columnas */
.flex {
  display: flex; /* Utilizar Flexbox */
  justify-content: space-between; /* Distribuir el espacio entre las columnas */
  z-index: -1;
}

.titulo-con-icono {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* Estilos para cada columna */
.column {
  flex: 1; /* Permitir que las columnas ocupen el mismo ancho */
  padding: 16px;
  z-index: -1;
}

.desk {
  flex: 1; /* Permitir que las columnas ocupen el mismo ancho */
  padding: 16px;
  z-index: -1;
}

.subscription-price {
  color: #000000;
}

.contenedor-imagen {
  max-width: 100%;
  height: auto;
}

.columcss {
  padding: 15px;
}


</style>
