<template>
    <div class="storebuttons">
        <a><img src="@/assets/google.png"></a>
        <a><img src="@/assets/apple.png"></a>
    </div>
</template>
<style scoped>
.storebuttons{
    display: flex;
    gap:15px;
    margin: 15px 0;
}
.storebuttons a{
 width:150px;
}
.storebuttons a img{
 width:100%;
}
@media screen and (max-width:900px) {
    .storebuttons{
        max-width: 400px;
    }
    .storebuttons a{
        width:50%;
       }   
}
</style>