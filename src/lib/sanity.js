// src/lib/sanity.js
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Adlandırılmış export
export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION,
  useCdn: true,
});

const builder = imageUrlBuilder(client);

// Adlandırılmış export
export function urlFor(source) {
  return builder.image(source);
}
