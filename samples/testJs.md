npm test for server.test.js

```
> github_actions@1.0.0 test
> jest

 FAIL  tests/server.test.js
  GET /error
    √ should return an error (104 ms)
  GET /success
    √ should return a success message (13 ms)
  GET /fail
    × should return a 200 status (13 ms)

  ● GET /fail › should return a 200 status

    expect(received).toBe(expected) // Object.is equality

    Expected: 200
    Received: 404

      30 |   it("should return a 200 status", async () => {
      31 |     const response = await request(app).get("/fail");
    > 32 |     expect(response.status).toBe(200); // This will intentionally fail because it should be 404
         |                             ^
      33 |   });
      34 | });
      35 |

      at Object.toBe (tests/server.test.js:32:29)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 2 passed, 3 total
Snapshots:   0 total
Time:        2.554 s, estimated 3 s
Ran all test suites.
```
