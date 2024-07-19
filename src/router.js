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

import store from './store/store';
import { IS_USER_AUTHENTICATE_GETTER } from './store/storeconstants';
const routes =  [
    {
        path:'/login',
        name:'Login', 
        component:LoginPage,
        meta:{
            auth:false
        },
    },
    {
        path:'/signup',
        name:'SignUp', 
        component:SignUpPage,
        meta:{
            auth:false
        },
    },
    {
        path:'/login_new',
        name:'Login', 
        component:Login,
        meta:{
            auth:false
        },
    },
    {
        path:'/signup_new',
        name:'SignUp', 
        component:Signup,
        meta:{
            auth:false
        },
    },
    {
        path:'/quiz',
        name:'Quiz',
        component:QuizPage,
        meta:{
            auth:true
        },
    },
    {
        path:'/profile',
        name:'Profile', 
        component:ProfilePage
    },
    {
        path:'/matches',
        name:'Matches',
        component:MatchesPage,
        meta:{
            auth:true
        },
    },
     {
        path:'/matches',
        name:'Result',
        component:Matched,
        meta:{
            auth:true
        },
    },
    {
        path:'/history', 
        name:'History',
        component:HistoryPage,
        meta:{
            auth:true
        },
    },
    {
        path:'/',
        name:'Home',
        component:HomePage
    },

];

const router=createRouter(
    {
        history:createWebHistory(),
        routes,
    }
);

router.beforeEach((to, from, next) => {
    //console.log("LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL")
    //console.log(to) 
    //console.log(store.getters[`auth/${IS_USER_AUTHENTICATE_GETTER}`])

    if (
        'auth' in to.meta &&
        to.meta.auth &&
        !store.getters[`auth/${IS_USER_AUTHENTICATE_GETTER}`]
    ) {
        next('/login_new');
    } else if (
        'auth' in to.meta &&
        !to.meta.auth &&
        store.getters[`auth/${IS_USER_AUTHENTICATE_GETTER}`]
    ) {
        next('/');
    } else {
        next();
    }
});

export default router;
