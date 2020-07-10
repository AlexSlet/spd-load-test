<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item v-if="getUser" link to="/profile">
          <v-list-item-content>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/">
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/about">
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>SPD-Load-Test</v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="getUser">
        <span>{{getUser}}</span>
        <v-btn text @click="dialog = true">LogOut</v-btn>
      </template>
      <template v-else>
        <v-btn text to="/sign-in">SignIn</v-btn>
        <v-btn text to="/sign-up">SignUp</v-btn>
      </template>
    </v-app-bar>

    <v-main>
      <v-container class="fill-height" fluid>
        <Loader v-if="getLoading" />
        <router-view v-else></router-view>
      </v-container>
    </v-main>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; {{ date }}</span>
    </v-footer>
    <confirm-modal :dialog='dialog' @close='dialog = false' @accept='logOut()'></confirm-modal>
  </v-app>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import ConfirmModal from './components/ConfirmModal'
export default {
  components: {
    ConfirmModal
  },
  data: () => ({
    drawer: false,
    date: new Date().toLocaleString("en-GB"),
    dialog: false,
  }),
  methods: {
    ...mapMutations(['resetUser', 'setUser']),
    checkUser(){
      let userSession = sessionStorage.getItem('User');
      if(!this.getUser && userSession) {
        this.setUser(userSession);
      }
    },
    logOut(){
      this.resetUser();
      this.dialog = false;
      this.$router.push({name: 'Home'})
    }
  },
  computed: {
    ...mapGetters(["getLoading", "getUser"])
  },
  created() {
    this.checkUser();
    setInterval(() => {
      this.date = new Date().toLocaleString("en-GB");
    }, 1000);
  }
};
</script>