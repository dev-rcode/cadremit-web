<script setup>
import Header from '../components/ComponentHeader.vue'
import TermsSection from '../sections/TermsSection.vue';
import Footer from '../components/ComponentFooter.vue';
</script>

<template>
   

    <Header />
<Transition appear>
    <TermsSection />
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