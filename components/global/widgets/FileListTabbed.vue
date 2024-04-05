<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    shape?: 'straight' | 'rounded' | 'curved' | 'full'
    title: string
    class?: string
    labels: string[]
    item_id: string
    recentFiles: {
      id: number
      icon: string
      name: string
      type: string
    }[]
    savedFiles: {
      id: number
      icon: string
      name: string
      type: string
    }[]
  }>(),
  {
    shape: 'rounded',
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
    <FileListTabbed
      :shape="shape"
      :title="title"
      :labels="labels"
      :recent-files="recentFiles"
      :saved-files="savedFiles"
    />
  </BaseCard>
</template>
