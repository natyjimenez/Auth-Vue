<template>
  <div>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {};
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() =>
          this.$message({
            message: "Congrats, this is a success message.",
            type: "success",
          })
        );
    },
  },
  created() {
    console.log(firebase.auth().currentUser);
  },
};
</script>

<style></style>
