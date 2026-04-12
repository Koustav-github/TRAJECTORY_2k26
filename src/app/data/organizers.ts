export interface OrganizerCategory {
  id: number;
  title: string;
  tagline: string;
  members: {
    name: string;
    role: string;
    linkedin: string;
    image: string;
    year?: string;
  }[];
}

export const organizerCategories: OrganizerCategory[] = [
  {
    id: 1,
    title: "General Convenor",
    tagline: "Leading the charge",
    members: [
      { name: "Samriddha", role: "General Convenor", image: "/organizers/samriddha.webp", linkedin: "#" },
      { name: "Ritam Hazra", role: "General Convenor", image: "/organizers/ritam.webp", linkedin: "#" },
    ],
  },
  {
    id: 2,
    title: "Finance Convenor",
    tagline: "Managing the resources",
    members: [
      { name: "Anirban Sarkar", role: "Finance Head", image: "/organizers/unknown.webp", linkedin: "#" },
      { name: "Satyam Roy", role: "Finance Co-Head", image: "/organizers/unknown.webp", linkedin: "#" },
    ],
  },
  {
    id: 3,
    title: "Tech Team",
    tagline: "Building the backbone",
    members: [
      { name: "Shraman Banerjee", role: "Tech Lead", image: "/organizers/shraman.webp", linkedin: "https://www.linkedin.com/in/shraman-banerjee-385200303?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
      { name: "Koustav Manna", role: "Tech Co-Lead", image: "/organizers/koustav.webp", linkedin: "https://www.linkedin.com/in/koustav-manna-b6a64330b/" },
    ],
  },
  {
    id: 4,
    title: "Sponsorship Team",
    tagline: "Fueling the mission",
    members: [
      { name: "Naman Roy", role: "Sponsorship Lead", image: "/organizers/unknown.webp", linkedin: "#" },
      { name: "Nabyendu", role: "Sponsorship Co-Lead", image: "/organizers/nabyendu.webp", linkedin: "#" },
    ],
  },
  {
    id: 5,
    title: "Logistics Team",
    tagline: "Orchestrating the ops",
    members: [
      { name: "Anirudh", role: "Logistics Lead", image: "/organizers/unknown.webp", linkedin: "#" },
      { name: "Debkumar", role: "Logistics Co-Lead", image: "/organizers/debkumar.webp", linkedin: "#" },
    ],
  },
  {
    id: 6,
    title: "PR Team",
    tagline: "Amplifying the voice",
    members: [
      { name: "Archit Maity", role: "PR Lead", image: "/organizers/archit.webp", linkedin: "#" },
      { name: "Diptam", role: "PR Co-Lead", image: "/organizers/unknown.webp", linkedin: "#" },
    ],
  },
  {
    id: 7,
    title: "Events Coordinator",
    tagline: "Curating the experience",
    members: [
      { name: "Mainak", role: "Events Lead", image: "/organizers/mainak.webp", linkedin: "#" },
      { name: "Charan", role: "Events Co-Lead", image: "/organizers/unknown.webp", linkedin: "#" },
    ],
  },
  {
    id: 8,
    title: "Content Team",
    tagline: "Crafting the narrative",
    members: [
      { name: "Neelavra Das", role: "Content Lead", image: "/organizers/neelavra.webp", linkedin: "#" },
      { name: "Ashis", role: "Content Co-Lead", image: "/organizers/ashis.webp", linkedin: "#" },
    ],
  },
];
