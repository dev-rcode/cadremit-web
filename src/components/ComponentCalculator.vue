<script setup>
import Button from './ComponentButton.vue';
import { ref } from 'vue'
import { getSettings } from '../api/apis.js';
</script>

<template>
    <div class="converter">
        <div class="cur-input">
            <div>
                <div class="top-ti">You send</div>
                <input placeholder="0.00"  v-model="ngn"  @keyup="calculateNG()">
            </div>
            <div class="curr">
                <div style="display: flex;align-items:center;"><img src="@/assets/twemoji_flag-nigeria.png"></div>
                <div>NGN</div>
            </div>
        </div>

        <div class="conv-liner">
            <div class="line"></div>
            <div class="feat">
                <div class="circle"><i class="ri-line-chart-fill"></i></div>
                <div v-if="setting != null">1 CAD = {{setting.rate}} NGN</div>
                <div v-else class="shimmer"></div>
            </div>
            <div class="line"></div>
        </div>
        <div class="cur-input">
            <div>
                <div class="top-ti">Receiver gets</div>
                <input placeholder="0.00"   v-model="cad" @keyup="calculateCA()">
            </div>
            <div class="curr">
                <div style="display: flex;align-items:center;"><img src="@/assets/twemoji_flag-canada.png"></div>
                <div>CAD</div>
            </div>
        </div>
        <br>
        <br>
        <a :href="'#download'"> <Button text="Get started"/> </a>
      
        <div class="notice">
            <i class="ri-award-line"></i>
            <div>Zero transfer fees.</div>
        </div>

    </div>
</template>
<style scoped>
.converter{
    margin: auto;
    max-width:420px;
    width: 100%;
    padding:40px;
    background-color: white;
    border-radius: 9px;
    box-shadow:0 0 13px 1px rgba(0,0,0,0.06);

}
.cur-input{
    width:100%;
    padding: 18px;
    background-color: #F4F4F4;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
}
.cur-input .top-ti{
    font-size: 0.8em;
    font-weight: 500;
    color: var(--primary);
}
.cur-input input{
    width:100%;
    background: transparent;
    border:0;
    font-weight: bolder;
    font-size: 1.7em;
    outline: none;
}
.cur-input input::placeholder{
    color: black;
}
.cur-input .curr{
    width: fit-content;
    background-color: white;
    box-shadow: 0 0 8px 3px rgba(0,0,0,0.04);
    padding: 6px;
    font-size: 1.06em;
    font-weight: bold;
    display: flex;
    gap: 10px;
    align-items: center;
    border-radius: 5px;
    
}
.cur-input .curr img{
width:30px;
height: 30px;
object-fit: cover;
border-radius: 50%;
}
.conv-liner .line{
    left: 12px;
    position: relative;
width:3px;
height: 15px;
background:#F4F4F4;
}
.conv-liner .feat{
display: flex;
align-items: center;
    gap: 10px;
  
}
.conv-liner .feat div:first-child{
width:30px;
height: 30px;
background-color:#F4F4F4;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
color:grey;
}
.conv-liner .feat div:last-child{
    font-weight: bold;
    font-size: 0.7em;
    color: black;
}
@media screen and (max-width:900px){
    .converter{
        padding:10px;
        border-radius: 9px;
        margin-bottom: 20px;
        margin-top: 20px;
    
    }
    .cur-input{
        padding: 10px;
    }  
    .cur-input .curr{
        padding: 4px;
        font-size: 0.9em;
        gap: 7px;
        
    }
    .cur-input .curr img{
    width:20px;
    height: 20px;
    } 
    .cur-input input {
        font-size: 1.4em;
    }
    .cur-input .top-ti {
        font-size: 0.6em;
    }
}

.converter .notice{
    display: flex;
    gap: 5px;
    margin-top:20px;
    align-items: center;
}
.converter .notice i{
    color:grey;
    font-size: 1em;;
}
.converter .notice div:last-child{
    color:rgb(164, 164, 164);
    font-size: 0.7em;
    font-weight: 400;
}
.shimmer{
    width:100px;
    height: 7px;
    background: #f6f7f8;
    background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
    background-repeat: no-repeat;
    background-size: 800px 104px; 
    display: inline-block;
    position: relative; 
    
    -webkit-animation-duration: 1s;
    -webkit-animation-fill-mode: forwards; 
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-name: placeholderShimmer;
    -webkit-animation-timing-function: linear;
}
@-webkit-keyframes placeholderShimmer {
    0% {
      background-position: -468px 0;
    }
    
    100% {
      background-position: 468px 0; 
    }
  }
</style>

<script>
let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
var setting= ref(null);

getSettings().then(function(data){
    console.log(data);
    setting.value = data.data.data;
});
var ngn = ref('');
var cad = ref('');
function calculateNG(){
    if(setting.value==null) return;
   // console.log(setting.value.rate);
   var nngn= ngn.value.replace(",","");
if(nngn==""){
    ngn.value='';
    cad.value='';
    return;
}
var ans = Number(nngn)/Number(setting.value.rate);
cad.value = USDollar.format(ans).substring(1);
}
function calculateCA(){
    if(setting.value==null) return;
   // console.log(setting.value.rate);
var ncad= cad.value.replace(",","");;
if(ncad==""){
    ngn.value='';
    cad.value='';
    return;
}
var ans = Number(ncad)*Number(setting.value.rate);
ngn.value = USDollar.format(ans).substring(1);
}
</script>