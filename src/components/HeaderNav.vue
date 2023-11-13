<script setup lang="ts">
import { ref } from 'vue';
import Logo from './Logo.vue';
import MenuIcon from './icons/MenuIcon.vue';

const menuOpened = ref(false)

function mobileMenu() {
    menuOpened.value = !menuOpened.value
}
</script>

<template>
    <div class="flex justify-between items-center px-[5%] py-9">
        <Logo class="w-[40%]" />
        <div class="hidden md:flex justify-end gap-20 w-full">
            <button type="submit" class="font-K2D font-normal text-[24px]">HOME</button>
            <button type="submit" class="font-K2D font-normal text-[24px]">SHOP</button>
            <button type="submit" class="font-K2D font-normal text-[24px]">MEDIA</button>
            <button type="submit" class="font-K2D font-normal text-[24px]">CONTACT US</button>
            <button type="submit" class="font-K2D font-normal text-[24px]">SIGN IN</button>
        </div>
        <div class="topnav md:hidden">
            <button @click="mobileMenu">
                <MenuIcon/>
            </button>
        </div>
    </div>
    <div v-if="menuOpened" class="w-full flex flex-col items-center font-K2D pb-9 px-[5%]">
        <a href="/" class="hover:font-bold">HOME</a>
        <a href="/shop" class="hover:font-bold">SHOP</a>
        <a href="#media" class="hover:font-bold">MEDIA</a>
        <a href="#contact-us" class="hover:font-bold">CONTACT US</a>
        <a href="#sign-in" class="hover:font-bold">SIGN IN</a>
    </div>
</template>