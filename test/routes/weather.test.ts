import { build } from "../helper";

describe("weather tests", () => {
  const app = build();

  test("async weather", async () => {
    const res = await app.inject({
      url: "/weather",
    });

    expect(res.statusCode).toEqual(200);
  });
});
