<script lang="ts">
import IconArrowRefresh from '@/assets/icons/IconArrowRefresh.vue';
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
   components: { IconArrowRefresh },
   props: {
      label: String,
      pointing: String as PropType<'down' | 'up'>
   }
})
</script>

<template>
   <div class="refresh-container" :style="{ width: '40px' }">
      <IconArrowRefresh />
   </div>
</template>

<style lang="scss">
.refresh-container {
   position: absolute;
   right: 0;
   bottom: 0;
   display: flex;
   flex-direction: column;
   align-items: center;
}
</style>