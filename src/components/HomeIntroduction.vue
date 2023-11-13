<script setup lang="ts">
import CustomButton from "./CustomButton.vue";
import TextContent from "./TextContent.vue"
</script>

<template>
    <div class="border-b-2 pb-[82px] border-mustard w-full flex justify-between mb-[76px]" >
        <div class="font-K2D z-10">            
            <p class=" font-bold text-[113.68px] mr-[-520px]">Your <span class="text-mustard">Pet</span>, Our  <span class="text-white">Passion</span></p>
            <TextContent class="text-2.5xl font-light my-12"/>
            <TextContent class="text-2.5xl font-light my-12"/>
            <CustomButton class="w-[278px] md:w-[280px] h-[43px] md:h-[78px]" />
        </div>
        <div class=" justify-end">
            <img src="../assets/images/Mask-group.png" class="w-full" />
        </div>
    </div>
</template>
