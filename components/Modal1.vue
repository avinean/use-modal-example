<script lang="ts" setup>
import { Modal2 } from '#components'

const { open } = useModalNew()

const results2 = ref<number[]>([])
const results3 = ref<number[]>([])

function callModal2() {
  open(Modal2, {
    onSubmit(result) {
      results2.value.push(result)
    },
  })
}

function callModal3() {
  open(Modal2, {
    onSubmit(result) {
      results3.value.push(result)
    },
  })
}
</script>

<template>
  <div>
    <div>Hi, I'm modal 1.</div>
    <div>I don't have necessary data</div>
    <div class="p-2">
      <div>Let's call modal 2 to receive it</div>
      <UButton @click="callModal2">
        call modal 2
      </UButton>

      <UCard>
        <div v-for="result in results2" :key="result">
          Received data: {{ result }}
        </div>
      </UCard>
    </div>
    <div class="p-2">
      <div>Let's call modal 3 to receive it</div>
      <UButton @click="callModal3">
        call modal 3
      </UButton>

      <UCard>
        <div v-for="result in results3" :key="result">
          Received data: {{ result }}
        </div>
      </UCard>
    </div>
  </div>
</template>
