<script setup lang="ts">
    import Logo from './Logo.vue';
</script>

<template>
    <div class="flex justify-between items-center bg-mustard px-[5%] py-[35px] h-10 md:h-36">
        <Logo class="w-[40%]"/>
        <div class="hidden md:flex justify-end gap-20 w-full">
            <button type="submit" class="font-K2D font-normal text-[24px]">HOME</button>
            <button type="submit" class="font-K2D font-normal text-[24px]">SHOP</button>
            <button type="submit" class="font-K2D font-normal text-[24px]">MEDIA</button>
            <button type="submit" class="font-K2D font-normal text-[24px]">CONTACT US</button>
            <button type="submit" class="font-K2D font-normal text-[24px]">SIGN IN</button>
        </div>
    </div>
</template>