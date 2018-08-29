<template>
  <div class="container">

    <form class="form-signin">
      <h2 class="form-signin-heading">Please sign in</h2>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" class="form-control" v-model="email" placeholder="Email address" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" class="form-control" v-model="password" placeholder="Password" required>
      <div v-text="loginErrorDiv" style="color: red"></div>
      <div class="checkbox">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit" v-on:click.stop.prevent="login()">Sign in</button>
    </form>

  </div>
  <!-- /container -->
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        email: "",
        password: "",
        loginErrorDiv: "",

      }
    },
    methods: {
      login() {
        var url = "/api/user/login?email=" + this.email + "&password=" + this.password;
        this.$http.get(url).then(response => {
          var responseData = response.data;
          //登录成功
          if (responseData.statusCode == '1000200') {
            // this.$router.push({path:'/home'});
            window.location.href = '/home';
            localStorage.setItem("loginName",responseData.data.loginName);
          } else {
            this.loginErrorDiv = responseData.message;
          }
        }, response => {
          console.log("error");
        });
      }
    }

  }

</script>

<style>
  @import '../assets/css/bootstrap.css';
  @import '../assets/css/login.css';

</style>
