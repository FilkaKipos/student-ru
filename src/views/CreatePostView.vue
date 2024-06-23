<template>
    <div>
      <Navbar />
      <PostForm />
    </div>
  </template>
  
  <script>
  import Navbar from '../components/NavbarPage.vue';
  import PostForm from '../components/PostForm.vue';
  
  export default {
    name: 'CreatePostView',
    components: {
      Navbar,
      PostForm
    }
  }
  
  </script>
  <style scoped>
  @import '@/assets/style.css';
  </style>