import express from "express"
import { app, server } from "./server";
import helmet from "helmet"
//@ts-ignore
import xss from "xss-clean"
import cors from "cors"

//@ts-ignore
import compression from "compression"
import { errorHandler } from './middlewares/errorHandler';
import { ApiError } from "./middlewares/apiHandler";
import httpStatus from "http-status";
import router from "./controllers/index"
import config from "../config/config";



// db

server.applyMiddleware({ app })
// app.use()

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// sanitize request data
app.use(xss());

// gzip compression
app.use(compression());

app.use(cors());
app.options('*', cors());

app.use(router)

app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

app.use(errorHandler)

app.listen({ port: config.port }, () => {
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
})