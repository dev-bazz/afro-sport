import { createServer, Model } from "miragejs";

export default function ({ environment = "development" } = {}) {
	const server = createServer({
		environment,

		models: {
			player: Model,
		},
		seeds(server) {
			server.create("player", {
				firstName: "Clement",
				lastName: "Bazuaye",
				position: ["striker", "defenders"],
			});
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
