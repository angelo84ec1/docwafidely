<!-- components/JimnyScrollSection.vue -->
<template>
  <div class="bg-black">
    <div class="flex justify-center items-center text-white w-full h-screen">
      <h1>Start Container</h1>
    </div>
    <div class="container max-w-full h-screen relative flex flex-row">
      <div
        id="textContainer"
        class="w-1/2 h-screen flex flex-col justify-center items-center relative pl-12 box-border"
      >
        <div
          class="textelements opacity-0 absolute top-0 left-0 flex-col justify-center gap-12 w-full h-full"
        >
          <h4
            class="uppercase font-medium text-[35px] leading-[125%] text-white"
          >
            Ladder Frame Chassis
          </h4>
          <p class="font-light text-[15px] leading-[125%] text-white/50">
            Every Jimny owes its off-roading prowess to the Ladder Frame
            structure. Now, it's your turn to put it to the test. Pick your
            terrain. A thoroughbred off-roader, the torsional rigidity of this
            chassis instils confidence in the driver to master the toughest of
            topographies.
          </p>
        </div>
        <div
          class="textelements opacity-0 absolute top-0 left-0 flex-col justify-center gap-12 w-full h-full"
        >
          <h4
            class="uppercase font-medium text-[35px] leading-[125%] text-white"
          >
            3-link Rigid Axle Suspension With Coil Spring
          </h4>
          <p class="font-light text-[15px] leading-[125%] text-white/50">
            The long-stroke 3-link suspension is teamed with full-width rigid
            axles in both the front and rear. This coupled with less variation
            in ground clearance and high tyre grounding force enables you to
            conquer the toughest of terrains.
          </p>
        </div>
        <div
          class="textelements opacity-0 absolute top-0 left-0 flex-col justify-center gap-12 w-full h-full"
        >
          <h4
            class="uppercase font-medium text-[35px] leading-[125%] text-white"
          >
            Engine Performance
          </h4>
          <p class="font-light text-[15px] leading-[125%] text-white/50">
            When you are setting forth into the unknown, the responsive 1.5L
            K15B engine powers you through. Built for off-roading, it generates
            strong torque throughout a wide RPM range.
          </p>
        </div>
      </div>

      <div
        id="imgContainer"
        class="w-1/2 h-screen flex flex-col justify-center items-center relative pr-12 box-border"
      >
        <div
          class="imgelements opacity-0 absolute top-0 left-0 flex-col justify-center items-center h-screen w-full"
        >
          <img
            src="https://i.ibb.co/JvDd07v/Jimny-Chassis.png"
            alt="Jimny Chassis"
            class="w-full pl-[15vw] box-border"
          />
        </div>
        <div
          class="imgelements opacity-0 absolute top-0 left-0 flex-col justify-center items-center h-screen w-full"
        >
          <img
            src="https://i.ibb.co/rQTTfPz/Jimny-Suspension.png"
            alt="Jimny Suspension"
            class="w-full pl-[15vw] box-border"
          />
        </div>
        <div
          class="imgelements opacity-0 absolute top-0 left-0 flex-col justify-center items-center h-screen w-full"
        >
          <img
            src="https://i.ibb.co/QdkQmdQ/Jimny-Engine.png"
            alt="Jimny Engine"
            class="w-full pl-[15vw] box-border"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";

const { $gsap, $ScrollTrigger } = useNuxtApp();

onMounted(() => {
  // Ensure client-side only
  if (process.client) {
    const textElements = document.querySelectorAll(".textelements");
    const imgElements = document.querySelectorAll(".imgelements");

    const toggleRevealText = (index) => {
      textElements.forEach((el, i) => {
        if (i === index) {
          el.classList.remove("opacity-0");
          el.classList.add("opacity-100");
        } else {
          el.classList.remove("opacity-100");
          el.classList.add("opacity-0");
        }
      });
    };

    const toggleRevealImg = (index) => {
      imgElements.forEach((el, i) => {
        if (i === index) {
          el.classList.remove("opacity-0");
          el.classList.add("opacity-100");
        } else {
          el.classList.remove("opacity-100");
          el.classList.add("opacity-0");
        }
      });
    };

    $gsap.set(imgElements, {
      yPercent: (i) => (i ? 100 : 0),
    });

    const tl = $gsap.timeline({
      scrollTrigger: {
        trigger: ".container",
        start: "top top",
        end: () => "+=" + 100 * imgElements.length + "%",
        pin: true,
        scrub: 1,
      },
    });

    imgElements.forEach((panel, index) => {
      if (index) {
        tl.to(
          panel,
          {
            yPercent: 0,
            ease: "none",
          },
          "+=0.25"
        );
        if (textElements[index]) {
          tl.call(toggleRevealText, [index], "<+=0.125");
        }
      } else {
        tl.call(toggleRevealText, [index], 0.125);
      }
    });

    textElements.forEach((panel, index) => {
      if (index) {
        tl.to(
          panel,
          {
            yPercent: 0,
            ease: "none",
          },
          "+=0.25"
        );
        if (imgElements[index]) {
          tl.call(toggleRevealImg, [index], "<+=0.125");
        }
      } else {
        tl.call(toggleRevealImg, [index], 0.125);
      }
    });
  }
});
</script>
