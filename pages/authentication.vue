<template>
  <v-container>
    <v-card>
      <amplify-authenticator v-if="authState !== 'signedin'">
        <amplify-sign-in
          slot="sign-in"
          header-text="My Custom Sign In Text"
          :form-fields.prop="data.formFields"
        ></amplify-sign-in>
        <amplify-sign-up
          slot="sign-up"
          header-text="My Custom Sign Up Text"
          :form-fields.prop="data.formFields"
        ></amplify-sign-up>
      </amplify-authenticator>
      <div v-if="authState === 'signedin' && user">
        <!-- <amplify-greetings :username="user.username"></amplify-greetings> -->
        <!-- <amplify-sign-out button-text="Custom Text"></amplify-sign-out> -->
        <div>Hello user, {{ data.user.username }} have a happy day!</div>
        <amplify-sign-out></amplify-sign-out>
      </div>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeUnmount } from '@vue/composition-api'

import { onAuthUIStateChange } from '@aws-amplify/ui-components'

export default defineComponent({
  stup() {
    const data = ref({
      user: undefined,
      authState: undefined,
      formFields: [
        {
          type: 'email',
          label: 'Custom email Label',
          placeholder: 'custom email placeholder',
          required: true,
        },
        {
          type: 'password',
          label: 'Custom Password Label',
          placeholder: 'custom password placeholder',
          required: true,
        },
      ],
    })

    onAuthUIStateChange((authState, authData) => {
      this.authState = authState
      this.user = authData
    })

    onBeforeUnmount(() => {
      return onAuthUIStateChange
    })
    return { data }
  },
})
</script>

<style>
amplify-authenticator {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: auto;
}
</style>
