<script setup lang="ts">
    import { ref } from 'vue';

    const scrollContainer = ref<HTMLDivElement | null>(null)

    let myMediaQuery = window.matchMedia('(min-width: 768px)');

    const scrollLeft = () => {
        if(myMediaQuery.matches){
            if(scrollContainer.value)
            scrollContainer.value.scrollLeft -= 380;
        }
        else if(scrollContainer.value)
            scrollContainer.value.scrollLeft -= 152;
    }

    const scrollRight = () => {
        if(myMediaQuery.matches){
            if(scrollContainer.value)
            scrollContainer.value.scrollLeft += 380;
        }
        else if(scrollContainer.value)
            scrollContainer.value.scrollLeft += 152;
    }

</script>

<template>
    <h3 class="fond-K2D text-mustard font-bold text-[36px] text-center mb-[120px]">Subscription to food</h3>
    <div class="flex gap-24 justify-center pb-[200px]">
        <img src="../assets/images/Vector 5.svg" @click="scrollLeft" class="w-3 md:w-5"/>
        <div ref="scrollContainer" class="grid grid-flow-col gap-14 justify-between items-center w-[140px] md:w-[1150px] h-[350px] scrollable">
            <div class="flex-shrink-0 border-div border-2 border-solid rounded-[10px] border-mustard p-[30px] w-[325px] h-[309px] hover:scale-110 duration-100 ml-[20px]">
                <p class="font-K2D text-mustard font-bold text-[40px] text-right pb-[19px]">$ 00</p>
                <p class="font-K2D font-bold text-2xl text-mustard  pb-2">1 MONTH</p>
                <p class="font-light font-K2D text-[24px] opacity-50">Lorem Ipsum is simply dummy text</p>
                <div class="flex justify-end">
                    <button type="submit" class="bg-mustard text-bgcolor font-K2D font-bold text-[21px] w-[60px] h-[59px] rounded-full">GO</button>
                </div>
            </div>
            <div class="flex-shrink-0 border-div border-2 border-solid rounded-[10px] border-mustard p-[30px] w-[325px] h-[309px] hover:scale-110 duration-100">
                <p class="font-K2D text-mustard font-bold text-[40px] text-right pb-[19px]">$ 00</p>
                <p class="font-K2D font-bold text-2xl text-mustard  pb-2">3 MONTH</p>
                <p class="font-light font-K2D text-[24px] opacity-50">Lorem Ipsum is simply dummy text</p>
                <div class="flex justify-end">
                    <button type="submit" class="bg-mustard text-bgcolor font-K2D font-bold text-[21px] w-[60px] h-[59px] rounded-full">GO</button>
                </div>
            </div>
            <div class="flex-shrink-0 border-div border-2 border-solid rounded-[10px] border-mustard p-[30px] w-[325px] h-[309px] hover:scale-110 duration-100">
                <p class="font-K2D text-mustard font-bold text-[40px] text-right pb-[19px]">$ 00</p>
                <p class="font-K2D font-bold text-2xl text-mustard  pb-2">5 MONTH</p>
                <p class="font-light font-K2D text-[24px] opacity-50">Lorem Ipsum is simply dummy text</p>
                <div class="flex justify-end">
                    <button type="submit" class="bg-mustard text-bgcolor font-K2D font-bold text-[21px] w-[60px] h-[59px] rounded-full">GO</button>
                </div>
            </div>
            <div class="flex-shrink-0 border-div border-2 border-solid rounded-[10px] border-mustard p-[30px] w-[325px] h-[309px] hover:scale-110 duration-100">
                <p class="font-K2D text-mustard font-bold text-[40px] text-right pb-[19px]">$ 00</p>
                <p class="font-K2D font-bold text-2xl text-mustard  pb-2">1 MONTH</p>
                <p class="font-light font-K2D text-[24px] opacity-50">Lorem Ipsum is simply dummy text</p>
                <div class="flex justify-end">
                    <button type="submit" class="bg-mustard text-bgcolor font-K2D font-bold text-[21px] w-[60px] h-[59px] rounded-full">GO</button>
                </div>
            </div>
            <div class="flex-shrink-0 border-div border-2 border-solid rounded-[10px] border-mustard p-[30px] w-[325px] h-[309px] hover:scale-110 duration-100">
                <p class="font-K2D text-mustard font-bold text-[40px] text-right pb-[19px]">$ 00</p>
                <p class="font-K2D font-bold text-2xl text-mustard  pb-2">3 MONTH</p>
                <p class="font-light font-K2D text-[24px] opacity-50">Lorem Ipsum is simply dummy text</p>
                <div class="flex justify-end">
                    <button type="submit" class="bg-mustard text-bgcolor font-K2D font-bold text-[21px] w-[60px] h-[59px] rounded-full">GO</button>
                </div>
            </div>
            <div class="flex-shrink-0 border-div border-2 border-solid rounded-[10px] border-mustard p-[30px] w-[325px] h-[309px] hover:scale-110 duration-100 mr-[20px]">
                <p class="font-K2D text-mustard font-bold text-[40px] text-right pb-[19px]">$ 00</p>
                <p class="font-K2D font-bold text-2xl text-mustard  pb-2">5 MONTH</p>
                <p class="font-light font-K2D text-[24px] opacity-50">Lorem Ipsum is simply dummy text</p>
                <div class="flex justify-end">
                    <button type="submit" class="bg-mustard text-bgcolor font-K2D font-bold text-[21px] w-[60px] h-[59px] rounded-full">GO</button>
                </div>
            </div>
        </div>
        <img src="../assets/images/Vector 5.svg" @click="scrollRight" class="rotate-180 w-3 md:w-5"/>
    </div>
     
</template>

<style scoped>
 .scrollable{
    overflow-y: scroll;
    scroll-behavior: smooth;
 }

 .scrollable::-webkit-scrollbar {
    display: none;
}
</style>