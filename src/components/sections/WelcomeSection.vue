<script lang="ts">
import ArrowStraightVue from '../iconWrappers/ArrowStraight.vue'

import { defineComponent } from 'vue'

export default defineComponent({
    components: {
      ArrowStraightVue,
    }
})
</script>

<template>
  <section class="flex column">
    <h1> Hey.</h1>
    <h1>I am Mat.</h1>
    <h1 style="margin-left: 0.1rem;">A <span class="gradient-text">Frontend</span> Dev.</h1>  
    <p>Focusing on creating web apps and websites, design, UI/UX and web security.</p>
    <q-btn id="btn-repository" href="https://github.com/TheMishu" label="Repository" outline rounded />
  </section>
  <ArrowStraightVue label="About Me" pointing="down"/>
</template>

<style scoped lang="scss">
p {
  margin-bottom: 0px;
}
  
#btn-repository {
  margin-top: 1rem;
  width: 120px;
  align-self: flex-end;
}

</style>
