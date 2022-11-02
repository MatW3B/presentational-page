import { createPrismic } from "@prismicio/vue";
import type { FilledContentRelationshipField } from "@prismicio/types";

function linkResolver(document: FilledContentRelationshipField) {
  if (document.type === "post") {
    return "/blog/" + document.uid;
  }
  return "/";
}

const prismic = createPrismic({
  endpoint: "my-pg",
  linkResolver,
});

export default prismic;