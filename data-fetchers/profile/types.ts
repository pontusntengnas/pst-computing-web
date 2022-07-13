export interface Profile {
  name: string;
  lastName: string;
  role: string;
  location: string;
  description: string;
  email: string;
  phone: string;
}

export interface Skill {
  name: string;
  orderOfPreference: number;
  url: string;
}

export interface SocialLink {
  name: string;
  icon: string | null;
  url: string;
}

export interface Principle {
  text: string;
}

export interface Bio {
  part_one: string;
  part_two: string;
  principles: Array<Principle>;
}
