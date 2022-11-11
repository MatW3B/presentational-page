<script lang="ts">
import { defineComponent } from 'vue'
import { Mousewheel, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

import WelcomeSection from '@/components/sections/WelcomeSection.vue'
import BiographySection from '@/components/sections/BiographySection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
    WelcomeSection,
    BiographySection,
    ProjectsSection,
    ContactSection
},
  setup(this) {
      return {
        modules: [Mousewheel, Pagination]
      }
  },
})
</script>

<template>
  <swiper :direction="'vertical'"
    :slidesPerView="1"
    :spaceBetween="30"
    :speed="800"
    :mousewheel="true" 
    :pagination="{
      clickable: false,
    }" 
    :modules="modules"
    class="mySwiper">
    <swiper-slide>
      <!-- section with Willkommen -->
      <WelcomeSection/>
    </swiper-slide>
    <swiper-slide>
      <!-- section with brief introduction -->
      <BiographySection/>
    </swiper-slide>
    <swiper-slide> 
      <!-- section with github projects-->
      <ProjectsSection/>
    </swiper-slide>
    <swiper-slide>
      <!-- section with contact info-->
      <ContactSection/>
    </swiper-slide>
  </swiper>
</template>
