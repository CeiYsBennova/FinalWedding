<template>
  <carousel :items-to-show="1.5" :wrap-around="true">
    <slide v-for="slide in slides" :key="slide">
      {{ slide }}
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
    name : 'Carousel',
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation
    },
    setup(){
        const slides = ["../assets/images/slide/bapngo.png", "../assets/images/slide/may.png",
         "../assets/images/slide/cong.png", "../assets/images/slide/dau.png"]
        return {slides}
    }
}
</script>

<style>

</style>