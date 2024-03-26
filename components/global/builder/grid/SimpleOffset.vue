<!-- =========================================================================================
    File Name: GridSimpleOffset.vue
    Description: Add offset to columns
    ----------------------------------------------------------------------------------------

========================================================================================== -->

<script setup lang="ts">
const { addComponent } = useBuilders();
</script>

<template>
  <div title="Simple Offsets">
    <p>
      Use auto margin utilities like <code>ml-auto</code> and
      <code>mr-auto</code> to offset columns in a row
    </p>

    <div id="offset" class="mt-5" @click="addComponent('offset')">
      <div class="flex flex-wrap">
        <div class="w-1/3 ml-auto bg-gray-300 h-12 flex">
          <span class="flex m-auto">
            <span class="sm:inline hidden mr-2">w-1/3</span>
            <span>ml-auto</span>
          </span>
        </div>
        <div class="w-1/3 mr-auto bg-gray-500 h-12 flex">
          <span class="flex m-auto">
            <span class="sm:inline hidden mr-2">w-1/3</span>
            <span>mr-auto</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
