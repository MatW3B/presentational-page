<script lang="ts">
import type { PrismicDocument } from '@prismicio/types'
import { from } from 'rxjs'
import { defineComponent } from 'vue'
import ArrowStraightVue from '../iconWrappers/ArrowStraight.vue'


export default defineComponent({
    components: {
      ArrowStraightVue,
    },
    data() {
        return {
            document: null as null | PrismicDocument<any>
        };
    },
    created() {
        from(this.$prismic.client.getByUID("repo", "lorem-ipsum")).subscribe({
            next: (v) => this.document = v
        });
    },
})
</script>

<template>
    <ArrowStraightVue label="About Me" pointing="up"/>
    <section>
        projekciki
        <PrismicRichText :field="document?.data.project_name"></PrismicRichText>
    </section>
    <ArrowStraightVue label="Contact" pointing="down"/>
</template>
