<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4">
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>SignIn form</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field
              label="Login"
              name="login"
              prepend-icon="mdi-account"
              type="text"
              v-model="email"
            ></v-text-field>

            <v-text-field
              id="password"
              label="Password"
              name="password"
              prepend-icon="mdi-lock"
              type="password"
              v-model="password"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <google-sign-in></google-sign-in>
          <v-spacer></v-spacer>
          <v-btn color="primary" :disabled="submitDisabled" @click="submit()">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import firebase from "firebase";
import { mapMutations } from "vuex";
import GoogleSignIn from "../components/GoogleSignIn";

export default {
  name: "SignIn",
  components: {
    GoogleSignIn
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    ...mapMutations(["setLoading", "setUser"]),
    submit() {
      this.setLoading(true);
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(data => {
          this.setUser(data.user.email);
          this.setLoading(false);
          this.$router.push({ name: "Home" });
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  },
  computed: {
    submitDisabled() {
      return this.password.length === 0 || this.email.length === 0;
    }
  }
};
</script>