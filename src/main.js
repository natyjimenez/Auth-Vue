import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCduIVc6w8-jxWEEhjAaWt9cs5ohB8ZDiw",
  authDomain: "auth-vrouter.firebaseapp.com",
  databaseURL: "https://auth-vrouter.firebaseio.com",
  projectId: "auth-vrouter",
  storageBucket: "auth-vrouter.appspot.com",
  messagingSenderId: "1023828134464",
  appId: "1:1023828134464:web:9e01780143f6e87ef4ada5",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
