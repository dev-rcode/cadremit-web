<script setup>
defineProps({
    text:String
});
</script>
<template>
    <button style="width:100%" class="prim-button">{{text}}</button>
</template>
<style scoped>
button{
        background-color: var(--primary);
        padding: 15px;
        font-weight: 700;
        color: white;
        border:0;
        border-radius: 7px;
}
</style>