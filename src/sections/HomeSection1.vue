<script setup>
import Adjusters from '../components/ComponentAdjuster.vue';
import Padding from '../components/ComponentPadding.vue';
import Calculator from '../components/ComponentCalculator.vue';
import StoreButton from '../components/StoreButton.vue';
</script>
<template>
<section class="section">
  <div class="sp-bg">
    <div class="spreadball">
        <div class="spreadball2">
         </div>
     </div>
     <div class="spreadball3"></div>
     <img class="bg-img" src="@/assets/bgarrow.svg"/>
  </div>
    <Adjusters>
        <Padding>
           <div class="seperator">
            <div>
                <div class="boldtext nobreak">Embrace a smarter way to <br/>send money with Cadremit</div>
                <div class="grey-text nobreak">Simplify payments to Canadian schools and convert  Naira to CAD<br/> for everyday transactions.</div>
                <StoreButton/>

                <div class="trustpilot" style="display: none;">
                <img src="@/assets/simple-icons_trustpilot.svg" />
                <div class="text">Trustpilot</div>
                <div class="longline"></div>
                <div class="rating">3.5</div>
                <div class="rating-star"><i class="ri-star-fill"></i></div>
                </div>
            </div>
            <div><Calculator/></div>
           </div>
        </Padding>
    </Adjusters>
</section>
</template>
<style scoped>
.section{
min-height: 90vh;
position: relative;
}
.spreadball{
    width:60%;
    height: 60%;
    border-radius: 50%;
    background: #E1C5F6;
    filter: blur(94px);
position: absolute;
top: -10%;
left: -10%;
}
.spreadball2{
    width:70%;
    height: 40%;
    border-radius: 50%;
background: rgba(190, 193, 234, 0.85);
filter: blur(97px);
position: absolute;
right: -34%;
    top: 5%;
}
.spreadball3{
    width:50%;
    height: 70%;
    border-radius: 50%;
background: rgba(190, 193, 234, 0.85);
filter: blur(97px);
position: absolute;
right: -10%;
top: -10%;
}
.sp-bg{
    width:100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
}
.bg-img{
   width:35%;
   position: absolute;
   top:0;
   right: 0;
   z-index: 1;
}
.seperator{
    margin-top: 100px;
    width:100%;
    display: flex;
    gap: 50px;
}
.seperator > div{
    width:50%;
}
.boldtext{
    width: 100%; 
    color: black; 
    font-size: 3em; 
    font-weight: 800;
    line-height: 69px;
    font-weight: bolder;
    line-height: 1.2em;
    margin-top: 20px;
}
.trustpilot{
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 110px;
}
.trustpilot img{
    width:30px;
}
.trustpilot .longline{
    width:100px;
    height: 2px;
    background-color: grey;
}
.trustpilot .rating{
    font-weight: bold;
    color:grey;
}
.trustpilot .text{
    font-weight: 500;
    color:grey;
    margin-right:6px ;
}
.trustpilot .rating-star{
    font-size: 1em;
    color: Orange;
}
@media screen and (max-width:900px) {
    .nobreak br{
    display: none;
    }
    .bg-img{
        width:100%;
        position: absolute;
        top:0;
        right: 0;
        z-index: 1;
        opacity: 0.3;
     }
    .section{
        min-height: 90vh;
        position: relative;
        }
        .seperator{
            margin-top: 100px;
            display: block;
        }
    .seperator > div{
        width:100%;
    }
    .boldtext{
        font-size: 2em; 
        line-height: 1.1em;
    } 
    .trustpilot{
        display: flex;
        align-items: center;
        gap: 5px;
        margin-top: 40px;
        margin-bottom: 60px;
    }
    .trustpilot img{
        width:30px;
    }
    .trustpilot .longline{
        width:100%;
        height: 1.5px;
    }
   
 
    .trustpilot .rating-star{
        font-size: 0.9em;
    }
}
</style>