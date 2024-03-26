<script setup lang='ts'>
const props = withDefaults(
  defineProps<{
    src?: string;
    srcDark?: string;
    classes?: string;
    alt?: string;
  }>(),
  {
    src: "/icons/light/logo.png",
    srcDark: "/icons/dark/logo.png",
    classes: "h-200 w-200",
    alt: "Omni",
  }
);
const colorMode = useColorMode();

const src = computed(() =>
  colorMode.value === "dark" ? props.srcDark : props.src
);
</script>
<template>
  <img :src="src" :class="classes" :alt="alt" />
</template>
