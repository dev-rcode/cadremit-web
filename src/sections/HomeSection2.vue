<script setup>
import Adjusters from '../components/ComponentAdjuster.vue';
import Padding from '../components/ComponentPadding.vue';
</script>
<template>
    <section class="section">
        <Adjusters>
            <Padding>
             <div class="seperator">
                    <div class="image1">
                        <div class="bg-ts">
                            <div></div>
                        </div>
                        <img src="@/assets/image1.png" />
                    </div>
                    <div>
                        <div class="heading">
                            Fast and secure transfers
                        </div>
                        <div class="grey-text">Settle tuition fees, deposits and more for educational institutions.<br/>
                            Convert Naira to CAD as a newly arrived migrant.<br/>
                            Send money to family and friends in Canada free of charge.</div>
               
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
    font-weight:bold;
    color:black
}
.image1{
    position: relative;
}
.image1 img{
    width:100%;
    z-index: 2;
    position: relative;
}
.bg-ts{
    position: absolute;
    width:100%;
    height: 100%;
    left: 0;
    top:0;
}
.bg-ts div{
    width:100%;
    height: 100%;
    border-radius: 50%;
    background: #E4EBF1;
    filter: blur(59.5px);
}
@media screen and (max-width:900px) {
    .seperator{
        display: block;
        }
        .seperator>div{
        width:100%;
        }
        .heading{
            font-size:2em;
        }
}
</style>