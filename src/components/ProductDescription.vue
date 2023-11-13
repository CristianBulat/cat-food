<script setup lang="ts">
    import ReviewComponent from './ReviewComponent.vue';
    import ProductScrollBox from './ProductScrollBox.vue';
    import ProductDetails from './ProductDetails.vue';
</script>

<template>
    <ProductDetails/>
    <div class=" md:flex mb-[30px]">
        <div class="md:w-[80%]">
            <h4 class="font-K2D text-mustard font-semibold text-lg md:text-4xl mb-8">Description</h4>
            <p class="font-K2D text-sm md:text-2.5xl font-light mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p class="font-K2D text-sm md:text-2.5xl font-light mb-4">Ingredients:</p>
            <ul class="list-disc ml-[15px] font-K2D text-sm md:text-2.5xl font-light mb-[20px] pl-[20px]">
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
            </ul>
        </div>
        <div>
            <h4 class="font-K2D text-mustard font-semibold text-lg md:text-4xl mb-[30px] md:pl-16">Reviews</h4>
            <ReviewComponent />
            <ReviewComponent />
            <ReviewComponent />
        </div>
    </div>
    <div>
        <div>
            <h4 class="font-K2D text-mustard font-semibold text-lg md:text-4xl mb-[30px]">You may also like</h4>
        </div>
        <div class="flex justify-center mb-[30px] m-auto">
            <ProductScrollBox />
        </div>
    </div>


    
</template>