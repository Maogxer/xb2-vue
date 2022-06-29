<template>
  <h3> {{ name }} </h3>
  <user-profile />
</template>

<script>
import UserProfile from './components/user-profile.vue';

export default {
  data () {
    return {
      name: 'NINGHAO',
    };
  },

  methods: {
    onTapAppButton (text) {
      console.log("On Tap App Button: " + text);
    },

    onInitAppButton () {
      console.log("On Init App Button");
    }
  },

  components: { UserProfile }
}
</script>

<style scoped>
@import './styles/app.css';
</style>
