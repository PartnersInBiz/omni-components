<script setup lang="ts">
defineProps<{
  components?: any;
  bodyAttrs?: string;
}>();
</script>

<template>
  <component
    :is="comp.comp"
    v-for="(comp, index) in components"
    :key="index"
    v-bind="comp.schema"
  >
  <Icon name='ri:fire-fill' class='w-5 h-5 text-danger-500' />
    <template
      v-for="(slot, index) in comp.slots"
      :key="index"
      v-slot:[slot.slot]="slotProps"
    >
      <component
        v-bind="{ ...slotProps, ...slcomp.schema }"
        :class="slcomp.shema?.class"
        :is="slcomp.comp"
        v-for="(slcomp, index) in slot.components"
        :key="index"
      >
      </component>
    </template>
  </component>
</template>