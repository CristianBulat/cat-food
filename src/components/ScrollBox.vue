<script setup lang="ts">
    import CustomButton from "./CustomButton.vue"
</script>

<template>
    <div class="scroll-box-div">
        <div class="content-box-div">
            <img src="../assets/images/Mask-group-2.png" />
            <CustomButton class="border-2" />
        </div>
        <div class="content-box-div">
            <img src="../assets/images/Mask-group-2.png" />
            <CustomButton class="border-2"/>
        </div>
        <div class="content-box-div">
            <img src="../assets/images/Mask-group-2.png" />
            <CustomButton class="border-2"/>
        </div>
        <div class="content-box-div">
            <img src="../assets/images/Mask-group-2.png" />
            <CustomButton class="border-2"/>
        </div>
    </div>
</template>

<style scoped>
.scroll-box-div {
    display: flex;
    align-items: center;
    justify-content: center;
}

.content-box-div {
    margin: 15px;
}

img {
    width: 230px;
    height: 235px;
    margin-bottom: 60px;
}
Button {
    margin-left: auto;
    margin-right: auto;
    width: 230px;
    height: 43px;
}
</style>
