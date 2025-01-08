import app from "./app";
import mongoose from "mongoose";
import { Server } from "http";
import { envConfig } from "./config";

let server: Server;

async function main() {
	try {
		await mongoose.connect(envConfig.mongo_uri as string);

		server = app.listen(envConfig.port, () => {
			console.log(
				`\nApp is listening on port ${envConfig.port} \nMongoDB connected`
			);
		});
	} catch (err) {
		console.log(err);
	}
}

main();
