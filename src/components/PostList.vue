<template>
  <div class="container">
    <div id="list">
      <div class="accordion" id="postAccordion">
        <div v-for="post in posts" :key="post._id" class="accordion-item">
          <h2 class="accordion-header" :id="'heading' + post._id">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse' + post._id" aria-expanded="true" :aria-controls="'collapse' + post._id">
              {{ post.username }}
            </button>
          </h2>
          <div :id="'collapse' + post._id" class="accordion-collapse collapse show" :aria-labelledby="'heading' + post._id" data-bs-parent="#postAccordion">
            <div class="accordion-body">
              {{ post.content }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'PostList',
  data() {
    return {
      posts: [],
    };
  },
  async mounted() {
    try {
      const response = await axios.get('http://localhost:3000/posts');
      this.posts = response.data;
    } catch (error) {
      alert('Ошибка при получении постов: ' + error.message);
    }
  },
};
</script>
