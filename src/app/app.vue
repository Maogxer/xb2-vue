<template>
  <h3> {{ name }} </h3>
  <UserLogin v-if="!isLoggedIn"
             @login-success="onLoginSuccess"
             @login-error="onLoginError" />

  <div v-if="currentUser">
    <div>{{ currentUser.name }}</div>
    <button @click="logout">退出</button>
  </div>

  <input type="text"
         v-if="isLoggedIn"
         v-model="title"
         @keyup.enter="createPost"
         placeholder="输入内容标题" />

  <input type="file"
         @change="onChangeFile"
         accept="image/png, image/jpeg, image/jpg" />

  <div>{{ errorMessage}}</div>
  <div v-for="post in posts"
       :key="post.id">
    <input type="text"
           :value="post.title"
           @keyup.enter="updatePost($event, post.id)" />
    <button @click="deletePost(post.id)">删除</button>
    {{post.title}} -
    <small>{{post.user.name}}</small>
  </div>
</template>

<script>
import { apiHttpClient } from "@/app/app.service";
import UserLogin from "@/user/components/user-login.vue";

export default {
  data () {
    return {
      name: 'NINGHAO',
      posts: [],
      errorMessage: '',
      token: '',
      title: '',
      currentUser: null,
      file: null
    };
  },

  computed: {
    isLoggedIn () {
      return this.token ? true : false
    }
  },

  async created () {
    this.getPosts();

    const tid = localStorage.getItem('tid');
    const uid = localStorage.getItem('uid');

    if (tid) {
      this.token = tid;
    }

    if (uid) {
      this.getCurrentUser(uid);
    }
  },

  methods: {
    onLoginSuccess (data) {
      this.token = data.token;
      this.getCurrentUser(data.id);

      localStorage.setItem('tid', data.token);
      localStorage.setItem('uid', data.id);
    },

    onLoginError (error) {
      this.errorMessage = error.data.message;

      console.log(error.data)
    },

    logout () {
      this.token = '';
      this.currentUser = null;

      localStorage.removeItem('tid');
      localStorage.removeItem('uid');
    },

    onChangeFile (event) {
      console.log(event.target.files);
      const file = event.target.files[0];

      if (file) {
        this.file = file;

        this.title = file.name.split('.')[0];
      }
    },

    async getCurrentUser (userId) {
      try {
        const response = await apiHttpClient.get(`/users/${userId}`);

        this.currentUser = response.data;
      } catch (error) {
        this.errorMessage = error.message;
      }
    },

    async getPosts () {
      try {
        const response = await apiHttpClient.get('/posts');

        //   console.log(axios.defaults);

        this.posts = response.data;
      } catch (error) {
        this.errorMessage = error.message;
      }
    },

    async createPost () {
      try {
        const response = await apiHttpClient.post('/posts', {
          title: this.title
        }, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          }
        });

        console.log(response.data);

        this.title = '';
        this.getPosts();
      } catch (error) {
        this.errorMessage = error.message;
      }
    },

    async updatePost (event, postId) {
      console.log(event.target.value);
      console.log(postId);

      try {
        await apiHttpClient.patch(`/posts/${postId}`, {
          title: event.target.value
        }, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          }
        });

        this.getPosts();
      } catch (error) {
        // this.errorMessage = error.message;
        this.errorMessage = error.response.data.message;
      }
    },

    async deletePost (postId) {
      try {
        // const response = await apiHttpClient.delete(`/posts/${postId}`, {
        await apiHttpClient.delete(`/posts/${postId}`, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          }
        });

        // console.log(response.data);
        this.getPosts();
      } catch (error) {
        // this.errorMessage = error.message;
        this.errorMessage = error.response.data.message;
      }
    }
  },

  components: {
    UserLogin
  }
}
</script>

<style scoped>
@import './styles/app.css';
</style>
