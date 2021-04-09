<template>
  <amplify-authenticator :auth-config="data.authConfig" />
</template>
<script>
import { defineComponent, ref } from '@vue/composition-api'
export default defineComponent({
  setup() {
    const data = ref({
      authConfig: {
        signInConfig: {
          header: 'サインイン',
        },
        signUpConfig: {
          hideDefaults: true,
          signUpFields: [
            {
              label: 'ユーザーID',
              key: 'username',
              required: true,
              type: 'email',
              displayOrder: 0,
            },
            {
              label: 'パスワード',
              key: 'password',
              required: true,
              type: 'password',
              displayOrder: 1,
            },
          ],
        },
      },
    })
    return { data }
  },
})
</script>
