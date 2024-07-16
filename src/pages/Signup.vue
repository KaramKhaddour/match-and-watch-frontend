<template>
    <div class="container">
        <div class="login-form" :style="{opacity: showForm ? '1' : '0', transform: showForm ? 'translateY(0)' : 'translateY(100px)' }">
            <Login/>
        </div>
    </div>
</template>

<script>
    import Login from '../components/LoginComponents/Login.vue';
    export default{
        components:{
            Login,
        },
        data(){
            return{
                showForm: false,
            }
        },
        created(){
            setTimeout(() => {
                this.showForm = true;
            }, 300)
        },
        mounted(){
            document.title = "Demo Panel AI4SE | Login";
        },
    }
</script>

<style scoped>
.container{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('../assets/images/main-page/pattern-bg.svg');
}

.login-form{
    transition: all 0.3s ease-in-out;
}
</style>