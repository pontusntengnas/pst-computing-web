import { JsonParseError } from "../../http/http";
import {
  getBio,
  getProfile,
  getSkills,
  getSocialLinks,
} from "../profile-client";
import { Principle, Skill, SocialLink } from "../types";

describe("profile-client tests", () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockClear();
  });

  it("fetches Profile", async () => {
    const res =
      '{"data":{"id":1,"attributes":{"name":"alf","lastName":"svensson","location":"swe","role":"ok","description":"senor","createdAt":"2022-06-28T10:58:35.016Z","updatedAt":"2022-06-28T11:01:38.530Z","publishedAt":"2022-06-28T10:58:36.962Z","email":"cool mail","phone":"123"}},"meta":{}}';

    global.fetch = jest.fn().mockImplementationOnce(() => {
      return {
        ok: true,
        text: () => res,
        json: () => JSON.parse(res),
      };
    });

    const profile = await getProfile();

    expect(profile.name).toBe("alf");
    expect(profile.lastName).toBe("svensson");
    expect(profile.location).toBe("swe");
    expect(profile.description).toBe("senor");
    expect(profile.email).toBe("cool mail");
    expect(profile.phone).toBe("123");
  });

  it("validates Profile shape", async () => {
    // missing 'name' property
    const res =
      '{"data":{"id":1,"attributes":{"lastName":"svensson","location":"swe","role":"ok","description":"senor","createdAt":"2022-06-28T10:58:35.016Z","updatedAt":"2022-06-28T11:01:38.530Z","publishedAt":"2022-06-28T10:58:36.962Z","email":"cool mail","phone":"123"}},"meta":{}}';

    global.fetch = jest.fn().mockImplementationOnce(() => {
      return {
        ok: true,
        text: () => res,
        json: () => JSON.parse(res),
      };
    });

    await expect(getProfile()).rejects.toStrictEqual(
      new JsonParseError("Invalid JSON [Not matching target object structure]")
    );
  });

  it("fetches Skills", async () => {
    const res =
      '{"data":[{"id":1,"attributes":{"name":"A","orderOfPreference":0,"url":"aurl","createdAt":"2022-06-28T10:55:27.184Z","updatedAt":"2022-06-28T10:56:32.463Z","publishedAt":"2022-06-28T10:56:32.460Z"}},{"id":2,"attributes":{"name":"B","orderOfPreference":0,"url":"b","createdAt":"2022-06-28T10:55:47.687Z","updatedAt":"2022-06-28T10:56:51.268Z","publishedAt":"2022-06-28T10:56:51.266Z"}}],"meta":{"pagination":{"page":1,"pageSize":25,"pageCount":1,"total":2}}}';

    global.fetch = jest.fn().mockImplementationOnce(() => {
      return {
        ok: true,
        text: () => res,
        json: () => JSON.parse(res),
      };
    });

    const skills = await getSkills();

    expect(skills.length).toBe(2);
    expect(skills).toEqual(
      expect.arrayContaining<Skill>([
        expect.objectContaining<Skill>({
          name: "A",
          orderOfPreference: 0,
          url: "aurl",
        }),
        expect.objectContaining<Skill>({
          name: "B",
          orderOfPreference: 0,
          url: "b",
        }),
      ])
    );
  });

  it("validates Skills shape", async () => {
    // missing 'name' property
    const res =
      '{"data":[{"id":1,"attributes":{"orderOfPreference":0,"url":"aurl","createdAt":"2022-06-28T10:55:27.184Z","updatedAt":"2022-06-28T10:56:32.463Z","publishedAt":"2022-06-28T10:56:32.460Z"}},{"id":2,"attributes":{"name":"B","orderOfPreference":0,"url":"b","createdAt":"2022-06-28T10:55:47.687Z","updatedAt":"2022-06-28T10:56:51.268Z","publishedAt":"2022-06-28T10:56:51.266Z"}}],"meta":{"pagination":{"page":1,"pageSize":25,"pageCount":1,"total":2}}}';

    global.fetch = jest.fn().mockImplementationOnce(() => {
      return {
        ok: true,
        text: () => res,
        json: () => JSON.parse(res),
      };
    });

    await expect(getSkills()).rejects.toStrictEqual(
      new JsonParseError("Invalid JSON [Not matching target object structure]")
    );
  });

  it("fetches Social Links", async () => {
    const res =
      '{"data":[{"id":1,"attributes":{"name":"hej","icon":null,"url":"www.google.se","createdAt":"2022-07-07T12:14:49.623Z","updatedAt":"2022-07-07T12:14:51.322Z","publishedAt":"2022-07-07T12:14:51.319Z"}}],"meta":{"pagination":{"page":1,"pageSize":25,"pageCount":1,"total":1}}}';

    global.fetch = jest.fn().mockImplementationOnce(() => {
      return {
        ok: true,
        text: () => res,
        json: () => JSON.parse(res),
      };
    });

    const socialLinks = await getSocialLinks();

    expect(socialLinks.length).toBe(1);
    expect(socialLinks).toEqual(
      expect.arrayContaining<SocialLink>([
        expect.objectContaining<SocialLink>({
          name: "hej",
          icon: null,
          url: "www.google.se",
        }),
      ])
    );
  });

  it("validates Social Links shape", async () => {
    // missing 'name' property
    const res =
      '{"data":[{"id":1,"attributes":{"icon":null,"url":"www.google.se","createdAt":"2022-07-07T12:14:49.623Z","updatedAt":"2022-07-07T12:14:51.322Z","publishedAt":"2022-07-07T12:14:51.319Z"}}],"meta":{"pagination":{"page":1,"pageSize":25,"pageCount":1,"total":1}}}';

    global.fetch = jest.fn().mockImplementationOnce(() => {
      return {
        ok: true,
        text: () => res,
        json: () => JSON.parse(res),
      };
    });

    await expect(getSocialLinks()).rejects.toStrictEqual(
      new JsonParseError("Invalid JSON [Not matching target object structure]")
    );
  });

  it("fetches Bio", async () => {
    const res =
      '{"data":{"id":1,"attributes":{"part_one":"hola","part_two":"senofr","createdAt":"2022-07-03T20:32:22.047Z","updatedAt":"2022-07-03T20:32:23.821Z","publishedAt":"2022-07-03T20:32:23.819Z","principles":{"data":[{"id":1,"attributes":{"text":"LOL","createdAt":"2022-07-03T20:31:54.254Z","updatedAt":"2022-07-03T20:31:56.844Z","publishedAt":"2022-07-03T20:31:56.843Z"}},{"id":2,"attributes":{"text":"asd","createdAt":"2022-07-03T20:32:08.626Z","updatedAt":"2022-07-03T20:32:09.486Z","publishedAt":"2022-07-03T20:32:09.485Z"}}]}}},"meta":{}}';

    global.fetch = jest.fn().mockImplementationOnce(() => {
      return {
        ok: true,
        text: () => res,
        json: () => JSON.parse(res),
      };
    });

    const bio = await getBio();

    expect(bio.part_one).toBe("hola");
    expect(bio.part_two).toBe("senofr");
    expect(bio.principles.length).toBe(2);
    expect(bio.principles).toEqual(
      expect.arrayContaining<Principle>([{ text: "LOL" }, { text: "asd" }])
    );
  });

  it("validates Bio shape", async () => {
    // one principle missing 'text' prop
    const res =
      '{"data":{"id":1,"attributes":{"part_one":"hola","part_two":"senofr","createdAt":"2022-07-03T20:32:22.047Z","updatedAt":"2022-07-03T20:32:23.821Z","publishedAt":"2022-07-03T20:32:23.819Z","principles":{"data":[{"id":1,"attributes":{"text":"LOL","createdAt":"2022-07-03T20:31:54.254Z","updatedAt":"2022-07-03T20:31:56.844Z","publishedAt":"2022-07-03T20:31:56.843Z"}},{"id":2,"attributes":{"createdAt":"2022-07-03T20:32:08.626Z","updatedAt":"2022-07-03T20:32:09.486Z","publishedAt":"2022-07-03T20:32:09.485Z"}}]}}},"meta":{}}';

    global.fetch = jest.fn().mockImplementationOnce(() => {
      return {
        ok: true,
        text: () => res,
        json: () => JSON.parse(res),
      };
    });

    await expect(getBio()).rejects.toStrictEqual(
      new JsonParseError("Invalid JSON [Not matching target object structure]")
    );
  });
});
