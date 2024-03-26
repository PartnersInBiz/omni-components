<!-- =========================================================================================
    File Name: GridMixedColumnSizes.vue
    Description: Create columns of different sizes
    ----------------------------------------------------------------------------------------

========================================================================================== -->

<script setup lang="ts">
const { addComponent } = useBuilders();
</script>

<template>
  <div title="Mixed Column Sizes">
    <p>Mix different percentage width utilities to build mixed size grids</p>

    <div class="mt-5">
      <!-- Narrower side column -->
      <div id="narrow" class="flex mb-4" @click="addComponent('narrow')">
        <div class="w-3/4 bg-gray-300 h-12 flex">
          <span class="flex m-auto">w-3/4</span>
        </div>
        <div class="w-1/4 bg-gray-500 h-12 flex">
          <span class="flex m-auto">w-1/4</span>
        </div>
      </div>
      <!-- Wide center column -->
      <div id="wide" class="flex" @click="addComponent('wide')">
        <div class="w-1/5 bg-gray-300 h-12 flex">
          <span class="flex m-auto">w-1/5</span>
        </div>
        <div class="w-3/5 bg-gray-500 h-12 flex">
          <span class="flex m-auto">w-3/5</span>
        </div>
        <div class="w-1/5 bg-gray-300 h-12 flex">
          <span class="flex m-auto">w-1/5</span>
        </div>
      </div>
    </div>
  </div>
</template>
