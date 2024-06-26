<template>
    <div class="homeContainer">
        <div class="leftSide">
          <h2>Couldn't find a movie you like?</h2>
          <h3>Is it hard for you to choose?</h3>
          <h4>Got you,</h4>
          <h4>We will match,</h4>
          <h4>And you will watch,</h4>
          <ul>
            <li><a href="/login">Login</a></li>
            <li><a href="/signup">Sign Up</a></li>
            <li><a href="/login">Match</a></li>
          </ul>
        </div>
        <div class="rightSide">
            <img src="../assets/images/matchwatch.png" alt="" class="matchWatchExpanded">
        </div>
    </div>
</template>

<script>
export default{};
</script>

<style scoped>
.homeContainer{
    height: 100rem;
    width: 100%;
    padding: 0;
    margin: 0;
    display: flex;
}
.leftSide{
    height: 100%;
    width: 50%;
    margin-top: 250px;
    margin-left: 150px;
    margin-right: 0px; 
    display: block;
}
h2{
    font-size:50px;
}
h3{
    font-size:45px;
}
h4{
   font-size:30px;  
}
.rightSide{
    background: black;
    height: 100%;
    width:50%;
}
.matchWatchExpanded{
   width:550px;
   margin-top: 320px;
   margin-left:260px;
}
li{
    padding: 10px;
    margin: 20px;
    border: solid;
    width:250px;
    background: black;
    color:white;
    font-size: 20px;
}
a{
    text-decoration: none;
    color:white;
}
</style>