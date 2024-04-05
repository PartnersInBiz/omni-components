<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    shape?: 'straight' | 'rounded' | 'curved'
    src?: string
    srcDark?: string
    alt?: string
    width: number
    height: number
    loading?: boolean
    class: string
    item_id: string
  }>(),
  {
    shape: 'rounded',
    src: undefined,
    srcDark: undefined,
    alt: undefined,
  },
)

const classes = computed(() => {
  return props.class
})
const { listenUp, removeListen } = useBuilders()

const isEditAppState = useState('isEditAppState', () => {
  return false
})

watchEffect(() => {
  if (isEditAppState.value) {
    setTimeout(() => {
      listenUp(props.item_id)
    }, 1000)
  } else {
    removeListen(props.item_id)
  }
})
onMounted(() => {
  if (isEditAppState.value) {
    setTimeout(() => {
      listenUp(props.item_id)
      var old_element: any = document.getElementById(item_id_item)
      var new_element = old_element.cloneNode(true)
      old_element.parentNode.replaceChild(new_element, old_element)
    }, 1000)
  } else {
    removeListen(props.item_id)
  }
})
const item_id_item = props.item_id + Math.random().toString(36).substring(7)
</script>

<template>
  <BaseCard :shape="shape" :class="classes" :id="item_id">
    <Picture
      :src="src"
      :alt="alt"
      :shape="shape"
      :height="height"
      :width="width"
      :loading="loading"
    />
  </BaseCard>
</template>
