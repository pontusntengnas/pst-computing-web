import { Profile } from "./types";

export const fetchProfile = async (): Promise<Profile> => {
  // since the api is not yet published a hardcoded profile is returned.
  return Promise.resolve(profile);

  // const res = await fetch(`${process.env.ABOUT_API_URL}/profile`);
  // return await res.json();
};

const profile: Profile = {
  details: {
    name: "Pontus",
    lastName: "Schuster Tengnäs",
    location: "Gothenburg, Sweden",
    description:
      "Flexible full-stack developer with a primary focus on .NET and web development.",
    pictureUrl: "",
    resumeUrl: "",
  },
  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/pontus-schuster-tengnas",
      icon: "",
    },
    {
      name: "GitHub",
      url: "https://github.com/pontusntengnas",
      icon: "",
    },
    {
      name: "StackOverflow",
      url: "https://stackoverflow.com/users/8639272/pontusnt",
      icon: "",
    },
    {
      name: "Apple App Store",
      url: "https://itunes.apple.com/se/developer/pontus-nilsson-tengnas/id1356267707",
      icon: "",
    },
  ],
  skills: [
    {
      name: "Swift",
      orderOfPreference: 2,
      url: "",
    },
    {
      name: "iOS",
      orderOfPreference: 2,
      url: "",
    },
    {
      name: "Android",
      orderOfPreference: 3,
      url: "",
    },
    {
      name: "Xamarin.Forms",
      orderOfPreference: 2,
      url: "",
    },
    {
      name: "C#",
      orderOfPreference: 1,
      url: "",
    },
    {
      name: ".NET",
      orderOfPreference: 1,
      url: "",
    },
    {
      name: "Node.js",
      orderOfPreference: 1,
      url: "",
    },
    {
      name: "GraphQL",
      orderOfPreference: 2,
      url: "",
    },
    {
      name: "JavaScript",
      orderOfPreference: 2,
      url: "",
    },
    {
      name: "TypeScript",
      orderOfPreference: 1,
      url: "",
    },
    {
      name: "SQL",
      orderOfPreference: 2,
      url: "",
    },
    {
      name: "HTML",
      orderOfPreference: 2,
      url: "",
    },
    {
      name: "CSS",
      orderOfPreference: 2,
      url: "",
    },
    {
      name: "Golang",
      orderOfPreference: 1,
      url: "",
    },
    {
      name: "Git",
      orderOfPreference: 2,
      url: "",
    },
    {
      name: "Unit testing",
      orderOfPreference: 1,
      url: "",
    },
    {
      name: "UI testing",
      orderOfPreference: 2,
      url: "",
    },
    {
      name: "Docker",
      orderOfPreference: 1,
      url: "",
    },
    {
      name: "React JS",
      orderOfPreference: 1,
      url: "",
    },
    {
      name: "CI/CD",
      orderOfPreference: 1,
      url: "",
    },
  ],
};
