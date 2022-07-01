<template>
  <h3 @click="onClickName"> {{ name }} </h3>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'

export default {
  data () {
    return {};
  },

  computed: {
    ...mapGetters(['name'])
  },

  created () {
    // this.$store.dispatch('getName');
    this.getName();

  },

  methods: {
    ...mapMutations(['setName']),

    ...mapActions({
      getName: 'getName'
    }),

    onClickName () {
      if (this.$store.state.name === '宁皓网') {
        // this.$store.commit('setName', 'NINGHAO')
        this.setName('NINHAO')
      } else {
        // this.$store.commit('setName', '宁皓网')
        this.setName('宁皓网')
      }
    }
  }
}
</script>

<style scoped>
@import './styles/app.css';
</style>
