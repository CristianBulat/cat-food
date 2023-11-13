<script setup lang="ts">
    import { ref } from 'vue';
import ProductScroll from './ProductScroll.vue';
import ArrowIcon from './icons/ArrowIcon.vue';

    const scrollContainer = ref<HTMLDivElement | null>(null)

    let myMediaQuery = window.matchMedia('(min-width: 768px)');

    const scrollLeft = () => {
        if(myMediaQuery.matches){
            if(scrollContainer.value)
            scrollContainer.value.scrollLeft -= 315;
        }
        else if(scrollContainer.value)
            scrollContainer.value.scrollLeft -= 152;
    }

    const scrollRight = () => {
        if(myMediaQuery.matches){
            if(scrollContainer.value)
            scrollContainer.value.scrollLeft += 315;
        }
        else if(scrollContainer.value)
            scrollContainer.value.scrollLeft += 152;
    }



</script>

<template>
<div class="flex justify-between w-[100%]">
    <ArrowIcon @click="scrollLeft" class="w-3 md:w-5"/>
    <div ref="scrollContainer" class=" w-[140px] md:w-[1250px] grid grid-flow-col gap-6 scrollable">
        <ProductScroll />
        <ProductScroll />
        <ProductScroll />
        <ProductScroll />
        <ProductScroll />
        <ProductScroll />
        <ProductScroll />
        <ProductScroll />
        <ProductScroll />
        <ProductScroll />
        <ProductScroll />
        <ProductScroll />
        <ProductScroll />
        <ProductScroll />
        <ProductScroll />
    </div>
    <ArrowIcon @click="scrollRight" class="rotate-180 w-3 md:w-5"/>
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