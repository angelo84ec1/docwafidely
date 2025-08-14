<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

gsap.registerPlugin(ScrollTrigger);

const pinImage = ref([
  new URL("~/assets/images/modelo.png", import.meta.url).href,
  new URL("~/assets/images/moneda-digital.png", import.meta.url).href,
  new URL("~/assets/images/globo.png", import.meta.url).href,
  new URL("~/assets/images/apoyo.png", import.meta.url).href,
]);

const pinContent = ref([
  {
    title: "Strategic Career Growth",
    description:
      "Unlock personalized strategies to advance your remote work career.",
  },
  {
    title: "Global Networking",
    description:
      "Connect with top-tier global companies and expand your professional network.",
  },
  {
    title: "Skill Development",
    description:
      "Access tailored resources and training to enhance your remote work skills.",
  },
  {
    title: "Comprehensive Support",
    description: "Receive end-to-end career guidance from industry experts.",
  },
]);

const swiperModules = [Pagination, Autoplay];

onMounted(() => {
  // Desktop animations
  if (window.innerWidth >= 1024) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".pin-sec",
        start: "top top",
        end: "bottom bottom",
        pin: ".pin-right",
        scrub: 1,
        markers: false,
      },
    });

    // Shape transformation animation
    tl.to(".scrol-box", {
      opacity: 1,
      borderRadius: "50%",
      duration: 0.5,
    })
      .to(".scrol-box", {
        borderRadius: "0%",
        duration: 0.5,
      })
      .to(".scrol-box", {
        opacity: 0,
        duration: 0.5,
      });

    // Optional: Add card reveal animations
    gsap.utils.toArray(".content-card").forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: card,
            start: "top center",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }
});
</script>

<template>
  <div
    id="services"
    class="section container relative rounded-lg bg-white z-[-2]"
  >
    <div
      class="fixed bg-gray-300 h-[100px] w-[100px] scrol-box lg:block hidden"
    ></div>

    <!-- Desktop Layout -->
    <div
      class="hidden lg:mt-0 lg:col-span-5 lg:flex pb-12 pin-sec !py-[200px] justify-between"
    >
      <div class="flex flex-col items-center gap-7 pin-left">
        <div
          v-for="(content, index) in pinContent"
          :key="index"
          class="content-card"
        >
          <div
            class="flex items-center gap-4 h-[40vh] flex-col max-w-[430px] relative"
          >
            <img :src="pinImage[index]" alt="icon" class="w-20 h-20" />
            <div class="flex justify-center flex-col items-center">
              <h3 class="box-title">
                {{ $t(`pages.landing.member.cards.${index}.title`) }}
              </h3>
              <p class="box-content text-center">
                {{ $t(`pages.landing.member.cards.${index}.description`) }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col !z-10 h-[100vh] pin-right relative">
        <img
    src="~/assets/images/background-rigth.png"
    alt="Fondo derecho"
    class="absolute right-0 top-0 w-full h-50 object-cover z-50"
  />
        <h3
          class="titulo max-w-3xl mb-5 font-bold tracking-wide tracking-tight leading-normal md:text-5xl dark:text-white animated-heading"
        >
          {{ $t("pages.landing.member.title") }}
        </h3>
        <p class="mb-8">
          {{ $t("pages.landing.member.description") }}
        </p>
        <a
          href="#"
          class="gradient-button inline-flex max-w-[200px] items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          {{ $t("pages.landing.member.button") }}
        </a>
      </div>
    </div>

    <!-- Mobile Layout -->
    <div class="lg:hidden flex flex-col items-center !pb-[10%]">
      <!-- Added items-center for horizontal centering -->
      <div class="flex flex-col !z-10 mb-8 px-4 max-w-md w-full">
        <!-- Added max-w-md and w-full for responsive centering -->
        <h3
          class="titulo max-w-3xl mb-5 font-bold tracking-wide tracking-tight leading-normal text-4xl dark:text-white text-center"
        >
          {{ $t("pages.landing.member.title") }}
        </h3>
        <p class="mb-8 text-center">
          {{ $t("pages.landing.member.description") }}
        </p>
        <div class="flex justify-center">
          <!-- Centered the button -->
          <a
            href="#"
            class="gradient-button inline-flex max-w-[200px] items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            {{ $t("pages.landing.member.button") }}
          </a>
        </div>
      </div>
      <div class="w-full max-w-md px-4">
        <!-- Constrain width and center -->
        <Swiper
          :modules="swiperModules"
          :slides-per-view="1"
          :pagination="{ clickable: true }"
          :autoplay="{ delay: 2000, disableOnInteraction: false }"
          class="w-full !pb-12"
        >
          <SwiperSlide v-for="(content, index) in pinContent" :key="index">
            <div
              class="flex items-center gap-4 flex-col max-w-[430px] mx-auto relative p-6 bg-gray-100 rounded-lg shadow-md"
            >
              <img :src="pinImage[index]" alt="icon" class="w-20 h-20" />
              <div class="flex justify-center flex-col items-center">
                <h3 class="box-title mb-2 text-center">
                  {{ $t(`pages.landing.member.cards.${index}.title`) }}
                </h3>
                <p class="box-content text-center">
                  {{ $t(`pages.landing.member.cards.${index}.description`) }}
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<style>
.swiper-pagination-bullet-active {
  background-color: #000;
  z-index: 100;
}
</style>
