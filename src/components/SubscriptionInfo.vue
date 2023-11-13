<script setup lang="ts">
    import TextContent from './TextContent.vue';
</script>

<template>
    <div class="mb-[150px]">
        <div class="flex justify-center gap-24 mb-[76px]">
            <p class="flex items-center font-K2D text-mustard font-bold text-[140px]">1</p>
            <div class="flex flex-col gap-y-14 justify-center">
                <TextContent class="font-light font-K2D text-2.5xl"/>
                <TextContent class="font-light font-K2D text-2.5xl"/>
                <TextContent class="font-light font-K2D text-2.5xl"/>
            </div>
            <div class="flex items-center">
                <div class="flex-shrink-0 border-div border-2 border-solid rounded-[10px] border-mustard p-[30px] w-[325px] h-[309px]">
                    <p class="font-K2D text-mustard font-bold text-[40px] text-right pb-[19px]">$ 00</p>
                    <p class="font-K2D font-bold text-2xl text-mustard  pb-2">1 MONTH</p>
                    <p class="font-light font-K2D text-[24px] opacity-50">Lorem Ipsum is simply dummy text</p>
                </div>
            </div>
        </div>
        <div class="flex justify-center gap-24 mb-[76px] ">
            <div class="flex items-center">
                <div class="flex-shrink-0 border-div border-2 border-solid rounded-[10px] border-mustard p-[30px] w-[325px] h-[309px]">
                    <p class="font-K2D text-mustard font-bold text-[40px]">$ 00</p>
                    <p class="font-K2D font-bold text-2xl text-mustard  pb-2">3 MONTH</p>
                    <p class="font-light font-K2D text-[24px] opacity-50">Lorem Ipsum is simply dummy text</p>
                </div>
            </div>
            <p class="flex items-center font-K2D text-mustard font-bold text-[140px]">2</p>
            <div class="flex flex-col gap-y-14 justify-center">
                <TextContent class="font-light font-K2D text-2.5xl"/>
                <TextContent class="font-light font-K2D text-2.5xl"/>
                <TextContent class="font-light font-K2D text-2.5xl"/>
            </div>
        </div>
        <div class="flex justify-center gap-24 mb-[76px]">
            <p class="flex items-center font-K2D text-mustard font-bold text-[140px]">3</p>
            <div class="flex flex-col gap-y-14 justify-center">
                <TextContent class="font-light font-K2D text-2.5xl"/>
                <TextContent class="font-light font-K2D text-2.5xl"/>
                <TextContent class="font-light font-K2D text-2.5xl"/>
            </div>
            <div class="flex items-center">
                <div class="flex-shrink-0 border-div border-2 border-solid rounded-[10px] border-mustard p-[30px] w-[325px] h-[309px]">
                    <p class="font-K2D text-mustard font-bold text-[40px] text-right pb-[19px]">$ 00</p>
                    <p class="font-K2D font-bold text-2xl text-mustard  pb-2">5 MONTH</p>
                    <p class="font-light font-K2D text-[24px] opacity-50">Lorem Ipsum is simply dummy text</p>
                </div>
            </div>
        </div>
    </div>
    
</template>
