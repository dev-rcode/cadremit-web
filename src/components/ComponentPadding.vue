<template>
    <div class="padding">
        <slot></slot>
    </div>
</template>
<style scoped>
.padding{
    padding: 20px 80px;
    width:100%;
}
@media screen and (max-width:900px) {
    .padding{
        padding: 20px 20px;
    }   
}
</style>