<template>
  <div>
    <img
      class="google_logo ml-2"
      @click="signIn()"
      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
      alt="google"
      title="Login by Google"
    />
  </div>
</template>

<script>
import firebase from "firebase";
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["setLoading", "setUser"]),
    async signIn() {
      const provider = new firebase.auth.GoogleAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          const email = result.user.email;
          this.setUser(email);
          this.$router.push({ name: "Home" });
        })
        .catch(function(error) {
          console.log(error.code);
        });
    }
  }
};
</script>

<style>
.google_logo {
  height: 20px;
  widows: 20px;
  cursor: pointer;
}
</style>