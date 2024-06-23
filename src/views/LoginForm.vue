<template>
      <Navbar />
  <div class="login-container">
    
    <form @submit.prevent="login">
      <h2>Вход</h2>
      <div class="mb-3">
        <label for="username" class="form-label">Имя пользователя</label>
        <input type="text" class="form-control" id="username" v-model="username" required>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Пароль</label>
        <input type="password" class="form-control" id="password" v-model="password" required>
      </div>
      <button type="submit" class="btn btn-primary">Вход</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import Navbar from '../components/NavbarPage.vue';

export default {
  name: 'HomeView',
  components: {
    Navbar,
  },

  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:3000/login', {
          username: this.username,
          password: this.password,
        });
        localStorage.setItem('token', response.data.token);
        this.$router.push('/');
      } catch (error) {
        alert('Ошибка при входе: ' + error.message);
      }
    },
  },
};
</script>

<style>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

form {
  background-color: #fff;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
}

h2 {
  margin-bottom: 1.5rem;
}

.form-label {
  font-weight: bold;
}

.btn {
  width: 100%;
  margin-top: 1rem;
}
</style>
