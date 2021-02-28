import { server } from "./server";
// db
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
