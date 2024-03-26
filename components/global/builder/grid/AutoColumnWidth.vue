<!-- =========================================================================================
    File Name: GridAutoColumnWidth.vue
    Description: Example of building grid layouts with Tailwind CSS
    ----------------------------------------------------------------------------------------

========================================================================================== -->

<script setup lang="ts">
const { addComponent } = useBuilders();
</script>

<template>
  <div title="Automatic Column Widths">
    <p>
      Use <code>flex-1</code> instead of an explicit width on your columns to
      have them size automatically to fill the row
    </p>

    <div class="mt-5">
      <!-- Full width column -->
      <div
        id="full-width"
        class="flex mb-4"
        @click="addComponent('full-width')"
      >
        <div class="flex flex-1 h-12 bg-gray-300">
          <span class="hidden m-auto sm:flex">flex-1</span>
        </div>
      </div>
      <!-- Five columns -->
      <div id="w-5" class="flex mb-4" @click="addComponent('w-5')">
        <div class="flex flex-1 h-12 bg-gray-500">
          <span class="hidden m-auto sm:flex">flex-1</span>
        </div>
        <div class="flex flex-1 h-12 bg-gray-300">
          <span class="hidden m-auto sm:flex">flex-1</span>
        </div>
        <div class="flex flex-1 h-12 bg-gray-500">
          <span class="hidden m-auto sm:flex">flex-1</span>
        </div>
        <div class="flex flex-1 h-12 bg-gray-300">
          <span class="hidden m-auto sm:flex">flex-1</span>
        </div>
        <div class="flex flex-1 h-12 bg-gray-500">
          <span class="hidden m-auto sm:flex">flex-1</span>
        </div>
      </div>
      <!-- Seven columns -->
      <div id="w-7" class="flex mb-4" @click="addComponent('w-7')">
        <div class="flex flex-1 h-12 bg-gray-500">
          <span class="hidden m-auto sm:flex">flex-1</span>
        </div>
        <div class="flex flex-1 h-12 bg-gray-300">
          <span class="hidden m-auto sm:flex">flex-1</span>
        </div>
        <div class="flex flex-1 h-12 bg-gray-500">
          <span class="hidden m-auto sm:flex">flex-1</span>
        </div>
        <div class="flex flex-1 h-12 bg-gray-300">
          <span class="hidden m-auto sm:flex">flex-1</span>
        </div>
        <div class="flex flex-1 h-12 bg-gray-500">
          <span class="hidden m-auto sm:flex">flex-1</span>
        </div>
        <div class="flex flex-1 h-12 bg-gray-300">
          <span class="hidden m-auto sm:flex">flex-1</span>
        </div>
        <div class="flex flex-1 h-12 bg-gray-500">
          <span class="hidden m-auto sm:flex">flex-1</span>
        </div>
      </div>
      <!-- Eleven columns -->
      <div id="w-11" class="flex mb-4" @click="addComponent('w-11')">
        <div class="flex flex-1 h-12 bg-gray-500">
          <span class="hidden m-auto sm:flex">flex-1</span>
        </div>
        <div class="flex flex-1 h-12 bg-gray-300">
          <span class="hidden m-auto sm:flex">flex-1</span>
        </div>
        <div class="flex flex-1 h-12 bg-gray-500">
          <span class="hidden m-auto sm:flex">flex-1</span>
        </div>
        <div class="flex flex-1 h-12 bg-gray-300">
          <span class="hidden m-auto sm:flex">flex-1</span>
        </div>
        <div class="flex flex-1 h-12 bg-gray-500">
          <span class="hidden m-auto sm:flex">flex-1</span>
        </div>
        <div class="flex flex-1 h-12 bg-gray-300">
          <span class="hidden m-auto sm:flex">flex-1</span>
        </div>
        <div class="flex flex-1 h-12 bg-gray-500">
          <span class="hidden m-auto sm:flex">flex-1</span>
        </div>
        <div class="flex flex-1 h-12 bg-gray-300">
          <span class="hidden m-auto sm:flex">flex-1</span>
        </div>
        <div class="flex flex-1 h-12 bg-gray-500">
          <span class="hidden m-auto sm:flex">flex-1</span>
        </div>
        <div class="flex flex-1 h-12 bg-gray-300">
          <span class="hidden m-auto sm:flex">flex-1</span>
        </div>
        <div class="flex flex-1 h-12 bg-gray-500">
          <span class="hidden m-auto sm:flex">flex-1</span>
        </div>
      </div>
    </div>
  </div>
</template>
