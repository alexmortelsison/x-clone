import { FileTextIcon } from "lucide-react";
import { defineArrayMember, defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Post",
  type: "document",
  icon: FileTextIcon,
  fields: [
    defineField({
      name: "text",
      title: "Text in Post",
      type: "string",
    }),
    defineField({
      name: "blockPost",
      title: "Block Post",
      description: "ADMIN Controls: Toggle if Post is deemed inappropriate",
      type: "boolean",
    }),
    defineField({
      name: "username",
      title: "Username",
      type: "string",
    }),
    defineField({
      name: "profileImg",
      title: "Profile Image",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Post image",
      type: "string",
    }),
  ],
});
