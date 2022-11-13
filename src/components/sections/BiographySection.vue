<script lang="ts">
import { defineComponent } from 'vue'
import ArrowStraightVue from '../iconWrappers/ArrowStraight.vue'

export default defineComponent({
    components: {
      ArrowStraightVue,
    }
})
</script>

<template>
    <ArrowStraightVue label="Welcome" pointing="up"/>
    <section>
        <p> <!--About Me -->
            Caught the passion for developing webApps at the university, going over subjects and competitions
            made me pursue the craft more.
        </p>
        <p> <!-- Brief history -->
            Working <a>@Fujitsu</a> as a Frontend Developer since 2020, working with Angular for 4 years.
            <!-- years could be calculated easily :) -->
        </p>
        <p> <!-- Current goals -->
            Currently interested in and exploring web3, security and UX oriented design. 
        </p>
        <h5>Tech stack I'm fond of:</h5>
        <ul>
            <li>Typescript</li>
            <li>Angular</li>
            <li>RxJs</li>
            <li>LESS/Sass</li>
            <li>Vue3</li>
            <li>Python</li>
        </ul>
    </section>
    <ArrowStraightVue label="Projects" pointing="down"/>
</template>
