<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4">
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>SignUp form</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field
              label="Email"
              name="email"
              prepend-icon="mdi-account"
              type="email"
              v-model="email"
            ></v-text-field>
            <v-text-field
              label="Password"
              name="password"
              prepend-icon="mdi-lock"
              type="password"
              v-model="password"
            ></v-text-field>
            <v-text-field
              label="Confirm Password"
              name="password"
              prepend-icon="mdi-lock"
              type="password"
              v-model="passwordConfirm"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text to="/sign-in">LogIn</v-btn>
          <v-btn color="primary" :disabled="submitDisabled" @click="submit()">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import firebase from "firebase";
import { mapMutations } from "vuex";
export default {
  name: "SignUp",
  data() {
    return {
      email: "",
      password: "",
      passwordConfirm: null
    };
  },
  methods: {
    ...mapMutations(["setLoading", "setUser"]),
    async submit() {
      this.setLoading(true);
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(async data => {
          await this.setUser(data.user.email)
          this.setLoading(false);
          this.$router.push({name: 'Home'})
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  },
  computed: {
    submitDisabled() {
      return (
        this.password !== this.passwordConfirm
      );
    }
  }
};
</script>