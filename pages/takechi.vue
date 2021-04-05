<template>
  <div>
    <h3>{{ data.message }}</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const data = ref({
      message: 'Hello World',
      firstName: 'takeru',
      lastName: 'kondo',
    })
    return { data }
  },
})
</script>

<style scoped></style>
