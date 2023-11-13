<script setup lang="ts">
  import Logo from "@/components/Logo.vue"
  import SignInButton from "@/components/SignInButton.vue"
  import SearchBar from "@/components/SearchBar.vue"
</script>

<template>
    <div class="hidden md:flex px-[5%] py-[35px] w-full">
        <div class="w-full flex">
                <Logo />
                <SearchBar />
        </div>
        <div class="flex justify-end">
          <SignInButton />
        </div>
      </div>
</template>