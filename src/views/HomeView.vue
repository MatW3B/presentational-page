<script lang="ts">
import { defineComponent } from 'vue'
import type { PrismicDocument } from '@prismicio/types'
import { from } from 'rxjs'
import { Mousewheel, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import WelcomeSectionVue from '@/components/WelcomeSection.vue'

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
    WelcomeSectionVue
  },
  setup(this) {
      return {
        modules: [Mousewheel, Pagination]
      }
  },
  data() {
    return {
      document: null as null | PrismicDocument<any>
    }
  },
  created() {
    from(this.$prismic.client.getByUID('repo', 'lorem-ipsum')).subscribe({
        next: (v) => this.document = v
      })
  }
})
</script>

<template>
  <swiper :direction="'vertical'"
    :slidesPerView="1"
    :spaceBetween="30"
    :mousewheel="true" 
    :pagination="{
      clickable: true,
    }" 
    :modules="modules"
    class="mySwiper">
    <swiper-slide>
      <!-- section with Willkommen -->
      <WelcomeSectionVue/>
    </swiper-slide>
    <swiper-slide>
      <!-- section with brief introduction -->
      {{ 'maj story, tech stack' }}
    </swiper-slide>
    <swiper-slide> 
      <!-- section with github projects-->
      {{ 'projekciki' }}
    </swiper-slide>
    <swiper-slide>
      <!-- section with contact info-->
      {{ 'email, discord' }}
    </swiper-slide>
  </swiper>
</template>
