<script setup>
import Adjuster from './ComponentAdjuster.vue';
import Padding from './ComponentPadding.vue';
import StoreButton from './StoreButton.vue';
import { RouterLink } from 'vue-router';
</script>
<template>
    <footer :id="'download'">
        <div class="bg-ts">
 <img src="@/assets/bgarrow.svg" class="bg-img" />
        </div>
<Adjuster>
<Padding>
<div class="heading">Take control of your transfers</div>
<div style="display: flex;justify-content:center;"><StoreButton/></div>
<div class="about">
<div>
    <img class="logo" src="@/assets/cadremit.svg"/>
    <div class="grey-text">contact@cadremit.com</div>
    <div class="socials">
        <a href=""><i class="ri-medium-fill"></i></a>
        <a target="_blank" href="https://instagram.com/cadremit"><i class="ri-instagram-line"></i></a>
        <a target="_blank" href="https://instagram.com/cadremit"><i class="ri-twitter-fill"></i></a>
    </div>
</div>
<div>
    <div class="grey-text">Cadremit is authorized, and regulated by the Financial Transactions
         and Report Analysis Centre of Canada (FINTRAC) to provide foreign 
         exchange and money transfer services as a Money Service Business. Registration number: M23483684.
    </div>
    <div class="fmenu">
    <div><router-link to="/terms">Terms and Conditions</router-link></div>
    <div><router-link to="/privacy">Privacy Policy</router-link></div>
    </div>
</div>
</div>
<div class="copyright"> Copyright &copy; 2023 Cadremit. All rights reserved.</div>
</Padding>
</Adjuster>
    </footer>
</template>
<style scoped>
.grey-text{
    font-size: 0.9em;
}
footer{
    background: #E2EFF7;
    position: relative;
    width:100%;
}
.bg-ts{
    width:100%;
    height: 100%;
    position: absolute;
    top:0;
    left:0;
    overflow: hidden;
}
.bg-img{
width:30%;
position: relative;
transform: rotate(180deg);
}
.heading{
    font-size:2em;
    font-weight:bold;
    color:black;
    width:100%;
    text-align: center;
    margin-top: 50px;
  
}
.about{
    width:100%;
    display: flex;
    justify-content: space-between;
}
.about > div:last-child{
    max-width: 350px;
}
.logo{
    height: 30px;
}
.socials{
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 15px;
}
.socials a{
    width:50px;
    height: 50px;
    border-radius: 50%;
    background-color: white;
    color:black;
    display: flex;
    align-items: center;
    justify-content: center;
}
.socials a:nth-child(2){
    background-color: var(--primary);
    color:white;
}
.fmenu{
    display: flex;
    gap: 10px;
    justify-content: space-between;
    font-size: 1em;
    font-weight: 500;
    color: #444;
    margin-top: 20px;
}
.copyright{
    margin-top: 50px;
    color: #444;
font-weight: 500;
font-size: 0.8em;
text-align: center;
width:100%;
}
@media screen and (max-width:900px) {
    .about{
        display: block;
        margin-top: 20px;
    }
    .about > div:last-child{
        max-width: 100%;
        margin-top: 30px;
        font-size: 0.8em;
    }
    .logo{
        height: 25px;
    }
    .socials a{
        width:35px;
        height: 35px;
    }
    .fmenu{
        display: block;
        font-size: 0.85em;
    }
    .fmenu > div{
        margin-top: 8px;
    }
    .copyright{
    font-size: 0.7em;
    }
    .bg-img{
        width:100%;
        position: absolute;
        bottom:0;
        opacity: 0.5;
        }
}
</style>