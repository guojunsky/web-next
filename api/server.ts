import { ApolloServer } from "apollo-server-express";
import express from "express"
import { schema } from "./schema";
import { context } from "./context";

export const app = express();
export const server = new ApolloServer({ schema, context });

// server.applyMiddleware({ app });

//  app;