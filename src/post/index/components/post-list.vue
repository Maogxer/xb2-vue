<template>
  <div v-if="loading">加载中...</div>
  <PostListItem v-for="post in posts"
                :item="post"
                :key="post.id" />
</template>

<script>
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from "vuex";
import PostListItem from './post.-list-item.vue';

export default defineComponent({
  async created () {
    this.getPots();
  },

  computed: {
    ...mapGetters({
      loading: 'post/index/loading',
      posts: 'post/index/posts'
    })
  },

  methods: {
    ...mapActions({
      getPots: 'post/index/getPosts'
    })
  },

  components: {
    PostListItem
  }
});
</script>
