<template>
  <div>用户登录 {{ username }}</div>
  <AppInput v-model="username" />
  <AppInput />
</template>

<script>
import AppInput from "./app-input.vue";

export default {
  data () {
    return {
      username: ''
    }
  },

  beforeCreate () {
    console.log("user login beforeCreate");
  },

  created () {
    console.log('user login created')
  },

  beforeMount () {
    console.log("user login beforeMount");
  },

  mounted () {
    console.log('user login mounted')
  },

  beforeUpdate () {
    console.log("user login beforeUpdate");
  },

  updated () {
    console.log('user login updated')
  },

  beforeUnmount () {
    console.log("user login beforeUnmount");
  },

  unmounted () {
    console.log('user login unmounted')
  },

  components: { AppInput }

}
</script>