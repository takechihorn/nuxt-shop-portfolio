<template>
  <div>
    <amplify-authenticator v-if="authState !== 'signedin'" class="container" />
    <div v-if="authState === 'signedin' && user">
      <h1>Hello, {{ data.user.username }}</h1>
      <button @click="signOut">Sign Out</button>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  onBeforeUnmount,
} from '@vue/composition-api'
import { onAuthUIStateChange } from '@aws-amplify/ui-components'
import { Auth } from 'aws-amplify'

export default defineComponent({
  setup() {
    const data = reactive({
      user: undefined,
      authState: undefined,
    })

    onAuthUIStateChange((authState, authData) => {
      data.authState = authState
      data.user = authData
    })

    onBeforeUnmount(() => {
      return onAuthUIStateChange
    })

    const signOut = async () => await Auth.signOut()
    return { data, signOut }
  },
})
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
}

:root {
  --amplify-primary-color: #4287f5;
  --amplify-primary-tint: #005cf0;
  --amplify-primary-shade: #005cf0;
}
</style>
