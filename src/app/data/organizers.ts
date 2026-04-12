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
    title: "General Convenors",
    tagline: "Leading the charge",
    members: [
      { name: "Samriddha", role: "General Convenor", image: "/organizers/samriddha.webp", linkedin: "https://www.linkedin.com/in/samriddha-chakraborty-781139256/" },
      { name: "Ritam Hazra", role: "General Convenor", image: "/organizers/ritam.webp", linkedin: "https://www.linkedin.com/in/ritam-hazra-03654a2a5/" },
    ],
  },
  {
    id: 2,
    title: "On-Day Convenor",
    tagline: "Steering the vision",
    members: [
      { name: "Anshuman Singh", role: "On-Day Convenor", image: "/organizers/unknown.webp", linkedin: "https://www.linkedin.com/in/anshuman-singh-7b392a291/" },
    ],
  },
  {
    id: 3,
    title: "Finance Convenors",
    tagline: "Managing the resources",
    members: [
      { name: "Anirban Sarkar", role: "Finance Convenor", image: "/organizers/anirban.webp", linkedin: "https://www.linkedin.com/in/anirban-sarkar-89b3ab201/" },
      { name: "Satyam Roy", role: "Finance Convenor", image: "/organizers/unknown.webp", linkedin: "" },
    ],
  },
  {
    id: 4,
    title: "Events Coordinator",
    tagline: "Curating the experience",
    members: [
      { name: "Mainak", role: "Events Coordinator", image: "/organizers/mainak.webp", linkedin: "#" },
      { name: "Shayan Charan", role: "Events Coordinator", image: "/organizers/shayan.webp", linkedin: "#" },
    ],
  },
  {
    id: 5,
    title: "Sponsorship Leads",
    tagline: "Fueling the mission",
    members: [
      { name: "Naman Roy", role: "Sponsorship Lead", image: "/organizers/unknown.webp", linkedin: "" },
      { name: "Nabyendu Das", role: "Sponsorship Lead", image: "/organizers/nabyendu.webp", linkedin: "https://www.linkedin.com/in/nabyendu-das-596b45266/" },
    ],
  },
  {
    id: 6,
    title: "Tech Leads",
    tagline: "Building the backbone",
    members: [
      { name: "Shraman Banerjee", role: "Tech Lead", image: "/organizers/shraman.webp", linkedin: "https://www.linkedin.com/in/shraman-banerjee-385200303" },
      { name: "Koustav Manna", role: "Tech Lead", image: "/organizers/koustav.webp", linkedin: "https://www.linkedin.com/in/koustav-manna-b6a64330b/" },
    ],
  },
  {
    id: 7,
    title: "Logistics Leads",
    tagline: "Orchestrating the ops",
    members: [
      { name: "Sampad Chanda", role: "Logistics Lead", image: "/organizers/unknown.webp", linkedin: "https://www.linkedin.com/in/sampad-chanda-4300512b9/" },
      { name: "Debkumar", role: "Logistics Lead", image: "/organizers/debkumar.webp", linkedin: "#" },
    ],
  },
  {
    id: 8,
    title: "PR Leads",
    tagline: "Amplifying the voice",
    members: [
      { name: "Archit Maiti", role: "PR Lead", image: "/organizers/archit.webp", linkedin: "https://www.linkedin.com/in/archit-maiti-580b81280/" },
      { name: "Anirudh", role: "PR Lead", image: "/organizers/unknown.webp", linkedin: "#" },
    ],
  },
  {
    id: 9,
    title: "Content Leads",
    tagline: "Crafting the narrative",
    members: [
      { name: "Neelavra Das", role: "Content Lead", image: "/organizers/neelavra.webp", linkedin: "https://www.linkedin.com/in/neelavra-das-3657a731b/" },
      { name: "Arkabrata Das", role: "Content Lead", image: "/organizers/unknown.webp", linkedin: "https://www.linkedin.com/in/arkabrata-das-23b784289/" },
      { name: "Ashis", role: "Content Lead", image: "/organizers/ashis.webp", linkedin: "#" },
    ],
  },
  {
    id: 10,
    title: "Srijan Helper",
    tagline: "Supporting the cause",
    members: [
      { name: "Rishi Sanyal", role: "Sriajn Helper", image: "/organizers/unknown.webp", linkedin: "https://www.linkedin.com/in/rishi-sanyal-881b3a33a/" },
    ],
  },
];
