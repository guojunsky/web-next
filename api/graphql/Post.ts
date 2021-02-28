import { objectType, extendType, nonNull, stringArg, intArg } from "nexus";
import { Context } from "../context";

export const Post = objectType({
  name: "Post", // <- Name of your type
  definition(t) {
    t.int("id"); // <- Field named `id` of type `Int`
    t.string("title"); // <- Field named `title` of type `String`
    t.string("body"); // <- Field named `body` of type `String`
    t.boolean("published"); // <- Field named `published` of type `Boolean`
  },
});

export const PostQuery = extendType({
  type: "Query", // 2
  definition(t) {
    t.list.field("drafts", {
      // 3, 4, 5
      type: "Post",
      resolve(_root, _args, ctx: Context) {
        return ctx.db.post.findMany({/*  */
          where: {
            published: false,
          },
        });
      }, // 6, 7
    });
    t.list.field("posts", {
      type: "Post",
      resolve: (root, args, ctx: Context) => {
        return ctx.db.post.findMany({
          where: {
            published: true,
          },
        });
      },
    });
  },
});

export const PostMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("createDraft", {
      type: "Post",
      args: {
        title: nonNull(stringArg()),
        body: nonNull(stringArg()),
      },
      resolve(_root, args, ctx: Context) {
        return ctx.db.post.create({
          data: {
            title: args.title,
            body: args.body,
            published: false,
          },
        });
      },
    });

    t.field("publish", {
      type: "Post",
      args: {
        draftId: nonNull(intArg()),
      },
      resolve(_root, args, ctx: Context) {
        return ctx.db.post.update({
          where: { id: args.draftId },
          data: {
            published: true,
          },
        });
      },
    });
  },
});
