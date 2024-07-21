<template>
    <div class="pageContainer">
        <p class="explaination">
            close the session when the other users finish thier quizes or when you just want to see the reslts
        </p>
        <button class="close" @click="closeSession()">
            Close Session
        </button>
    </div>
</template>

<script>
 export default{
    props: ['sessionCode'],
    methods:{
        closeSession(){
            this.$router.push({ name: 'Result', params: {sessionCode:this.sessionCode } });
        }
    }
 };
</script>

<style scoped>
   .pageContainer{      
        width: 100%;
        height: 80vh;
        background-image: linear-gradient(#3f1f72,#4f298b, black);
   }
   .explaination{
    color:white;
    text-align: center;
    padding: 40px;
    font-size:30px;
   }
   .close{
    text-align: center;
    margin: auto;
    display: grid;
     top: 40%;
     left:46%;
     width: 200px;
     height: 60px;
     text-decoration: none;
     font-size: 20px;
     padding-top:0.6em;
     cursor: pointer;
     text-transform: uppercase;
     letter-spacing: 1px;
     color: #2b0268;
     font-weight: 600;
     background-size: 400%;
     border-radius: 30px;
     background-image: linear-gradient(90deg,#b185f8, #7a52bb,#b185f8);
   }
   .close:before{
    content: '';
    position: absolute;
    background: inherit;
    top: -5px;
    right: -5px;
    left: -5px;
    width: 200px;
    height: 60px;
    bottom: -5px;
    background: #8e45f5;
    border-radius: 50px;
    filter: blur(20px);
    opacity: 0;
    transition: opacity 0.5s    
    }
    .close:before{
        opacity: 1;
        z-index: -1;
    }
    .close{
        z-index: 1;
        animation: glow 20s linear infinite;
    }
    @keyframes glow{
        0%{
            background-position: 0%;
        }
        50%{
            background-position: 400%;
        }
        100%{
            background-position:0%;
        }
        
    }
</style>