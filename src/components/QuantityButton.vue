<template>
    <div class="flex justify-center">
        <button class="bg-mustard w-8 md:w-16 h-8 md:h-16 rounded-l-md md:rounded-l-lg text-[40px] font-light text-bgcolor flex items-center justify-center"><MinusIcon class="w-3 md:w-7"/></button>
        <p class="font-K2D text-lg md:text-[40px] text-mustard w-8 md:w-16 h-8 md:h-16 text-center flex items-center justify-center">1</p>
        <button class="bg-mustard w-8 md:w-16 h-8 md:h-16 rounded-r-md md:rounded-r-lg text-[40px] font-light text-bgcolor flex items-center justify-center"><PlusIcon class="w-3 md:w-7"/></button>
    </div>
</template>

<script setup lang="ts">
import PlusIcon from './icons/PlusIcon.vue';
import MinusIcon from './icons/MinusIcon.vue';
</script>