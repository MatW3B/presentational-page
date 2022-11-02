<script lang="ts">
import type { PrismicDocument } from '@prismicio/types';
import { from } from 'rxjs';
import { defineComponent } from 'vue'

export default defineComponent({
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
    <section>
        projekciki
        <PrismicRichText :field="document?.data.project_name"></PrismicRichText>
    </section>
</template>
