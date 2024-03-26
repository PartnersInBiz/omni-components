<!-- =========================================================================================
    File Name: GridColumnOrder.vue
    Description: Change the order of columns
    ----------------------------------------------------------------------------------------

========================================================================================== -->

<script setup lang="ts">
const { addComponent } = useBuilders();
</script>

<template>
  <div title="Column Order">
    <p>
      Use <code>flex-row-reverse</code> to reverse column order. Useful for
      two-column responsive layouts where the column on right should appear
      first on smaller screens
    </p>

    <div class="mt-5">
      <div
        id="row-reverse"
        class="flex md:flex-row-reverse flex-wrap"
        @click="addComponent('row-reverse')"
      >
        <div class="w-full md:w-3/4 bg-grey p-4 text-center text-grey-lighter">
          1
        </div>
        <div
          class="w-full md:w-1/4 bg-grey-light p-4 text-center text-grey-darker"
        >
          2
        </div>
      </div>
    </div>
  </div>
</template>
