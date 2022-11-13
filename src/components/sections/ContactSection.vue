<script lang="ts">
import { defineComponent } from 'vue'
import ArrowStraightVue from '../iconWrappers/ArrowStraight.vue'
import ArrowRefreshVue from '@/components/iconWrappers/ArrowRefresh.vue';

export default defineComponent({
    components: {
      ArrowStraightVue,
      ArrowRefreshVue
    },
})
</script>

<template>
    <ArrowStraightVue label="Projects" pointing="up"/>
    <section>
        <p>Interested in catching me somewhere?</p>
        <p>Feel free to reach me on:</p>
        <!-- UOOOGH ROZWIJANE IKONKI TUTAJ SZTOSIWO BEDZIEEE -->
        email
        discord
        IG
    </section>
    <ArrowRefreshVue></ArrowRefreshVue>
</template>
