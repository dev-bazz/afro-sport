import { createServer, Model } from "miragejs";
import players from "./playerData";

export default function ({ environment = "development" } = {}) {
	const server = createServer({
		environment,

		models: {
			player: Model,
		},
		seeds(server) {
			players.forEach((player) => {
				server.create("player", player);
			});
			// server.create("player", {
			// 	firstName: "Clement",
			// 	lastName: "Bazuaye",
			// 	position: ["striker", "defenders"],
			// });
		},

		routes() {
			this.namespace = "api";
			this.get("test", (schema) => {
				return schema.players.all();
			});
		},
	});

	return server;
}
