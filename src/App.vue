<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AboutView from "./views/AboutView.vue"

</script>

<template>
  <div class="header ">
    <nav class="container">
      <RouterLink to="/" class="about">Mấy giờ rồi ?</RouterLink>
      <RouterLink to="/Todo" class="about">Lời tâm sự</RouterLink>
      <RouterLink to="/about" class="about">Bắt đầu thôi -></RouterLink>
    </nav>
  </div>

  <RouterView />
</template>

<style scoped>
  .header{
    background: #0f3854;
    background: radial-gradient(ellipse at center,  #0a2e38  0%, #000000 70%);
    height: 100px; 
   }

   .container{
    text-align: center;
    padding-top: 30px;
    font-size: 20px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin: 0;
    max-width: 100%;
   }

  .home{
    color: aliceblue;
    margin: 0 20px;
    text-decoration-line: none;
  }

  .about{
    margin: 0 20px;
    text-decoration-line: none;
    color: #1f80e1;
   
  }
  
.about:hover{
    color: white;
  }

  @media only screen and (max-width: 500px){
    .container{
      display: flex;
      padding-top: 22px;
    }
  }
</style>

