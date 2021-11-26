export interface Profile {
  details: Details;
  socialLinks: Array<SocialLink>;
  skills: Array<Skill>;
}

export interface Details {
  name: string;
  lastName: string;
  pictureUrl: string;
  resumeUrl: string;
  location: string;
  description: string;
}

export interface Skill {
  name: string;
  orderOfPreference: number;
  url: string;
}

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
}
