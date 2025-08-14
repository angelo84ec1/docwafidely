<template>
  <section class="bg-[#232c4d] mt-0 overflow-hidden pb-[5%] px-[32px] pl-[70px]">
    <div class="landing-cont !py-12 flex flex-col lg:flex-row items-center">
      <!-- Left Content -->
      <div
        class="mr-auto place-self-center w-full lg:w-[60%] h-[300px] md:h-[340px] lg:h-[600px] overflow-hidden relative"
      >
        <transition-group
          name="custom-slide-up"
          tag="div"
          class="absolute w-full h-full"
        >
          <div
            :key="currentIndex"
            class="slide-content absolute w-full text-center lg:text-left"
          >
            <p
              class="font-manrope max-w-2xl mb-2 font-light text-[#ffffff] lg:mb-4 md:text-base lg:text-base dark:text-gray-400"
              aria-live="polite"
            >
              {{ t(subtitles[currentIndex]) }}
            </p>

            <h1
              class="titulo max-w-3xl mb-5 font-bold tracking-wide tracking-tight leading-normal md:text-5xl dark:text-white animated-heading pb-2"
              aria-live="polite"
            >
              {{ t(titles[currentIndex]) }}
            </h1>

            <p
              class="max-w-2xl mb-4 font-light text-[#ffffff] lg:mb-8 md:text-lg lg:text-m dark:text-gray-400"
              aria-live="polite"
            >
              {{ t(descriptions[currentIndex]) }}
            </p>

            <a
              href="#"
              class="gradient-button inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              {{ t("pages.landing.hero.button") }}
            </a>
          </div>
        </transition-group>
      </div>

      <!-- Right Content -->
      <div
        class="mr-auto place-self-center w-full lg:w-[40%] landing-p mt-8 lg:mt-0"
      >
        <div class="flex items-center space-x-4 gap-[30px] w-full relative">
          <transition-group
            name="custom-fade"
            tag="div"
            class="flex items-center space-x-4 gap-[30px] overflow-hidden"
          >
            <div
              v-for="(image, index) in images"
              :key="image"
              :class="[
                'rounded-lg transition-all duration-500 ease-in-out',
                index === 0
                  ? 'w-[30rem] lg:w-[50rem] h-auto lg:h-[30rem] opacity-100 firstImg z-10'
                  : 'w-[10rem] lg:w-[20rem] h-auto lg:h-[20rem] opacity-50 z-0',
              ]"
              @click="setAsFirst(index)"
            >
              <img
                :src="image"
                alt="Image Slide"
                class="w-full h-full object-contain"
              />
            </div>
          </transition-group>

          <transition name="custom-fade" tag="div" class="overflow-hidden">
            <div
              class="absolute lg:top-[15%] top-[0%] left-0 transition-all duration-500 ease-in-out h-[30rem] w-[30rem] lg:h-[22rem] lg:w-[22rem]"
            >
              <img
                :src="outerSource()"
                alt="Outer"
                class="w-full h-full object-contain"
              />
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { ref, onMounted, onUnmounted } from "vue";
import img1 from "~/assets/images/landing-1.png";
import img2 from "~/assets/images/landing-2.png";
import img3 from "~/assets/images/landing-3.png";

const { t } = useI18n();

const images = ref([img3, img2, img1]);
const currentIndex = ref(0);

const subtitles = [
  "pages.landing.hero.firstSubtitle",
  "pages.landing.hero.secondSubtitle",
  "pages.landing.hero.thirdSubtitle",
];

const titles = [
  "pages.landing.hero.firstTitle",
  "pages.landing.hero.secondTitle",
  "pages.landing.hero.thirdTitle",
];

const descriptions = [
  "pages.landing.hero.firstDescription",
  "pages.landing.hero.secondDescription",
  "pages.landing.hero.thirdDescription",
];

const outerImagesLine = ref([
  new URL("~/assets/images/svgs/download.svg", import.meta.url).href,
  new URL("~/assets/images/svgs/download (2).svg", import.meta.url).href,
  new URL("~/assets/images/svgs/download(1).svg", import.meta.url).href,
]);

let timer = null;

const outerSource = () => outerImagesLine.value[0];

const rotateImages = () => {
  images.value.push(images.value.shift());
  outerImagesLine.value.push(outerImagesLine.value.shift());
  currentIndex.value = (currentIndex.value + 1) % subtitles.length;
};

const resetTimer = () => {
  if (timer) clearInterval(timer);
  timer = setInterval(rotateImages, 5000);
};

const setAsFirst = (index) => {
  images.value.unshift(images.value.splice(index, 1)[0]);
  outerImagesLine.value.unshift(outerImagesLine.value.splice(index, 1)[0]);
  currentIndex.value = index;
  resetTimer();
};

onMounted(resetTimer);
onUnmounted(() => timer && clearInterval(timer));
</script>

<style scoped>
.custom-slide-up-enter-active,
.custom-slide-up-leave-active {
  transition: all 0.5s ease;
  position: absolute;
}

.custom-slide-up-enter-from {
  opacity: 0;
  transform: translateY(20%);
}

.custom-slide-up-leave-to {
  opacity: 0;
  transform: translateY(-20%);
}

.custom-fade-enter-active,
.custom-fade-leave-active {
  transition: opacity 0.5s ease;
}

.custom-fade-enter-from,
.custom-fade-leave-to {
  opacity: 0;
}

.custom-fade-enter-to,
.custom-fade-leave-from {
  opacity: 1;
}

@media (max-width: 1024px) {
  .slide-content {
    text-align: center;
  }
}
</style>
