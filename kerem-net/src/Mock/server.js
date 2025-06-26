import data from "./Posts.json";
import { createServer } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  console.log("Started Mock Server in development environment");

  let server = createServer({
    environment: environment,

    routes() {
      this.namespace = "api"; // Optional: Prefix all routes with /api

      // Define a GET route for /api/posts
      this.get("/posts", () => {
        console.log("Mock data sent");
        return data;
      });
    },
  });

  return server;
}
