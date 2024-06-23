<template>
  <div>
    <Navbar />
    <div class="register-container">
      <form @submit.prevent="register">
        <h2>Регистрация</h2>
        <div class="mb-3">
          <label for="username" class="form-label">Имя пользователя</label>
          <input type="text" class="form-control" id="username" v-model="username" required>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Пароль</label>
          <input type="password" class="form-control" id="password" v-model="password" required>
        </div>
        <button type="submit" class="btn btn-primary">Регистрация</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Navbar from '../components/NavbarPage.vue';

export default {
  name: 'RegisterView',
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
    async register() {
      try {
        await axios.post('http://localhost:3000/register', {
          username: this.username,
          password: this.password,
        });
        this.$router.push('/login');
      } catch (error) {
        alert('Ошибка при регистрации: ' + error.message);
      }
    },
  },
};
</script>

<style>
.register-container {
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
