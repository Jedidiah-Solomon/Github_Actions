const request = require('supertest');
const { app } = require('../src/server');

let server;

beforeAll((done) => {
  server = app.listen(3000, done); // Start the server before running tests
});

afterAll((done) => {
  server.close(done); // Close the server after all tests
});

describe('GET /error', () => {
  it('should return an error', async () => {
    const response = await request(app).get('/error');
    expect(response.status).toBe(500);
  });
});

describe('GET /success', () => {
  it('should return a success message', async () => {
    const response = await request(app).get('/success');
    expect(response.status).toBe(200);
    expect(response.text).toBe('This is a success message.');
  });
});

describe('GET /fail', () => {
  it('should return a 200 status', async () => {
    const response = await request(app).get('/fail');
    expect(response.status).toBe(200); // This will intentionally fail because it should be 404
  });
});
