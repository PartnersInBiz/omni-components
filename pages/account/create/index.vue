<script setup lang="ts">
import type { Project, ProjectStepData, ProjectType } from "../../types";
const { accountTypes } = useAccount();
definePageMeta({
  title: "Wizard — Step 1",
  preview: {
    title: "Wizard — Step 1",
    description: "For onboarding and step forms",
    categories: ["dashboards", "wizard", "forms"],
    src: "/img/screens/wizard-1.png",
    srcDark: "/img/screens/wizard-1-dark.png",
    order: 30,
  },
});

const {
  getNextStep,
  data: project,
  goToStep,
} = useMultiStepForm<Project, ProjectStepData>();
useHead({
  title: "Project type",
});

function onSelectType(type: ProjectType) {
  const next = getNextStep();
  if (next) {
    project.value.type = type;
    goToStep(next);
  }
}
</script>

<template>
  <div>
    <WizardStepTitleAcount />
    <div class="w-full max-w-6xl px-4 mx-auto text-center">
      <div class="grid gap-6 ltablet:grid-cols-4 sm:grid-cols-2 lg:grid-cols-4">
        <!-- Choice -->
        <div
          v-for="(type, index) in accountTypes"
          :key="index"
          class="p-5 transition-all duration-300 dark:hover:bg-muted-800 hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 group rounded-2xl hover:bg-white hover:shadow-xl"
          :class="[
            project.type === type.value
              ? 'dark:bg-muted-800 shadow-muted-300/30 dark:shadow-muted-800/30 bg-white shadow-xl'
              : '',
          ]"
        >
          <img class="rounded-2xl" :src="type.src" :alt="type.title" />
          <div class="my-4">
            <BaseHeading
              tag="h3"
              weight="medium"
              size="xl"
              class="mb-2 text-muted-800 dark:text-muted-100"
            >
              <span>{{ type.title }}</span>
            </BaseHeading>
            <BaseParagraph class="text-muted-400">
              <span>
                {{ type.description }}
              </span>
            </BaseParagraph>
          </div>
          <div class="flex flex-col items-center mb-5">
            <BaseButton
              :to="getNextStep()?.to"
              color="primary"
              shape="curved"
              class="w-36"
              @click.prevent="() => onSelectType(type.value)"
            >
              <span>
                {{ project.type === type.value ? "Selected" : "Continue" }}
              </span>
            </BaseButton>
            <div class="mt-4 text-center">
              <NuxtLink
                to="/wizard"
                class="text-muted-400 hover:text-primary-500 font-sans text-[0.65rem] font-semibold uppercase opacity-0 transition-all duration-300 group-hover:opacity-100"
              >
                <span>Learn More</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
