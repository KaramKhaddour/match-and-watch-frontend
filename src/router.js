import { createRouter, createWebHistory } from "vue-router";
import LoginPage from './pages/LoginPage.vue';
import Login from './pages/Login.vue';
import SignUpPage from './pages/SignUpPage.vue';
import Signup from "./pages/Signup.vue";
import QuizPage from './pages/QuizPage.vue'
import HomePage from './pages/HomePage.vue'
import ProfilePage from './pages/ProfilePage.vue'
import MatchesPage from './pages/MatchesPage.vue'
import HistoryPage from './pages/HistoryPage'
import Matched from './pages/Matched.vue'
const routes =  [
    {path:'/login', component:LoginPage},
    {path:'/login_new', component:Login},
    {path:'/signup_new', component:Signup},
    {path:'/signup', component:SignUpPage},
    {path:'/quiz', component:QuizPage},
    {path:'/matched', component:Matched},
    {path:'/profile', component:ProfilePage},
    {path:'/matches', component:MatchesPage},
    {path:'/history', component:HistoryPage},
    {path:'/',component:HomePage},
];

const router=createRouter(
    {
        history:createWebHistory(),
        routes,
    }
);

export default router;