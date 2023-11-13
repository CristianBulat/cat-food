<template>
    <div class="flex flex-col md:flex-row justify-center items-center w-full md:justify-normal md:mt-0 pb-4 mb-2 md:pb-28 md:mb-10 border-b-[1px] md:border-b-2 border-mustard">
        <div class="w-full">
            <img src="@/assets/images/Mask-group-2.png" class="w-full" />
        </div>
        <div class="w-full">
            <div class="ml-0 md:ml-28 ">
                <h3 class="text-mustard font-K2D text-[32px] md:text-[40px] mb-2.5">Lorem Ipsum</h3>
                <div class="justify-between gap-1 inline-flex text-mustard items-center">
                    <FilledStarIcon class="w-5 h-5" />
                    <FilledStarIcon class="w-5 h-5" />
                    <FilledStarIcon class="w-5 h-5" />
                    <FilledStarIcon class="w-5 h-5" />
                    <OutlineStarIcon class="w-5 h-5" />
                    <p class="font-K2D opacity-50 text-black text-[11px] md:text-[15px] ml-1.5">124 reviews</p>
                </div>
                <div class="my-7 md:my-9">
                    <p class="font-K2D font-bold text-mustard text-[32px] md:text-[40px]">$ 00</p>
                </div>
                <div class="flex gap-12 md:gap-28 w-full font-light font-K2D text-xs md:text-2.5xl">
                    <div class="flex flex-col gap-2 md:gap-3">
                        <p>The code:</p>
                        <p>Brands:</p>
                        <p>Animal species:</p>
                        <p>Weight:</p>
                        <p>Product class:</p>
                        <p>Age of the animal:</p>
                        <p>Ingredients:</p>
                    </div>
                    <div class="flex flex-col gap-2 md:gap-3">
                        <p>25546</p>
                        <p>Lorem Ipsum</p>
                        <p>kitten</p>
                        <p>1 kg on the scale</p>
                        <p>premium</p>
                        <p>grown ups</p>
                        <p>chicken</p>
                    </div>
                </div>
                <div class="hidden md:block w-full">
                    <p class="font-K2D font-light text-2.5xl my-14"><span class="font-medium">Availability:</span> 145 in
                        stock
                    </p>
                    <div class="flex gap-32">
                        <QuantityButton />
                        <CustomButton class="w-[290px] h-16 border-2" />
                    </div>
                </div>
                <div class="block md:hidden">
                    <div class="flex items-center gap-4">
                        <p class="font-K2D font-light text-xs my-14"><span class="font-medium">Availability:</span> 145
                            in stock
                        </p>
                        <QuantityButton />
                    </div>
                    <CustomButton class="w-[290px] h-8 md:h-16 border-[1px]" />
                </div>


            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import CustomButton from './CustomButton.vue';
import QuantityButton from './QuantityButton.vue';
import FilledStarIcon from './icons/FilledStarIcon.vue';
import OutlineStarIcon from './icons/OutlineStarIcon.vue';
</script>