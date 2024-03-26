<!-- =========================================================================================
    File Name: GridResponsiveGrids.vue
    Description: Create responsive grids using tailwind css
    ----------------------------------------------------------------------------------------

========================================================================================== -->

<script setup lang="ts">
const colClass = ref("");
const { addComponent } = useBuilders();
</script>

<template>
  <div title="Responsive Grids">
    <p>
      Use the responsive variants of the width utilities to build responsive
      grid layouts
    </p>

    <div class="mt-5">
      <div class="flex flex-wrap mb-base">
        <button class="mb-4 mr-4" @click="colClass = 'w-full'">
          All (w-full)
        </button>
        <button class="mb-4 mr-4" @click="colClass = 'w-1/2'">sm:w-1/2</button>
        <button class="mb-4 mr-4" @click="colClass = 'w-1/3'">md:w-1/3</button>
        <button class="mb-4 mr-4" @click="colClass = 'w-1/4'">lg:w-1/4</button>
        <button class="mb-4 mr-4" @click="colClass = 'w-1/6'">xl:w-1/6</button>
      </div>
      <div
        id="responsive"
        class="flex flex-wrap"
        @click="addComponent('responsive')"
      >
        <div :class="colClass" class="h-12 mb-4 bg-gray-300" />
        <div :class="colClass" class="h-12 mb-4 bg-gray-500" />
        <div :class="colClass" class="h-12 mb-4 bg-gray-300" />
        <div :class="colClass" class="h-12 mb-4 bg-gray-500" />
        <div :class="colClass" class="h-12 mb-4 bg-gray-300" />
        <div :class="colClass" class="h-12 mb-4 bg-gray-500" />
      </div>
    </div>
  </div>
</template>
