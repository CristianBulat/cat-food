<template>
    <header>
        <HeaderNav class="py-4 md:py-[35px] h-20 md:h-36"/>
    </header>
    <div class="px-[5%]">
        <slot></slot>
    </div>
    <footer>
        <FooterNav />
    </footer>
</template>

<script setup lang="ts">
import HeaderNav from '@/components/HeaderNav.vue';
import FooterNav from '@/components/FooterNav.vue';
</script>