<template>
  <span class="svg-icon">
    <component
      :is="icon"
      class="svg-icon-el"
      :style="styles"
    />
  </span>
</template>

<script setup lang="ts">
import { useRuntimeConfig, defineAsyncComponent, computed } from '#imports'

const config = useRuntimeConfig()
const svgIconsConfig = config.nuxt3SvgIcons
const svgIconsDir = svgIconsConfig.dir

interface Props {
  name: string
  fill: string | undefined
  stroke: string | undefined
  strokeWidth: string | undefined
  size?: string | { width: string, height: string }
  useTextColor?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: '1em',
  useTextColor: false
})

const styles = computed(() => {
  const styles: Array<any> = []
  props.useTextColor && styles.push(["fill", "currentColor !important"])
  props.fill && !props.useTextColor && styles.push(["fill", props.fill])
  props.stroke && styles.push(["stroke", props.stroke])
  props.strokeWidth && styles.push(["stroke", props.strokeWidth])
  if (props.size && typeof props.size === "object") {
    styles.push(["width", props.size.width], ["height", props.size.height])
  } else if (props.size && typeof props.size === "string") {
    styles.push(["width", props.size], ["height", props.size])
  }

  const mappedStyles = new Map(styles)
  return Object.fromEntries(mappedStyles)
})

const icon = defineAsyncComponent((): any => {
try {
return import(/* @vite-ignore */ `${svgIconsDir}/${props.name}.svg?component`);
} catch (error) {
console.log(`The icon ${props.name} could not be found.`);
return;
}
})
</script>

<style>
.svg-icon-el {
  display: inline-block;
  vertical-align: middle;
}
</style>
