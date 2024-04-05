<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The items to display in the component.
     */
    shape?: 'curved' | 'rounded' | 'square'
    /**
     * The image to display in the component.
     */
    image?: string
    /**
     * The badge small to display in the component.
     */
    badgeSmall?: string
    /**
     * The badge medium to display in the component.
     */
    badgeMedium?: string
    /**
     * The title to display in the component.
     */
    title?: string
    /**
     * The text to display in the component.
     */
    text?: string

    item_id: string
    class?: string
    address?: string
    phone?: string
    email?: string
  }>(),
  {
    shape: 'rounded',
    image: '',
    badgeSmall: '',
    badgeMedium: '',
    title: '',
    text: '',
    class: '',
    address: '',
    phone: '',
    email: '',
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
    <VcardRight
      :shape="shape"
      :image="image"
      :badge-small="badgeSmall"
      :badge-medium="badgeMedium"
      :title="title"
      :text="text"
      :class="classes"
      :address="address"
      :phone="phone"
      :email="email"
    />
  </BaseCard>
</template>