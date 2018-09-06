<template>
  <div class="container">

    <form class="form-signin">
      <h2 class="form-signin-heading">Please sign in</h2>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="username" class="form-control" v-model="username" placeholder="username" required autofocus>
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
        username: "dzq@qq.com",
        password: "123456",
        loginErrorDiv: "",

      }
    },
    methods: {
      login() {
        var url = "/api/login";
        var params={  
           "username":this.username,
           "password":this.password
        }
        var qs = require('qs');
        this.$http.post(url,qs.stringify(params), {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then(response => {
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
