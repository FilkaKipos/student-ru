<template>
  <main class="d-flex justify-content-center align-items-center vh-100">
    <form @submit.prevent="submitPost" class="w-50 p-4 rounded" style="background-color: rgba(255, 255, 255, 0.9);">
      <div class="mb-3">
        <label for="NameStudentInfo" class="form-label">Имя студента и группа</label>
        <input type="text" class="form-control" id="NameStudentInfo" v-model="studentName" placeholder="Введите имя студента">
      </div>
      <div class="mb-3">
        <label for="InfoStudentInfo" class="form-label">О себе</label>
        <textarea class="form-control" id="InfoStudentInfo" v-model="studentInfo" placeholder="Введите информацию о студенте" rows="3"></textarea>
      </div>
      <button type="submit" class="btn btn-primary btn-lg">Отправить</button>
      <button type="button" class="btn btn-secondary btn-lg" @click="clearFields">Очистить</button>
    </form>
  </main>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      studentName: '', // Поле для хранения имени студента
      studentInfo: '',
    };
  },
  methods: {
    async submitPost() {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('Для создания поста необходимо войти в систему.');
        this.$router.push('/login');
        return;
      }

      const postData = {
        username: this.studentName, // Передаем имя студента
        content: this.studentInfo,
      };
      
      try {
        await axios.post('http://localhost:3000/post', postData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        alert('Пост успешно отправлен');
        this.clearFields();
      } catch (error) {
        alert('Ошибка при отправке поста: ' + error.message);
      }
    },
    clearFields() {
      this.studentName = '';
      this.studentInfo = '';
    },
  },
};
</script>

<style scoped>

form {
  background-color:white ;
  color: rgba(131, 58, 180, 1);
  font-weight: 600;
  font-size: 1.2rem;
  padding: 2rem;
  border-radius: 10px;
}
</style>
