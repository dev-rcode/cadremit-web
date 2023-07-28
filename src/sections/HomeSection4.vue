<script setup>
import Adjusters from '../components/ComponentAdjuster.vue';
import Padding from '../components/ComponentPadding.vue';
import StoreButton from '../components/StoreButton.vue';
</script>
<template>
    <section class="section">
        <Adjusters>
            <Padding>
           <div class="whitebox">
            <div class="heading">Experience the easiest account opening process ever</div>
            <div class="seperator">
                <div>
                    <div>1</div>
                    <div>Register with ease</div>
                    <div class="grey-text">Sign up in our app using your email address</div>
                </div>
                <div>
                    <div>2</div>
                    <div>KYC verification</div>
                    <div class="grey-text">Verify your identity with your government-issued ID</div>
                </div>
                <div>
                    <div class="last">3</div>
                    <div>Instant conversion</div>
                    <div class="grey-text">Top up with Naira and start sending.</div>
                </div>
            </div>
            <StoreButton/>
           </div>
            </Padding>
        </Adjusters>
    </section>
</template>
<style scoped>
.section{
    width:100%;
}
.whitebox{
width:100%;
border-radius: 20px;
background: #FFF;
box-shadow: 0px 0px 35px 16px rgba(0, 0, 0, 0.01);
padding: 70px;
}
.seperator{
display: flex;
gap: 5px;
margin-top: 100px;
margin-bottom: 40px;
}
.seperator>div{
width:33.33%;
}
.seperator>div > div:first-child{
font-size: 2em;
font-weight: bold;
color: black;
}
.seperator>div > div:first-child:not(.last)::after{
content: ' ';
width:calc(100% - 1em);
margin-left: 5px;
height: 2px;
background-color: #D4D4D4;;
display: inline-flex;
z-index: 1;
position: relative;
}
.seperator>div > div:nth-child(2){
font-size: 1.1em;
font-weight: 700;
color: black;
padding-right: 45px;
margin-top: 6px;
}
.seperator>div > div:nth-child(3){
padding-right: 45px;
}
.heading{
    font-size:2em;
    font-weight:500;
    color:black;
  
}
@media screen and (max-width:900px) {
    .whitebox{
        width:100%;
        padding: 20px;
        }
    .seperator{
        display: block;
        gap: 5px;
        margin-top: 10px;
        margin-bottom: 40px;
        }
        .seperator>div{
        width:100%;
            margin-top: 25px;
        }
        .seperator>div > div:first-child:not(.last)::after{
            content: ' ';
            width:20px;
            margin-left: 5px;
            height: 2px;
            background-color: #D4D4D4;
            display: none;
            }
            .heading{
                font-size:1.4em;
                font-weight:500;
                color:black;
              
            }
}
</style>