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
    <h1>
      Hey. <br>
      I am Mat. <br>
      A <span class="gradient-text">Frontend</span> Dev.
    </h1>
    <p>Focusing on creating web apps and websites, design, UI/UX and web security.</p>
    <button id="btn-repository">Repository</button>
  </section>
  <ArrowStraightVue label="About Me" pointing="down"/>
</template>

<style scoped lang="scss">
p {
  margin-bottom: 0px;
}

h1, h2 {
  margin-bottom: 1rem;
}
  
#btn-repository {
  margin-top: 1rem;
  align-items: flex-end;
}


</style>
