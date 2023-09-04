<script setup>
//import RouterLink from 'vue-router'
import Adjuster from './ComponentAdjuster.vue'
import Padding from './ComponentPadding.vue'
import {ref} from 'vue';
var mopen = ref(false);
</script>

<template>
  <header>
  <Adjuster>
    <Padding>
   <div class="header-content">
    <div class="logo">
      <router-link to="./"><img src="@/assets/cadremit.svg" /></router-link>
    </div>
    <div class="mbtn" @click="mopen=true" ><i class="ri-menu-3-fill"></i></div>
    <div class="menu" :class="{sideopen:mopen}">
      <div class="closer"><i class="ri-close-line" @click="mopen=false"></i></div>
      <a @click="mopen=false" href="#download">Contact Us</a>
      <a @click="mopen=false" href="./#faq">FAQ</a>
      <a href="https://cadremit.medium.com" @click="mopen=false">Blog</a>
      <a @click="mopen=false" href="#download">
        <div class="download-btn">
          Download
        </div>
      </a>
    </div>
   </div>
  </Padding>
  </Adjuster>
  </header>
</template>

<style scoped>
header{
  width:100%;
  position: absolute;
  top:0;
  left: 0;
  z-index: 10;

}
header .header-content{
  display: flex;
  justify-content: space-between;
  width:100%;
  align-items: center;
}
header .header-content .logo img{
height: 30px;
}
.menu{
  display: flex;
  align-items: center;
  gap: 20px;
}
.menu a{
  color: #444;
  font-size: 1em;
font-weight: 500;
}
.download-btn{
  padding: 10px;
  border-radius: 10px;
border: 2px solid #5E5E5E;
background: rgba(255, 255, 255, 0.00);
color: #000;
font-weight: 600;
font-size: 1em;
margin-left: 20px;
}
.closer,.mbtn{
  display: none;
}
@media screen and (max-width:900px){
  .closer{
    display: block;
    width: 100%;
    font-size: 1.5em;
    text-align: right;
  }
  .mbtn{
    display: block;
    font-size: 1.4em;
  }
  .sideopen{
    display: block !important;
  }
  .menu{
    display: none;
    top:0;
    left:0;
    background-color: white;
    width:100%;
    height: 100%;
    position: fixed;;
    padding: 20px;
  }
  .menu a{
  width:100%;
  padding: 20px;
  display: block;
  }
  .download-btn{
   width:100%;
   margin-left: 0px;
  }
}
</style>
