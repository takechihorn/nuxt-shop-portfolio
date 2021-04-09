import Amplify, * as AmplifyModules from 'aws-amplify'
import '@aws-amplify/ui-vue'
import awsconfig from '../aws-exports'

const languageDict = {
  ja: {
    'Sign in to your account': 'ログイン画面',
    Username: 'ユーザ名',
    'Enter your username': 'ユーザ名を入力してください',
    Password: 'パスワード',
    'Enter your password': 'パスワードを入力してください',
    Email: 'メールアドレス',
    'Forget your password? ': 'パスワードを忘れた場合',
    'Reset password': 'パスワードのリセット',
    'No account? ': 'まだアカウントがない場合',
    'Create account': 'アカウント作成',
    'Sign In': 'サインイン',
    'Create a new account': 'ユーザ新規作成',
    'Create Account': 'ユーザ新規作成',
    'Have an account?': 'ユーザ作成済み？',
  },
}
AmplifyModules.I18n.putVocabularies(languageDict)
Amplify.configure(awsconfig)
