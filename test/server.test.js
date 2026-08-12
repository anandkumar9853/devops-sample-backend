const test = require("node:test");
const assert = require("node:assert");
const http = require("http");

const server = require("../src/server");

test("Health endpoint should return UP", async () => {
    const response = await new Promise((resolve, reject) => {
        const request = http.get(
            "http://localhost:3000/health",
            resolve
        );

        request.on("error", reject);
    });

    assert.strictEqual(response.statusCode, 200);

    server.close();
});