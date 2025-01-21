import { defineArrayMember, defineField, defineType } from "sanity";

export const comment = defineType({
  name: "comment",
  title: "Comment",
  type: "document",
  fields: [
    defineField({
      name: "comment",
      title: "Comment",
      type: "string",
    }),
    defineField({
      name: "username",
      title: "Username",
      type: "string",
    }),
    defineField({
      name: "profileimg",
      title: "Profile Image",
      type: "string",
    }),
    defineField({
      name: "post",
      title: "Post",
      description: "Reference the Post the comment is associated to:",
      type: "reference",
      to: {
        type: "post",
      },
    }),
  ],
});
