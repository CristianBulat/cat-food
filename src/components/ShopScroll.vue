<script setup lang="ts">
    import TextContent from "./TextContent.vue"
    import ScrollBox from "./ScrollBox.vue";
</script>

<template>
    <div class="mb-[75px] text-center">
        <h3 class="text-mustard font-K2D font-bold text-[36px] my-5">Lorem Ipsum</h3>
        <div class="flex justify-center">
            <TextContent class="font-light text-2.5xl w-[700px]"/>
        </div>
    </div>
    <div>
        <ScrollBox />
    </div>
    
</template>