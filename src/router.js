import { createRouter, createWebHistory } from "vue-router";
import LoginPage from './pages/LoginPage.vue';
import SignUpPage from './pages/SignUpPage.vue';
import QuizPage from './pages/QuizPage.vue'
import HomePage from './pages/HomePage.vue'
import ProfilePage from './pages/ProfilePage.vue'
const routes =  [
    {path:'/login', component:LoginPage},
    {path:'/signup', component:SignUpPage},
    {path:'/quiz', component:QuizPage},
    {path:'/profile', component:ProfilePage},
    {path:'/',component:HomePage,},
];

const router=createRouter(
    {
        history:createWebHistory(),
        routes,
    }
);

export default router;