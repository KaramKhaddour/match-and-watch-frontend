<template>
  <header class="header">
    <a href="/" class="logo">
       <img src="../assets/images/logoPlaceholder_purple.png" alt="logo">
    </a>
    <nav class="navbar">
       <div class="navPart">
          <a  href="/quiz" class="match">
              +Match
          </a>
       </div>
       <div class="navPart">
          <i class="gg-check-o"></i>
          <a href="/history" class="history">
            History
        </a>
       </div>
       <div class="navPart">
           <i class="gg-play-button-o"></i>
           <a>Movies</a>
      </div>
      <div class="navPart">
          <i class="gg-play-button-o"></i>
          <a class="series">
            Series
        </a>
      </div>
    </nav>

    <div class="logedIn">

    </div>

    <div class="logedOut">
       <a href="/login"><button class="authButton">Login</button></a>
       <a href="/signUp"><button class="authButton">Sign Up</button></a>
    </div>
  </header>
</template>

<script>
   export default{};
</script>

<style scoped>
  .header{
    position: sticky;
    top: 0;
    left:0;
    width: 100%;
    padding: 20px 100px;
    background:rgb(0, 0, 0);
    color:white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index:100;
    height: 100px;
  }
  .navbar{
    display: flex;
    justify-content: space-between;
    gap: 40px;
    border: solid rgb(51, 44, 3);
    padding: 10px 100px;
    border-radius: 50px;
    border-width: thin;
    font-weight:100;
    margin-left: 150px;
  }
  img{
    width:170px;
    height:90px;
    margin-left: 120px;
  }
  .logedOut{
    display: flex;
    gap: 30px;
    margin-right: 130px;
  }
  .authButton{
    padding:3px 30px;
    border: none;
    border-radius: 20px;
    color:white;
    background-image: radial-gradient(
      rgb(37, 7, 56) 70%,  
      rgb(95, 16, 148)
   );
  }
  a{
    text-decoration: none;
    color: white;
  }
  .navPart{
    display: flex;
    margin: 0;
  }
  .gg-play-button-o {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs,1));
    width: 20px;
    height: 20px;
    border: 1px solid;
    border-radius: 20px;
    margin-right: 5px;
    margin-top: 1px;
}
.gg-play-button-o::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 0;
    height: 10px;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 6px solid;
    top: 4px;
    left: 7px
}.gg-check-o {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs,1));
    width: 20px;
    height: 20px;
    border: 1px solid;
    margin-right: 5px;
    margin-top: 1px;
    border-radius: 100px
}
.gg-check-o::after {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    left: 3px;
    top: -1px;
    width: 6px;
    height: 10px;
    border-color: currentColor;
    border-width: 0 2px 2px 0;
    border-style: solid;
    transform-origin: bottom left;
    transform: rotate(45deg)
}

</style>