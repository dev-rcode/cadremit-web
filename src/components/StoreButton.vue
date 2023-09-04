<template>
    <div class="storebuttons">
        <a href="https://play.google.com/store/apps/details?id=com.studentpay.finance.app.studentpay"><img src="@/assets/google.png"></a>
        <a href="https://apps.apple.com/ca/app/cadremit/id6453171589"><img src="@/assets/apple.png"></a>
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