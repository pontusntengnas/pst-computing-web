import { get } from "../http/http";
import { Bio, Principle, Profile, Skill, SocialLink } from "./types";

const baseUrl = process.env["PROFILE_API_BASE_URL"];
const authToken = process.env["PROFILE_API_AUTH_TOKEN"];

/* Profile */
export const getProfile = (): Promise<Profile> =>
  get<Profile>(
    {
      url: `${baseUrl}/api/profile`,
      headers: { ...authHeader() },
    },
    isProfile
  );

const isProfile = (object: any): object is Profile =>
  "name" in object &&
  "lastName" in object &&
  "role" in object &&
  "location" in object &&
  "description" in object &&
  "email" in object &&
  "phone" in object;

/* Skills */
export const getSkills = (): Promise<Array<Skill>> =>
  get<Array<Skill>>(
    {
      url: `${baseUrl}/api/skills`,
      headers: { ...authHeader() },
    },
    isSkills
  );

const isSkills = (object: any): object is Array<Skill> =>
  isArray(object) && object.every(isSkill);

const isSkill = (object: any): object is Skill =>
  "name" in object && "orderOfPreference" in object && "url" in object;

/* Social Links */
export const getSocialLinks = (): Promise<Array<SocialLink>> =>
  get<Array<SocialLink>>(
    {
      url: `${baseUrl}/api/social-links`,
      headers: { ...authHeader() },
    },
    isSocialLinks
  );

const isSocialLinks = (object: any): object is Array<SocialLink> =>
  isArray(object) && object.every(isSocialLink);

const isSocialLink = (object: any): object is SocialLink =>
  "name" in object && "icon" in object && "url" in object;

/* Bio */
export const getBio = (): Promise<Bio> =>
  get<Bio>(
    {
      url: `${baseUrl}/api/bio`,
      headers: { ...authHeader() },
    },
    isBio
  );

const isBio = (object: any): object is Bio =>
  isArray(object?.principles) &&
  object.principles.every(isPrinciple) &&
  "part_one" in object &&
  "part_two" in object;

const isPrinciple = (object: any): object is Principle =>
  object.text !== undefined && object.text !== null;

/* Utils */
const isArray = (object: any): object is Array<any> =>
  object !== undefined && object !== null && Array.isArray(object);

const authHeader = () => ({
  Authorization: `${authToken}`,
});
