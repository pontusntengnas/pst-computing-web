import { Profile } from "./types";

export const fetchProfile = async (): Promise<Profile> => {
  const res = await fetch(`${process.env.ABOUT_API_URL}/profile`);
  return await res.json();
};
