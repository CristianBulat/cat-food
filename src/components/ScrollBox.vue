<script setup lang="ts">
    import CustomButton from "./CustomButton.vue"
    import { ref } from 'vue';

    const scrollContainer = ref<HTMLDivElement | null>(null)

    let myMediaQuery = window.matchMedia('(min-width: 768px)');

    const scrollLeft = () => {
        if(myMediaQuery.matches){
            if(scrollContainer.value)
            scrollContainer.value.scrollLeft -= 275;
        }
        else if(scrollContainer.value)
            scrollContainer.value.scrollLeft -= 152;
    }

    const scrollRight = () => {
        if(myMediaQuery.matches){
            if(scrollContainer.value)
            scrollContainer.value.scrollLeft += 275;
        }
        else if(scrollContainer.value)
            scrollContainer.value.scrollLeft += 152;
    }

</script>

<template>
    <div class="flex gap-28 justify-center px-[5%]">
        <img src="../assets/images/Vector 5.svg" @click="scrollLeft" class="w-3 md:w-5"/>
        <div ref="scrollContainer" class="grid grid-flow-col gap-12 w-[140px] md:w-[1100px] scrollable">
            <div>
                <img src="../assets/images/Mask-group-2.png" class="w-[230px] h-[235px] mb-[60px]"/>
                <CustomButton class="border-2 mx-auto w-[230px] h-[43px]" />
            </div>
            <div>
                <img src="../assets/images/Mask-group-2.png" class="w-[230px] h-[235px] mb-[60px]"/>
                <CustomButton class="border-2 mx-auto w-[230px] h-[43px]"/>
            </div>
            <div>
                <img src="../assets/images/Mask-group-2.png" class="w-[230px] h-[235px] mb-[60px]"/>
                <CustomButton class="border-2 mx-auto w-[230px] h-[43px]"/>
            </div>
            <div>
                <img src="../assets/images/Mask-group-2.png" class="w-[230px] h-[235px] mb-[60px]" />
                <CustomButton class="border-2 mx-auto w-[230px] h-[43px]"/>
            </div>
            <div>
                <img src="../assets/images/Mask-group-2.png" class="w-[230px] h-[235px] mb-[60px]" />
                <CustomButton class="border-2 mx-auto w-[230px] h-[43px]"/>
            </div>
            <div>
                <img src="../assets/images/Mask-group-2.png" class="w-[230px] h-[235px] mb-[60px]" />
                <CustomButton class="border-2 mx-auto w-[230px] h-[43px]"/>
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