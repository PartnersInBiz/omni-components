<!-- =========================================================================================
    File Name: GridColumnSpacing.vue
    Description: Add space between columns
    ----------------------------------------------------------------------------------------

========================================================================================== -->

<script setup lang="ts">
const { addComponent } = useBuilders();
</script>

<template>
  <div title="Column Spacing">
    <p>
      Add a negative horizontal margin like <code>-mx-2</code> to your column
      container and an equal horizontal padding like <code>px-2</code> to each
      column to add gutters
    </p>

    <p>
      To prevent horizontal scrolling in full width layouts, add
      <code>overflow-hidden</code> to another parent container, or compensate
      for the negative margin with matching horizontal padding
    </p>

    <div
      id="column-spacing"
      class="mt-5"
      @click="addComponent('column-spacing')"
    >
      <div class="px-2">
        <div class="flex -mx-2">
          <div class="w-1/3 px-2">
            <div class="bg-gray-500 h-12 flex">
              <span class="flex m-auto">w-1/3</span>
            </div>
          </div>
          <div class="w-1/3 px-2">
            <div class="bg-gray-300 h-12 flex">
              <span class="flex m-auto">w-1/3</span>
            </div>
          </div>
          <div class="w-1/3 px-2">
            <div class="bg-gray-500 h-12 flex">
              <span class="flex m-auto">w-1/3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
