<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link :to="{ name: 'Login' }">Login</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  mounted() {
    firebase
      .auth()
      .signInWithEmailAndPassword("walterwhite@gmail.com", "123456")
      .then((user) => this.$store.dispatch("setUser", user.user))
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
