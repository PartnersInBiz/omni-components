<script setup lang="ts">
const props: any = withDefaults(
  defineProps<{
    country: string
    countryFull: object
  }>(),
  {
    country: 'South Africa',
  },
)
const route = useRoute()
const router = useRouter()
const page = ref(1)
const filter = ref('')
const perPage = ref(10)

watch([filter, perPage], () => {
  router.push({
    query: {
      page: undefined,
    },
  })
})

const search = (val: string) => {
  filter.value = val
}
const em: any = getCurrentInstance()
const selectedCountry = ref('')
const selectedData: any = ref({})
const querySelected = computed(() => {
  return {
    filter: selectedCountry.value,
    perPage: perPage.value,
    page: page.value,
  }
})

onMounted(() => {
  selectedCountry.value = props.country
})

watch(
  () => props.country,
  () => {
    selectedCountry.value = props.country
  },
)

watch(
  () => selectedCountry.value,
  async () => {
    const {
      data: dataSelected,
      pending: pendingSelected,
      error: errorSelected,
      refresh: refreshSelected,
    } = await useFetch(
      useApiRoute(
        `/api/countries?filter=${querySelected.value.filter}&perPage=1&page=1`,
      ),
    )
    refreshSelected()
    if (dataSelected.value.data) {
      if (dataSelected.value.data.length > 0) {
        selectedData.value = dataSelected.value.data[0]
        if (dataSelected.value.data[0].name === selectedCountry.value)
          em.emit('selectedCountry', dataSelected.value.data[0])
      }
    } else {
      console.error('ERROR', dataSelected.value.data)
    }
  },
)

const query = computed(() => {
  return {
    filter: filter.value,
    perPage: perPage.value,
    page: page.value,
  }
})

const { data, pending, error, refresh } = await useFetch(
  useApiRoute('/api/countries', {
    query,
  }),
)
const updatePage = (pg: number) => {
  page.value = pg
}
const isModalBodyOpen = ref(false)
</script>
<template>
  <div
    class="bg-muted-100 dark:bg-muted-700/70 flex items-center gap-2 rounded-lg p-4"
  >
    <Modal :open="isModalBodyOpen" size="lg" @close="isModalBodyOpen = false">
      <BaseCard>
        <template #header>
          <!-- Header -->
          <div class="flex w-full items-center justify-between p-4 md:p-6">
            <div class="flex w-full items-center justify-between">
              <SearchCompact @search="search" />
            </div>
            <BaseButtonClose @click="isModalBodyOpen = false" />
          </div>
        </template>

        <!-- Body -->
        <div class="p-4 md:p-6">
          <div class="relative w-16" v-if="selectedData">
            <input
              type="radio"
              name="country_selection"
              class="peer absolute start-0 top-0 z-20 h-full w-full cursor-pointer opacity-0"
              checked
            />
            <div
              class="border-muted-200 peer-checked:border-primary-500 dark:border-muted-600 group flex h-14 w-14 items-center justify-center rounded-full border-2 shadow-lg transition-all duration-300"
            >
              <img
                class="h-10 w-10 rounded-full"
                :src="selectedData.image"
                alt="flag icon"
              />
            </div>
            <div
              class="bg-primary-500 dark:border-muted-800 absolute -end-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full border-4 border-white text-white"
            >
              <Icon name="feather:check" class="h-3 w-3" />
            </div>
          </div>
          <div class="relative my-4 grid grid-cols-5 gap-2">
            <div
              class="relative"
              v-for="(cntry, index) in data.data"
              :key="index"
            >
              <div class="relative w-16">
                <input
                  type="radio"
                  name="country_selection"
                  class="peer absolute start-0 top-0 z-20 h-full w-full cursor-pointer opacity-0"
                  checked
                  v-model="selectedCountry"
                  :value="cntry.name"
                />
                <div
                  class="border-muted-200 peer-checked:border-primary-500 dark:border-muted-600 group flex h-14 w-14 items-center justify-center rounded-full border-2 shadow-lg transition-all duration-300"
                >
                  <img
                    class="h-10 w-10 rounded-full"
                    :src="cntry.image"
                    alt="flag icon"
                  />
                </div>
                <div
                  class="bg-primary-500 dark:border-muted-800 absolute -end-1 -top-1 hidden h-7 w-7 items-center justify-center rounded-full border-4 border-white text-white peer-checked:flex"
                >
                  <Icon name="feather:check" class="h-3 w-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <template #footer>
          <BasePagination
            :item-per-page="perPage"
            :total-items="data.total"
            :current-page="page"
            :max-links-displayed="5"
            shape="curved"
            no-router
            @update:current-page="updatePage"
          />
        </template>
      </BaseCard>
    </Modal>
    <BaseAvatar v-if="countryFull.image" size="xs" :src="countryFull.image" />
    <BaseText size="sm" class="text-muted-500 dark:text-muted-400">{{
      country
    }}</BaseText>
    <div class="ms-auto">
      <div
        @click="isModalBodyOpen = !isModalBodyOpen"
        class="text-primary-500 font-sans text-sm underline-offset-4 hover:underline"
      >
        Changes
      </div>
    </div>
  </div>
</template>
