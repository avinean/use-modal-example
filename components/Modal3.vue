<script lang="ts" setup>
defineEmits<{
  submit: [payload: number]
}>()
</script>

<template>
<div>
  <div>Hi, I'm modal 3.</div>
  <div>Click the button below to generate necessary data</div>
  <UButton @click="$emit('submit', Math.random())">
    generate
  </UButton>
</div>
</template>