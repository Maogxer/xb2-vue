<template>
  <h3> {{ appName }} </h3>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {};
  },

  computed: {
    ...mapState({
      appName: 'name'
    })
  }
}
</script>

<style scoped>
@import './styles/app.css';
</style>
