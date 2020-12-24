<template>
  <div class="container">
    <div>
      <h3>Login Account</h3>
      <span>enter your email and password</span>
    </div>
    <div>{{ message }}</div>
    <form v-on:submit="loginUser">
      <div>
        <label for="email">Enter Your Email</label>
        <input
          v-model="email"
          type="email"
          name="email"
          id="email"
          class="form-control"
          placeholder="Email"
        />
      </div>
      <div>
        <label for="email">Enter Your Passwword</label>
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          name="password"
          id="password"
          class="form-control"
        />
      </div>
      <div>
        <input type="submit" value="Login" class="btn btn-success" />
      </div>
    </form>
  </div>
</template>

<script>
import { API } from '../../bakend';
export default {
  name: 'Login',
  data() {
    return {
      email: 'admin@admin.com',
      password: 'incipientinfo',
      message: '',
    };
  },
  methods: {
    loginUser(e) {
      this.message = 'LOADING.............';
      e.preventDefault();
      const data = {
        email: this.email,
        password: this.password,
      };
      return fetch(`${API}/auth/login`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => response.json())
        .then(data => {
          if (data.status === 0) {
            return (this.message = this.message);
          } else {
            this.message = data.message;
            localStorage.setItem('token', JSON.stringify(data.data));
            this.$router.push('/');
          }
        })
        .catch(error => console.log(error));
    },
  },
};
</script>

<style>
div {
  padding-top: 50vh;
  margin: auto;
  width: 50%;
  padding: 10px;
}
button {
  margin: auto;
}
</style>
