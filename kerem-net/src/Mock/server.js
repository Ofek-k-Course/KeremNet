import data from "./Posts.json";
import { createServer } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  console.log("Started Mock Server in development environment");

  let server = createServer({
    environment: environment,

    routes() {
      this.namespace = "api";
      this.get("/posts", () => {
        console.log("Mock data sent");
        return data;
      });
    },
  });

  return server;
}
