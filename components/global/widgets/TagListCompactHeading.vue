<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    shape?: 'straight' | 'rounded' | 'curved'
    tags?: any[]
    title: string
    item_id: string
    class: string
  }>(),
  {
    shape: 'rounded',
    tags: () => {
      return [
        {
          id: 1,
          name: 'Politics',
          highlight: false,
        },
        {
          id: 2,
          name: 'Economy',
          highlight: true,
        },
        {
          id: 3,
          name: 'Finance',
          highlight: false,
        },
        {
          id: 4,
          name: 'Environment',
          highlight: false,
        },
        {
          id: 5,
          name: 'Food',
          highlight: false,
        },
        {
          id: 6,
          name: 'Technology',
          highlight: true,
        },
      ]
    },
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
    <div class="mb-6 flex items-center justify-between">
      <BaseHeading
        as="h3"
        size="md"
        weight="semibold"
        lead="tight"
        class="text-muted-800 dark:text-white"
      >
        <span>{{ title }}</span>
      </BaseHeading>
    </div>
    <TagListCompact :tags="tags" :shape="shape" />
  </BaseCard>
</template>
