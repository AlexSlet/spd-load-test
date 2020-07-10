import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './routes/index'
import * as firebase from "firebase/app";
import store from './store/index';
import Loader from './components/Loader';

Vue.config.productionTip = false

Vue.component('Loader', Loader)

const firebaseConfig = {
  apiKey: "AIzaSyBP0Uk_A3impdhb5R_5Ohjl7FXVqE8UIzo",
  authDomain: "spd-load-test-11048.firebaseapp.com",
  databaseURL: "https://spd-load-test-11048.firebaseio.com",
  projectId: "spd-load-test-11048",
  storageBucket: "spd-load-test-11048.appspot.com",
  messagingSenderId: "431570861133",
  appId: "1:431570861133:web:280d1c1a8d3405a9997004"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
