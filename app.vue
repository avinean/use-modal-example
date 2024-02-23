<script setup lang="ts">
import { Modal1 } from '#components'

const { configs, open, close } = useModalNew()

function callModal() {
  open(Modal1)
}
</script>

<template>
  <NuxtLayout>
    <UButton @click="callModal">
      Call modal 1
    </UButton>

    <UModal
      v-for="(modal, key) in configs"
      :key="key"
      :model-value="true"
      prevent-close
      @close="close"
    >
      <UCard :ui="{ divide: 'divide-y divide-gray-100' }">
        <template #header>
          <div class="flex justify-end p-2">
            <UButton @click="close">
              Close
            </UButton>
          </div>
        </template>
        <component
          :is="modal.component"
          v-bind="modal.props"
          @submit="close"
        />
      </UCard>
    </UModal>
  </NuxtLayout>
</template>