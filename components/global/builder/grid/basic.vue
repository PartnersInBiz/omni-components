<script setup lang="ts">
const { addComponent } = useBuilders();
</script>

<template>
  <div title="Basic Grids">
    <!-- <p>
      Use the existing
      <a href="https://tailwindcss.com/docs/flexbox-display" rel="nofollow">Flexbox</a>
      and
      <a href="https://tailwindcss.com/docs/width" rel="nofollow">percentage width</a>
      utilities to construct basic grids
    </p> -->

    <div class="mt-5">
      <div class="hidden">
        <div id="w-full" class="flex w-full h-12 bg-gray-300" />
        <div id="w-1/2" class="flex w-full">
          <div class="w-1/2 h-12 bg-gray-500" />
          <div class="w-1/2 h-12 bg-gray-300" />
        </div>
        <div id="w-1/3" class="flex w-full">
          <div class="w-1/3 h-12 bg-gray-500" />
          <div class="w-1/3 h-12 bg-gray-300" />
          <div class="w-1/3 h-12 bg-gray-500" />
        </div>
        <div id="w-1/4" class="flex w-full">
          <div class="w-1/4 h-12 bg-gray-300" />
          <div class="w-1/4 h-12 bg-gray-500" />
          <div class="w-1/4 h-12 bg-gray-300" />
          <div class="w-1/4 h-12 bg-gray-500" />
        </div>
        <div id="w-1/5" class="flex w-full">
          <div class="w-1/5 h-12 bg-gray-300" />
          <div class="w-1/5 h-12 bg-gray-500" />
          <div class="w-1/5 h-12 bg-gray-300" />
          <div class="w-1/5 h-12 bg-gray-500" />
          <div class="w-1/5 h-12 bg-gray-300" />
        </div>
        <div id="w-1/6" class="flex w-full">
          <div class="w-1/6 h-12 bg-gray-500" />
          <div class="w-1/6 h-12 bg-gray-300" />
          <div class="w-1/6 h-12 bg-gray-500" />
          <div class="w-1/6 h-12 bg-gray-300" />
          <div class="w-1/6 h-12 bg-gray-500" />
          <div class="w-1/6 h-12 bg-gray-300" />
        </div>
      </div>
      <!-- Full width column -->
      <div class="flex mb-4 cursor-pointer" @click="addComponent('w-full')">
        <div class="flex w-full h-12 bg-gray-300">
          <span class="m-auto sm:flex">w-full</span>
        </div>
      </div>

      <!-- Two columns -->
      <div class="flex mb-4 cursor-pointer" @click="addComponent('w-1/2')">
        <div class="flex w-1/2 h-12 bg-gray-500">
          <span class="m-auto sm:flex">1/2</span>
        </div>
        <div class="flex w-1/2 h-12 bg-gray-300">
          <span class="m-auto sm:flex">1/2</span>
        </div>
      </div>

      <!-- Three columns -->
      <div class="flex mb-4 cursor-pointer" @click="addComponent('w-1/3')">
        <div class="flex w-1/3 h-12 bg-gray-500">
          <span class="m-auto sm:flex">1/3</span>
        </div>
        <div class="flex w-1/3 h-12 bg-gray-300">
          <span class="m-auto sm:flex">1/3</span>
        </div>
        <div class="flex w-1/3 h-12 bg-gray-500">
          <span class="m-auto sm:flex">1/3</span>
        </div>
      </div>

      <!-- Four columns -->
      <div class="flex mb-4 cursor-pointer" @click="addComponent('w-1/4')">
        <div class="flex w-1/4 h-12 bg-gray-300">
          <span class="m-auto sm:flex">1/4</span>
        </div>
        <div class="flex w-1/4 h-12 bg-gray-500">
          <span class="m-auto sm:flex">1/4</span>
        </div>
        <div class="flex w-1/4 h-12 bg-gray-300">
          <span class="m-auto sm:flex">1/4</span>
        </div>
        <div class="flex w-1/4 h-12 bg-gray-500">
          <span class="m-auto sm:flex">1/4</span>
        </div>
      </div>

      <!-- Five columns -->
      <div class="flex mb-4 cursor-pointer" @click="addComponent('w-1/5')">
        <div class="flex w-1/5 h-12 bg-gray-300">
          <span class="m-auto sm:flex">1/5</span>
        </div>
        <div class="flex w-1/5 h-12 bg-gray-500">
          <span class="m-auto sm:flex">1/5</span>
        </div>
        <div class="flex w-1/5 h-12 bg-gray-300">
          <span class="m-auto sm:flex">1/5</span>
        </div>
        <div class="flex w-1/5 h-12 bg-gray-500">
          <span class="m-auto sm:flex">1/5</span>
        </div>
        <div class="flex w-1/5 h-12 bg-gray-300">
          <span class="m-auto sm:flex">1/5</span>
        </div>
      </div>

      <!-- Six columns -->
      <div class="flex" @click="addComponent('w-1/6')">
        <div class="flex w-1/6 h-12 bg-gray-500">
          <span class="m-auto sm:flex">1/6</span>
        </div>
        <div class="flex w-1/6 h-12 bg-gray-300">
          <span class="m-auto sm:flex">1/6</span>
        </div>
        <div class="flex w-1/6 h-12 bg-gray-500">
          <span class="m-auto sm:flex">1/6</span>
        </div>
        <div class="flex w-1/6 h-12 bg-gray-300">
          <span class="m-auto sm:flex">1/6</span>
        </div>
        <div class="flex w-1/6 h-12 bg-gray-500">
          <span class="m-auto sm:flex">1/6</span>
        </div>
        <div class="flex w-1/6 h-12 bg-gray-300">
          <span class="m-auto sm:flex">1/6</span>
        </div>
      </div>
    </div>
  </div>
</template>
