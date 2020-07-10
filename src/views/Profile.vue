<template>
  <v-row>
    <v-col cols="6">
      <v-text-field
        label="Email"
        name="email"
        prepend-icon="mdi-account"
        type="email"
        v-model="user.email"
      ></v-text-field>
    </v-col>
    <v-col cols="6">
      <v-btn @click="editEmail()">Edit Email</v-btn>
    </v-col>
    <v-col cols="4">
      <v-text-field
        id="password"
        label="Password"
        name="password"
        prepend-icon="mdi-lock"
        type="password"
        v-model="password"
      ></v-text-field>
    </v-col>
    <v-col cols="4">
      <v-text-field
        id="password"
        label="Confirm Password"
        name="password"
        prepend-icon="mdi-lock"
        type="password"
        v-model="passwordConfirm"
      ></v-text-field>
    </v-col>
    <v-col cols="4">
      <v-btn @click="editPassword()" :disabled="!submitDisabled">Reset Password</v-btn>
    </v-col>
  </v-row>
</template>

<script>
import firebase from "firebase";
import { mapMutations, mapGetters } from "vuex";

export default {
  data() {
    return {
      user: {
        email: ""
      },
      password: "",
      passwordConfirm: null
    };
  },
  methods: {
    ...mapMutations(["setUser", "setLoading"]),
    editEmail() {
      this.setLoading(true);
      firebase
        .auth()
        .currentUser.updateEmail(this.user.email)
        .then(() => {
          this.setUser(this.user.email);
          this.setLoading(false);
        })
        .catch(e => {
          console.error(e);
        });
    },
    editPassword() {
      this.setLoading(true);
      firebase
        .auth()
        .currentUser.updatePassword(this.password)
        .then(() => {
          this.setLoading(false);
        })
        .catch(e => {
          console.error(e);
        });
    }
  },
  computed: {
    ...mapGetters(["getUser"]),
    submitDisabled() {
      return this.password === this.passwordConfirm;
    }
  },
  async created() {
    if (!this.getUser) this.$router.push({ name: "Home" });
    this.user.email = this.getUser;
  }
};
</script>

<style>
</style>