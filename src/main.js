import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import axios from 'axios';
import './assets/style.css'
import "primeflex/primeflex.css";

const app= createApp(App);


axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:5000/';  // the FastAPI backend

app.use(router);
app.use(store);
app.mount('#app');