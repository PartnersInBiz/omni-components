<script setup lang="ts">
import type { Project, ProjectStepData } from "../../types";
const { user, accounts, account } = useAccount();
const { generateUuid5 } = useWeaviate();
const { ObjectCreateWithId: createObjectWithId } = useWeaviateObjectCreate();
const { ObjectUpdate: updateObject } = useWeaviateObjectUpdate();

definePageMeta({
  layout: "empty",
});

const initialState = ref<Project>({
  type: undefined,
  name: "",
  description: "",
  start_date: undefined,
  end_date: undefined,
  customer: {
    name: undefined,
    logo: undefined,
    location: undefined,
  },
  files: null,
  avatar: null,
  team: [],
  tools: [],
  budget: "< 5K",
});

const wizardSteps = [
  {
    to: "/account/create",
    meta: {
      name: "Workspace type",
      title: "Select workspace type",
      subtitle: "Select the type of project you want to create",
    } satisfies ProjectStepData,
  },
  {
    to: "/account/create/step-2",
    meta: {
      name: "Account info",
      title: "What is this account about?",
      subtitle: "Manage better by adding all relevant account information",
    } satisfies ProjectStepData,
  },
  {
    to: "/account/create/step-3",
    meta: {
      name: "Account details",
      title: "Add more details",
      subtitle: "Add useful details to your account. You can edit this later",
    } satisfies ProjectStepData,
  },
  {
    to: "/account/create/step-4",
    meta: {
      name: "Account files",
      title: "Add files to this account",
      subtitle:
        "Or you can skip this step. You can always add more files later",
    } satisfies ProjectStepData,
  },
  {
    to: "/account/create/step-5",
    meta: {
      name: "Team members",
      title: "Who will be working on this account?",
      subtitle: "Start by adding members to your team",
    } satisfies ProjectStepData,
  },
  {
    to: "/account/create/step-6",
    meta: {
      name: "Account tools",
      title: "What tools will you be using?",
      subtitle: "Choose a set of tools that you'll be using in this account",
    } satisfies ProjectStepData,
  },
  {
    to: "/account/create/step-7",
    meta: {
      preview: true,
      name: "Finish",
      title: "Make sure it looks good",
      subtitle:
        "You can go back to previous steps if you need to edit anything",
    } satisfies ProjectStepData,
  },
];

const router = useRouter();

const { handleSubmit, currentStep } = createMultiStepForm<
  Project,
  ProjectStepData
>({
  initialState: initialState,
  steps: wizardSteps,
  onSubmit: async (state, ctx) => {
    console.log("multi-step-submit", state);

    if (!state.type) {
      ctx.goToStep(ctx.getStep(0));
      throw new Error("Please select a project type");
    }
    if (!state.name) {
      ctx.goToStep(ctx.getStep(1));
      throw new Error("Enter a project name");
    }
    console.log("multi-step-submit", state);
    console.log("multi-step-user", user.value);

    state = {
      ...state,
      start_date: new Date(state.start_date).toISOString(),
      end_date: new Date(state.end_date).toISOString(),
      owner: user.value?._additional.id,
      team: [...state.team, user.value?._additional.id],
    };
    if (state.files === null) {
      delete state.files;
    }
    delete state.customer;
    delete state.avatar;
    delete state.tools;
    console.log("multi-step-state", state);
    const result: any = await createObjectWithId(
      "Account",
      state,
      generateUuid5(JSON.stringify(state))
    );

    console.log("createObjectWithId", result);

    accounts.value = [...accounts.value, result.properties];
    account.value = result;
    user.value = {
      ...user.value,
      accounts: [...user.value.accounts, result.id],
    };

    console.log("update-user", user.value);
    const resultUser = await updateObject("User", user.value._additional.id, {
      accounts: user.value.accounts,
    });
    console.log("updateObject", resultUser);

    if (result.id) {
      useNotification("Success", "You are registered 🔥🔥");
      router.push("/");
    }
  },
  onError: (error) => {
    console.log("multi-step-error", error);

    useNotification("Oops", `Something went wrong 😢😢 `);
  },
});

useHead({
  titleTemplate: (title) =>
    `${title} | Account - Step ${currentStep.value + 1}`,
});
</script>

<template>
  <SidebarLayout
    :toolbar="false"
    :sidebar="false"
    class="w-full min-h-screen bg-muted-100 dark:bg-muted-900"
  >
    <template #logo>
      <NuxtLink
        to="/"
        class="flex items-center justify-center w-12 h-12 transition-colors duration-300 text-muted-400 hover:text-primary-500 hover:bg-primary-500/20 rounded-2xl"
        @click.prevent="$router.back()"
      >
        <Icon name="lucide:arrow-left" class="w-5 h-5" />
      </NuxtLink>
    </template>

    <WizardNavigation />

    <form action="" method="POST" @submit.prevent="handleSubmit" novalidate>
      <div class="pt-24 pb-32">
        <RouterView />
      </div>
      <WizardButtons />
    </form>
  </SidebarLayout>
</template>
