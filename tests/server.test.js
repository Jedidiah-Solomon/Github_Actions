const request = require("supertest");
const app = require("../src/server");

describe("GET /error", () => {
  it("should return an error", async () => {
    const response = await request(app).get("/error");
    expect(response.status).toBe(500);
  });
});
