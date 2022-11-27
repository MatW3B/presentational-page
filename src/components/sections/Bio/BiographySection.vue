<script lang="ts">
import HistorySection from '@/components/sections/Bio/History/HistorySection.vue';
import { defineComponent } from 'vue'
import ArrowStraightVue from '../../iconWrappers/ArrowStraight.vue'

export default defineComponent({
    components: {
    ArrowStraightVue,
    HistorySection
}
})
</script>

<template>
    <ArrowStraightVue label="Welcome" pointing="up"/>
    <section>
        <h2>History</h2>
        <HistorySection></HistorySection>
    </section>
    <section>
        <h2>About Me</h2>
        <p> <!--About Me -->
            Caught the passion for developing webApps at the university, going over subjects and competitions
            made me pursue the craft more.
        </p>
        <p> <!-- Brief history -->
            Working <a>@Fujitsu</a> as a Frontend Developer since 2020, working with Angular for 4 years.
            <!-- years could be calculated easily :) -->
        </p>
        <p> <!-- Current goals -->
            Currently interested in and exploring web3, reading up on web applications security issues and concerns,
            learning figma and UX oriented design. 
        </p>
    </section>
    <ArrowStraightVue label="Projects" pointing="down"/>
</template>
