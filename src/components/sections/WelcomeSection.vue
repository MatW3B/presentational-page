<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
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
