<script setup>
import Adjusters from '../components/ComponentAdjuster.vue';
import Padding from '../components/ComponentPadding.vue';
</script>
<template>
    <section class="section">
        <Adjusters>
            <Padding>
             <div class="seperator">
                <div>

                    <div class="sub-div">
                        <i class="ri-copper-diamond-line"></i>
                        <div>
                            <div class="heading">Transparent and affordable</div>
                            <div class="grey-text">
                                Get the best value for your Naira with competitive exchange rates, zero transfer fees, and reliable service.
                            </div>
        
                        </div>
                    </div>

                

                        <div class="sub-div">
                            <i class="ri-user-4-line"></i>
                            <div>
                                <div class="heading"> User-focused acccessibility</div>
                                <div class="grey-text">Conveniently manage transactions anytime, anywhere with our intuitive mobile app,  backed 
                                    by exceptional customer support.
                                </div>
            
                            </div>
                        </div>

                  
           
                </div>
                    <div class="image2">
                        <div class="bg-ts">
                            <div></div>
                        </div>
                        <img src="@/assets/image2.png"/>
                    </div>
                   
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
gap: 50px;
align-items: center;
}
.seperator>div{
width:50%;
}
.heading{
    font-size:2em;
    font-weight:500;
    color:black;
  
}
.sub-div{
    display: flex;
    gap:6px;;
    align-items: baseline;
}
.section .sub-div:last-child{
    margin-top: 30px;
}
.sub-div i{
   font-size: 2em;
}
.bg-ts{
    position: absolute;
    width:100%;
    height: 100%;
    left: 0;
    top:0;
}
.image2{
    position: relative;
}
.image2 img{
    width:90%;
    position: relative;
    z-index: 2;
    margin-left: 10%;
}
.bg-ts div{
    width:100%;
    height: 100%;
    border-radius: 50%;
    background: rgba(217, 223, 244, 0.50);
    filter: blur(52.5px);
}
@media screen and (max-width:900px) {
    .seperator{
        display: block;
        }
        .seperator>div{
        width:100%;
        }  
        .heading{
            font-size:1.6em;
          
        }
        .sub-div i{
           font-size: 1.6em;
        }
        .image2 img{
            width:100%;
            margin-top: 40px;
            margin-left: 0%;
        }
}
</style>