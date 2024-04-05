<script setup lang='ts'>
import { Calendar } from 'v-calendar'

import 'v-calendar/dist/style.css'
import '~/assets/css/vcalendar.css'

const props = withDefaults(
  defineProps<{
    shape?: 'straight' | 'rounded' | 'curved'
    class?: string
    attributes: any
    titleposition: string
    expanded: boolean
    borderless: boolean
    transparent: boolean
    trimweeks: boolean
    classcalendar: string
    item_id: string
  }>(),
  {
    shape: 'rounded',
    class: '',
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
    <Calendar
      :attributes="attributes"
      :title-position="titleposition"
      :expanded="expanded"
      :borderless="borderless"
      :transparent="transparent"
      :trim-weeks="trimweeks"
      :class="classcalendar"
      :id="item_id_item"
    />
  </BaseCard>
</template>