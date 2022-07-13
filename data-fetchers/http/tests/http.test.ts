import { get, HttpError, JsonParseError } from "../http";

interface TestObject {
  id: number;
  name: string;
  ok: boolean;
}

describe("http tests", () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockClear();
  });

  it("rejects on throw", async () => {
    global.fetch = jest.fn().mockImplementationOnce(() => {
      throw new HttpError("throws");
    });

    await expect(get({ url: "throw" })).rejects.toStrictEqual(
      new HttpError("throws")
    );
  });

  it("rejects on not OK status", async () => {
    global.fetch = jest.fn().mockImplementationOnce(() => {
      return {
        ok: false,
        status: 404,
        text: () => "error text",
      };
    });

    await expect(get({ url: "not-ok" })).rejects.toStrictEqual(
      new HttpError("Failed request, http status: 404, text: error text")
    );
  });

  it("returns valid response as object", async () => {
    global.fetch = jest.fn().mockImplementationOnce(() => {
      return {
        ok: true,
        text: () => '{"id":1,"name":"denis","ok":false}',
      };
    });

    await expect(get<TestObject>({ url: "ok" })).resolves.toStrictEqual({
      id: 1,
      name: "denis",
      ok: false,
    });
  });

  it("fails with JsonParseError if invalid JSON in response", async () => {
    global.fetch = jest.fn().mockImplementationOnce(() => {
      return {
        ok: true,
        text: () => "invalid json",
      };
    });

    await expect(get({ url: "bad-json" })).rejects.toStrictEqual(
      new JsonParseError(
        "Invalid JSON [SyntaxError: Unexpected token i in JSON at position 0]"
      )
    );
  });

  it("fails with JsonParseError if response is incorrect", async () => {
    global.fetch = jest.fn().mockImplementationOnce(() => {
      return {
        ok: true,
        text: () => '{"what":"lol"}',
      };
    });

    const typeGuard = (r: any): r is TestObject =>
      "id" in r && "name" in r && "ok" in r;

    await expect(get({ url: "bad-json" }, typeGuard)).rejects.toStrictEqual(
      new JsonParseError("Invalid JSON [Not matching target object structure]")
    );
  });
});
