<script setup lang="ts">
import { format } from "date-fns";

import {
  type CalendarCustomAttribute,
  type CalendarEvent,
  categoryTheme,
} from "../../utils/apps/calendar/index";

const props = defineProps<{
  event: CalendarCustomAttribute<CalendarEvent>;
}>();

const emits = defineEmits<{
  (event: "positiondrag", e: MouseEvent | TouchEvent): void;
}>();
</script>

<template>
  <div class="relative flex h-full gap-[1px] p-1">
    <div
      role="button"
      class="dnd-drag-handler hover:bg-muted-100 dark:hover:bg-muted-900 m-[1px] flex h-6 w-6 shrink-0 cursor-grab items-center justify-center rounded-full text-sm transition-colors duration-75"
    >
      <Icon
        name="ph:dots-six-vertical"
        class="w-4 h-4 text-muted-500 dark:text-muted-200"
        @pointerdown="(e: MouseEvent | TouchEvent) => emits('positiondrag', e)"
      />
    </div>
    <div class="w-full pe-1 [&>:not(:first-of-type):before]:mx-1">
      <div class="flex justify-between w-full items-top">
        <div>
          <div
            class="text-muted-800 dark:text-muted-200 line-clamp-2"
            :title="event.customData.title"
          >
            {{ event.customData.title || "New event" }}
          </div>
          <div class="text-muted-400">
            {{ format(event.customData.start_date, "HH:mm") }} to
            {{ format(event.customData.end_date, "HH:mm") }}
          </div>
        </div>

        <div v-if="event.customData.participants">
          <BaseAvatarGroup
            :limit="1"
            size="xxs"
            :avatars="
              event.customData.participants.map((participant) => ({
                src: participant.photo,
                'data-nui-tooltip': participant.name,
                'data-nui-tooltip-position': 'start',
              }))
            "
          >
          </BaseAvatarGroup>
        </div>
      </div>
      <div
        class="flex items-center justify-between pt-2 mt-1 border-t border-muted-200 dark:border-muted-700"
      >
        <div class="flex flex-wrap gap-2">
          <span
            v-if="event.customData.features?.record"
            class="text-muted-400"
            data-nui-tooltip="Recorded"
          >
            <Icon name="ph:monitor-play-duotone" class="w-4 h-4" />
          </span>
          <span
            v-if="event.customData.features?.drive"
            class="text-muted-400"
            data-nui-tooltip="Document joined"
          >
            <Icon name="ph:note-duotone" class="w-4 h-4" />
          </span>
          <span
            v-if="event.customData.features?.external"
            class="text-muted-400"
            data-nui-tooltip="External Users"
          >
            <Icon name="ph:lock-open-duotone" class="w-4 h-4" />
          </span>
          <span
            v-if="event.customData.features?.conversation"
            class="text-muted-400"
            data-nui-tooltip="Has comments"
          >
            <Icon name="ph:chats-circle-duotone" class="w-4 h-4" />
          </span>
        </div>
        <div>
          <div
            class="w-2 h-2 rounded-full"
            :class="[categoryTheme[event.customData.category].color]"
            :data-nui-tooltip="categoryTheme[event.customData.category].name"
            data-nui-tooltip-position="start"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
