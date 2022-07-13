import { get } from "../http/http";
import { ApiCollectionResponse, ApiSingleResponse } from "../strapi-cms/types";
import { Bio, Principle, Profile, Skill, SocialLink } from "./types";

const baseUrl = process.env["PROFILE_API_BASE_URL"];
const authToken = process.env["PROFILE_API_AUTH_TOKEN"];

/* Profile */
export const getProfile = async (): Promise<Profile> => {
  const response = await get<ApiSingleResponse<Profile>>(
    {
      url: `${baseUrl}/api/profile`,
      headers: { ...authHeader() },
    },
    isProfile
  );

  return response.data.attributes;
};

const isProfile = (object: any): object is ApiSingleResponse<Profile> =>
  isApiSingleResponse(object) &&
  "name" in object.data.attributes &&
  "lastName" in object.data.attributes &&
  "role" in object.data.attributes &&
  "location" in object.data.attributes &&
  "description" in object.data.attributes &&
  "email" in object.data.attributes &&
  "phone" in object.data.attributes;

/* Skills */
export const getSkills = async (): Promise<Array<Skill>> => {
  const response = await get<ApiCollectionResponse<Skill>>(
    {
      url: `${baseUrl}/api/skills`,
      headers: { ...authHeader() },
    },
    isSkills
  );

  return response.data.map((d) => d.attributes);
};

const isSkills = (object: any): object is ApiCollectionResponse<Skill> =>
  isApiCollectionResponse(object) && object?.data.every(isSkill);

const isSkill = (object: any): object is Skill =>
  "name" in object.attributes &&
  "orderOfPreference" in object.attributes &&
  "url" in object.attributes;

/* Social Links */
export const getSocialLinks = async (): Promise<Array<SocialLink>> => {
  const response = await get<ApiCollectionResponse<SocialLink>>(
    {
      url: `${baseUrl}/api/social-links`,
      headers: { ...authHeader() },
    },
    isSocialLinks
  );

  return response.data.map((d) => d.attributes);
};

const isSocialLinks = (
  object: any
): object is ApiCollectionResponse<SocialLink> =>
  isApiCollectionResponse(object) && object?.data.every(isSocialLink);

const isSocialLink = (object: any): object is SocialLink =>
  "name" in object.attributes &&
  "icon" in object.attributes &&
  "url" in object.attributes;

/* Bio */
interface ApiBio {
  part_one: string;
  part_two: string;
  principles: ApiCollectionResponse<Principle>;
}

export const getBio = async (): Promise<Bio> => {
  const response = await get<ApiSingleResponse<ApiBio>>(
    {
      url: `${baseUrl}/api/bio?populate=%2A`,
      headers: { ...authHeader() },
    },
    isApiBio
  );

  return apiBioToDomainBio(response.data.attributes);
};

const apiBioToDomainBio = (apiBio: ApiBio): Bio => ({
  part_one: apiBio.part_one,
  part_two: apiBio.part_two,
  principles: apiBio.principles.data.map((apiPrinciple) => ({
    text: apiPrinciple.attributes.text,
  })),
});

const isApiBio = (object: any): object is ApiSingleResponse<ApiBio> =>
  isApiSingleResponse(object) &&
  object.data.attributes.principles?.data !== undefined &&
  Array.isArray(object.data.attributes.principles.data) &&
  object.data.attributes.principles.data.every(isPrinciple) &&
  "part_one" in object.data.attributes &&
  "part_two" in object.data.attributes;

const isPrinciple = (object: any): object is Principle =>
  object.attributes.text !== undefined && object.attributes.text !== null;

/* Utils */
const isApiCollectionResponse = (
  object: any
): object is ApiCollectionResponse<any> =>
  object?.data !== undefined && Array.isArray(object.data);

const isApiSingleResponse = (object: any): object is ApiSingleResponse<any> =>
  object?.data?.attributes !== undefined;

const authHeader = () => ({
  Authorization: `Bearer ${authToken}`,
});
