<script setup lang="ts">
const divPropsLive = defineProps({
  item_id: {
    type: String,
    default: "",
  },
  class: {
    type: String,
    default: "",
  },
  style: {
    type: String,
    default: "",
  },
  innerText: {
    type: String,
    default: "",
  },
  isClickable: {
    type: Boolean,
    default: false,
  },
  children: {
    type: Array,
    default: () => {
      return [];
    },
  },
  span: {
    type: String,
    default: "",
  },
  data: {
    type: Object,
    default: () => {
      return {};
    },
  },
});

const classes = computed(() => divPropsLive.class);

const isEditAppState = useState("isEditAppState", () => {
  return false;
});

const { listenUp, removeListen } = useBuilders();

watchEffect(() => {
  if (isEditAppState.value) {
    
    setTimeout(() => {
      listenUp(divPropsLive.item_id);
    }, 1000);
  } else {
    removeListen(divPropsLive.item_id);
  }
});
onMounted(() => {
  if (isEditAppState.value) {
    
    setTimeout(() => {
      listenUp(divPropsLive.item_id);
    }, 1000);
  } else {
    removeListen(divPropsLive.item_id);
  }
});
</script>

<template>
  <col :id="item_id" :class="classes" :style="style" :span="span" />
</template>
