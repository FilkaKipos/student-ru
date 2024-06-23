<template>
  <header>
    <nav class="navbar bg-body-tertiary fixed-top">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Студент.ru</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Навигация</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <router-link class="nav-link active" style="color: rgba(131,58,180,1);" aria-current="page" to="/create-post">Создать пост</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/">Про студентов</router-link>
              </li> 
              <li class="nav-item" v-if="!isLoggedIn">
                <router-link class="nav-link" to="/login">Вход</router-link>
              </li>
              <li class="nav-item" v-if="!isLoggedIn">
                <router-link class="nav-link" to="/register">Регистрация</router-link>
              </li>
              <li class="nav-item" v-if="isLoggedIn">
                <button class="nav-link btn btn-link" @click="logout">Выход</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false,
    };
  },
  mounted() {
    this.isLoggedIn = !!localStorage.getItem('token');
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.isLoggedIn = false;
      this.$router.push('/login');
    },
  },
  watch: {
    '$route'() {
      this.isLoggedIn = !!localStorage.getItem('token');
    },
  },
};
</script>

<style scoped>
.btn {
  margin-left: 1rem;
}
</style>
