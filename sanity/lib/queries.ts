import { defineQuery } from "next-sanity";

export const query = defineQuery(`*[_type == "post"　&& !blockPost] {
  _id,
    ...
} | order(_createdAt desc)`);
