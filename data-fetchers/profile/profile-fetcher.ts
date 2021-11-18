import { Profile } from "../../types/types";

export const fetchProfile = async (): Promise<Profile> => {
  const res = await fetch("http://localhost:8080/profile");
  return await res.json();
};
