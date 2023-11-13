<script setup lang="ts">
    import HeaderNav from '@/components/HeaderNav.vue';
    import ShopIntroduction from '@/components/ShopIntroduction.vue';
    import ShopFilterButtons from '@/components/ShopFilterButtons.vue';
    import ShopProductView from '@/components/ShopProductView.vue';
    import CustomButton from '@/components/CustomButton.vue';
    import FooterNav from '@/components/FooterNav.vue';
</script>

<template>
    <div>
        <header>
            <HeaderNav />
        </header>
        <section  class="w-full px-[5%] flex flex-col justify-center">
            <ShopIntroduction />
            <ShopFilterButtons />
            <div class="grid grid-cols-4 gap-4 pb-[60px]">
                <ShopProductView />
                <ShopProductView />
                <ShopProductView />
                <ShopProductView />
                <ShopProductView />
                <ShopProductView />
                <ShopProductView />
                <ShopProductView />
                <ShopProductView />
                <ShopProductView />
                <ShopProductView />
                <ShopProductView />
            </div>
            <div class="flex justify-center pb-[120px]">
                <CustomButton class="md:w-[290px] h-[54px] border-2"/>
            </div>
        </section>
        <footer>
            <FooterNav class="w-[100%] m-[0] p-[0]"/>
        </footer>
    </div>
</template>