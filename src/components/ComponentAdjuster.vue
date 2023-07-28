<template>
    <div class="adjuster">
        <div class="adjuster-body"><slot></slot></div>
    </div>
</template>
<style scoped>
.adjuster{
    width:100%;
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 2;
}
.adjuster .adjuster-body{
    width:100%;
    max-width: 2000px;

}
</style>