<script setup lang="ts">
  import HomePageHeader from "@/components/HomePageHeader.vue"
  import HomeIntroduction from "@/components/HomeIntroduction.vue"
  import ShopScroll from "@/components/ShopScroll.vue"
  import MiddleSearchBar from "@/components/MiddleSearchBar.vue"
  import Abonaments from "@/components/Abonaments.vue"
  import SubscriptionInfo from "@/components/SubscriptionInfo.vue"
  import SubscriptionToFood from "@/components/SubscriptionToFood.vue"
  import FooterNav from "@/components/FooterNav.vue"
</script>

<template>
  <header>
    <HomePageHeader />
  </header>
  <section >
    <div>
      <HomeIntroduction class="px-[5%]"/>
    </div>
    <div>
      <ShopScroll class="px-[5%]"/>
    </div>
    <div>
      <MiddleSearchBar class="w-full"/>
    </div>
    <div>
      <Abonaments class="px-[5%]"/>
    </div>
    <div class="mx-80">
      <SubscriptionInfo />
    </div>
    <div class="px-[5%]">
      <SubscriptionToFood class="px-[5%]"/>
    </div>
  </section>
  <footer>
    <FooterNav />
  </footer>
</template>