<template>
  <div>
    <Navbar />
    <PostList />
  </div>
</template>

<script>
import Navbar from '../components/NavbarPage.vue';
import PostList from '../components/PostList.vue';

export default {
  name: 'HomeView',
  components: {
    Navbar,
    PostList
  }
}
</script>

<style scoped>
@import '@/assets/postStyle.css';
</style>
