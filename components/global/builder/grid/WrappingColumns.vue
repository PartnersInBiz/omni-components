<!-- =========================================================================================
    File Name: GridWrappingColumns.vue
    Description: flexbox flex-wrap in action
    ----------------------------------------------------------------------------------------

========================================================================================== -->

<script setup lang="ts">
const { addComponent } = useBuilders();
</script>

<template>
  <div title="Wrapping Columns">
    <p>
      Add <code>flex-wrap</code> to your column container to allow columns to
      wrap when they run out of room
    </p>

    <div id="flex-wrap" class="mt-5" @click="addComponent('flex-wrap')">
      <div class="flex flex-wrap -mb-4">
        <div class="flex w-1/3 h-12 mb-4 bg-gray-500">
          <span class="flex m-auto">w-1/3</span>
        </div>
        <div class="flex w-1/3 h-12 mb-4 bg-gray-300">
          <span class="flex m-auto">w-1/3</span>
        </div>
        <div class="flex w-1/3 h-12 mb-4 bg-gray-500">
          <span class="flex m-auto">w-1/3</span>
        </div>
        <div class="flex w-1/3 h-12 mb-4 bg-gray-300">
          <span class="flex m-auto">w-1/3</span>
        </div>
        <div class="flex w-1/3 h-12 mb-4 bg-gray-500">
          <span class="flex m-auto">w-1/3</span>
        </div>
      </div>
    </div>
  </div>
</template>
