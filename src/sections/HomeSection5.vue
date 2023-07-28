<script setup>
import Adjusters from '../components/ComponentAdjuster.vue';
import Padding from '../components/ComponentPadding.vue';
</script>
<template>
    <section class="section">
        <Adjusters>
            <Padding>
            <div class="heading">Enjoy the payment experience you deserve <br/>
                with secure payment gateways</div>
            <div class="seperator">
            <img src="@/assets/fincra.png" />
            <img src="@/assets/monnify.png" />
           </div>
            </Padding>
        </Adjusters>
    </section>
</template>
<style scoped>
.section{
    width:100%;
}
.seperator{
display: flex;
gap: 20px;
margin-top: 30px;
margin-bottom: 10px;
justify-content: center;
}
.seperator> img{
width:130px;
object-fit: contain;
filter: grayscale();
}
.seperator> img:last-child{
width:160px; 
}

.heading{
    font-size:1.5em;
    font-weight:bold;
    color:black;
    text-align: center;
    width:100%;
    margin-top: 50px;
  
}
@media screen and (max-width:900px) {
    .seperator> img{
        width:70px;
        object-fit: contain;
        filter: grayscale();
        }
        .seperator> img:last-child{
        width:100px; 
        }
        
        .heading{
            font-size:1.1em;
          
        }
        .heading br{
            display: none!important;
          
        }
}
</style>