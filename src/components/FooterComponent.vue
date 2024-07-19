<template>
    <footer>
      <div class="logo">
        <img src="../assets/images/matchwatch.png" alt="logo"> 
      </div>
      <ul>
        <li class="first">Product</li>
        <li>Features</li>
        <li>Integration</li>
        <li>Updates</li>
        <li>FAQ</li>
        <li>Pricing</li>
      </ul>
      <ul>
        <li class="first">Company</li>
        <li>About</li>
        <li>Blog</li>
        <li>Careers</li>
        <li>Press</li>
        <li>Contact</li>
      </ul>
      <ul>
        <li class="first">Resources</li>
        <li>iFeatures</li>
        <li>Integration</li>
        <li>Updates</li>
      </ul>
      <ul>
        <li class="first">Legal</li>
        <li>Privacy</li>
        <li>Terms</li>
        <li>Security</li>
      </ul>
    </footer>
</template>
<script>
export default{};
</script>
<style scoped>
footer{
  left: 0;
  bottom: 0;
  width: 100%;
  height: 26em;
  background-color: rgb(0, 0, 0);
  color: white;
  display: flex;
  padding:3em;
}
.logo{
  display: inline-block;
  width:50%;
  height:100%;
}
img{
  width:30%;
  height: 30%;
}
li{
  list-style-type: none;
  font-weight: 100;
  margin-top: 2em;
}
.first{
  font-weight: 400;
  margin-top:-2em;
}
ul{
  padding: 3em 4em;
}
</style>