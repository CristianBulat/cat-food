<script setup lang="ts">
import HeartIcon from './icons/HeartIcon.vue';
</script>
<template>
    <div class="shop-product-view-div w-[290px] h-[500px] mx-auto">
        <div class="flex w-[350px]">
            <img src="@/assets/images/Mask-group-2.png" class="w-[290px] h-[275px]" />
            <div
                class="w-[50px] h-[107px] ml-[-50px] bg-bgcolor rounded-bl-lg flex flex-col justify-center items-center gap-3">
                <div
                    class="flex justify-center items-center rounded-full border-[2px] border-black opacity-10 w-[35px] h-[35px]">
                    <button class=" font-K2D text-2.5xl justify-center">i</button>
                </div>
                <div class="w-[35px] h-[35px]">
                    <HeartIcon class="w-[35px] h-[35px] opacity-10" />
                </div>
            </div>
        </div>
        <div class="flex justify-between mt-[30px] mb-[10px]">
            <h4 class="font-K2D font-bold text-2.5xl">Lorem Ipsum</h4>
            <p class="font-K2D font-bold text-mustard text-2.5xl">$ 00</p>
        </div>
        <p class="font-light font-K2D text-2.5xl">Lorem Ipsum is simply dummy text of the printing</p>
    </div>
</template>