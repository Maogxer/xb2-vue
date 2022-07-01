<template>
  <h3> {{ name }} </h3>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  data () {
    return {};
  },

  computed: {
    ...mapGetters(['name'])
  }
}
</script>

<style scoped>
@import './styles/app.css';
</style>
