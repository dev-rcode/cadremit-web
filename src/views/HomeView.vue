<script setup>
import Header from '../components/ComponentHeader.vue'
import Section1 from '../sections/HomeSection1.vue';
import Section2 from '../sections/HomeSection2.vue';
import Section3 from '../sections/HomeSection3.vue';
import Section4 from '../sections/HomeSection4.vue';
import Section5 from '../sections/HomeSection5.vue';
import Section6 from '../sections/HomeSection6.vue';
import Footer from '../components/ComponentFooter.vue';
</script>

<template>
   

    <Header />
<Transition appear>
    <Section1/>
</Transition> 
<Transition appear>
    <Section2 />
</Transition>
<Transition appear>
    <Section3 />
</Transition>
<Transition appear>
    <Section4 />
</Transition>
<Transition appear>
    <Section5 />
</Transition>
<Transition appear>
    <Section6 />
</Transition>
    <Footer/>


</template>

<style>
.v-enter-active,
.v-leave-active {
  transition:500ms opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>