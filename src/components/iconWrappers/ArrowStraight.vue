<script lang="ts">
import IconArrowStraight from '@/assets/icons/IconArrowStraight.vue';
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
   components: { IconArrowStraight },
   props: {
      label: String,
      pointing: String as PropType<'down' | 'up'>
   }
})
</script>

<template>
   <div :class="(pointing === 'up')
   ? 'arrow-container pointing-up swiper-btn prev'
   : 'arrow-container pointing-down swiper-btn next'">
      <span>{{ label }}</span>
      <div :style="{width: '1rem'}">
         <IconArrowStraight/>
      </div>
   </div>
</template>

<style lang="scss">
.arrow-container {
   position: absolute;
   display: flex;
   align-items: center;

   &.pointing-up {
      top: 0;
      left: 0;
      flex-direction: column;

      & svg {
         transform: rotate(180deg);
      }
   }

   &.pointing-down {
      right: 0;
      bottom: 0;
      flex-direction: column-reverse;
   }
}
</style>