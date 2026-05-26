export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  year: string;
  description: string;
  coverImage: string;
  slides: string[];
}

export interface PortfolioCategory {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string | null;
  projects: PortfolioProject[];
}

export const portfolioCategories: PortfolioCategory[] = [
  {
    id: 1,
    slug: "entertainment",
    title: "Entertainment decks",
    description:
      "Pitch materials for film, television, documentaries, and production companies — built to communicate story, tone, character, world, and market opportunity.",
    image: null,
    projects: [
      {
        id: "ent-1",
        title: "Prestige Drama Television Series",
        client: "Producer",
        year: "2026",
        description: "Sample pages from a visually immersive, period-specific pitch deck for a prestige drama television series that pulls back the curtain behind the daytime soap opera craze of the 1980s.",
        coverImage: "/images/exec-page1.png",
        slides: [
          "/images/exec-page1.png",
          "/images/exec-page2.png",
          "/images/exec-page3.png",
          "/images/exec-page4.png",
          "/images/exec-page5.png",
          "/images/exec-page8.png",
          "/images/exec-page9.png",
        ],
      },
      {
        id: "ent-2",
        title: "Prestige Sports Documentary Feature",
        client: "Production Company",
        year: "2023",
        description: "Sample pages from a deck for a prestige documentary feature film that I designed and wrote the copy for. It was used to pitch to a high-profile production company that became Executive Producers on the film. Ultimately, the film was accepted into the Venice Film Festival and sold for global distribution. The title page showcases intricate Photoshopping, blending two images to create a core image for the film. The contact and closing pages are omitted for confidentiality. Design work was done in InDesign and Photoshop.",
        coverImage: "/images/furyandthemonster-page1.png",
        slides: [
          "/images/furyandthemonster-page1.png",
          "/images/furyandthemonster-page2.png",
          "/images/furyandthemonster-page3.png",
          "/images/furyandthemonster-page4.png",
          "/images/furyandthemonster-page5.png",
          "/images/furyandthemonster-page6.png",
          "/images/furyandthemonster-page7.png",
          "/images/furyandthemonster-page8.png",
          "/images/furyandthemonster-page9.png",
          "/images/furyandthemonster-page10.png",
          "/images/furyandthemonster-page11.png",
          "/images/furyandthemonster-page12.png",
          "/images/furyandthemonster-page13.png",
          "/images/furyandthemonster-page14.png",
          "/images/furyandthemonster-page15.png",
          "/images/furyandthemonster-page16.png",
          "/images/furyandthemonster-page17.png",
          "/images/furyandthemonster-page18.png",
          "/images/furyandthemonster-page19.png",
          "/images/furyandthemonster-page20.png",
          "/images/furyandthemonster-page21.png",
          "/images/furyandthemonster-page22.png",
          "/images/furyandthemonster-page23.png",
        ],
      },
      {
        id: "ent-3",
        title: "Animated Holiday Feature Film",
        client: "Animation Studio",
        year: "2023",
        description: "Sample pages from a pitch deck for an animated holiday feature film that I designed and wrote the copy for. This deck was shared with studios after pitching to them (a leave-behind deck); I also created a similar, more visual version of the deck to aid with the pitch itself. This was a fun deck to craft with the welcome challenge of incorporating the storybook aesthetic with the character drawings and storyboards. Photoshop and InDesign were heavily used to create the effects seen throughout, including the title page.",
        coverImage: "/images/escapefromthenorthpole-page1.png",
        slides: [
          "/images/escapefromthenorthpole-page1.png",
          "/images/escapefromthenorthpole-page2.png",
          "/images/escapefromthenorthpole-page5.png",
          "/images/escapefromthenorthpole-page6.png",
          "/images/escapefromthenorthpole-page7.png",
          "/images/escapefromthenorthpole-page8.png",
          "/images/escapefromthenorthpole-page16.png",
          "/images/escapefromthenorthpole-page17.png",
          "/images/escapefromthenorthpole-page19.png",
          "/images/escapefromthenorthpole-page20.png",
          "/images/escapefromthenorthpole-page21.png",
          "/images/escapefromthenorthpole-page23.png",
          "/images/escapefromthenorthpole-page24.png",
          "/images/escapefromthenorthpole-page25.png",
          "/images/escapefromthenorthpole-page28.png",
          "/images/escapefromthenorthpole-page29.png",
          "/images/escapefromthenorthpole-page31.png",
          "/images/escapefromthenorthpole-page33.png",
        ],
      },
      {
        id: "ent-4",
        title: "YA Sci-Fi Television Series",
        client: "Production Company",
        year: "2022",
        description: "Sample pages from a series bible for a young adult TV series that I designed and wrote the copy for. This deck was shared with studios after pitching to them (a leave-behind deck); I also created a similar, more visual version of the deck to aid with the pitch itself. This deck showcases heavy use of Photoshop and InDesign to create the nostalgic college yearbook aesthetic.",
        coverImage: "/images/ctrlaltdel-page1.png",
        slides: [
          "/images/ctrlaltdel-page1.png",
          "/images/ctrlaltdel-page2.png",
          "/images/ctrlaltdel-page3.png",
          "/images/ctrlaltdel-page4.png",
          "/images/ctrlaltdel-page5.png",
          "/images/ctrlaltdel-page6.png",
          "/images/ctrlaltdel-page7.png",
          "/images/ctrlaltdel-page8.png",
          "/images/ctrlaltdel-page9.png",
          "/images/ctrlaltdel-page10.png",
          "/images/ctrlaltdel-page11.png",
          "/images/ctrlaltdel-page12.png",
          "/images/ctrlaltdel-page13.png",
          "/images/ctrlaltdel-page14.png",
          "/images/ctrlaltdel-page15.png",
          "/images/ctrlaltdel-page16.png",
        ],
      },
    ],
  },
  {
    id: 2,
    slug: "investor",
    title: "Investor & Brand",
    description:
      "Strategic presentations for startups, brands, and enterprise clients — designed to simplify complexity, build confidence, and inspire action.",
    image: "/images/polarized-page1.png",
    projects: [
      {
        id: "inv-1",
        title: "Music Festival Technology Pitch",
        client: "Tech Startup",
        year: "2026",
        description: "Sample pages from a bold investor deck for a cutting-edge music festival technology that dips the user into an exclusive, polarized world. I crafted the visual landscape from scratch and closely collaborated with the client on crafting the copy. This deck was created both for static sharing via email and immersive live presentation with video slides.",
        coverImage: "/images/polarized-page1.png",
        slides: [
          "/images/polarized-page1.png",
          "/images/polarized-video1.mp4",
          "/images/polarized-page2.png",
          "/images/polarized-page3.png",
          "/images/polarized-page4.png",
          "/images/polarized-page5.png",
          "/images/polarized-page6.png",
          "/images/polarized-video2.mp4",
          "/images/polarized-page7.png",
          "/images/polarized-page8.png",
        ],
      },
      {
        id: "inv-2",
        title: "Commercial Campaign Pitch",
        client: "JPMorgan Chase",
        year: "2026",
        description: "Sample pages from a high-stakes pitch deck for a cross-format JPMorgan Chase advertising campaign. This project needed to balance the professional polish of JPMorgan Chase's brand with an original artistic metaphor that showcases their ability to see patterns missed by their competitors.",
        coverImage: "/images/powerofresearch-page1.png",
        slides: [
          "/images/powerofresearch-page1.png",
          "/images/powerofresearch-page2.png",
          "/images/powerofresearch-page3.png",
          "/images/powerofresearch-page4.png",
          "/images/powerofresearch-page5.png",
          "/images/powerofresearch-page6.png",
          "/images/powerofresearch-page7.png",
          "/images/powerofresearch-page8.png",
          "/images/powerofresearch-page9.png",
          "/images/powerofresearch-page10.png",
          "/images/powerofresearch-page11.png",
          "/images/powerofresearch-video1.mp4",
          "/images/powerofresearch-page13.png",
          "/images/powerofresearch-page14.png",
          "/images/powerofresearch-page15.png",
          "/images/powerofresearch-page16.png",
          "/images/powerofresearch-page17.png",
        ],
      },
    ],
  },
  {
    id: 3,
    slug: "commercial",
    title: "Commercial treatments",
    description:
      "Director's treatments, branded content decks, campaign concepts, and visual presentations that help a creative idea feel specific, premium, and executable.",
    image: null,
    projects: [
      {
        id: "com-1",
        title: "Global Brand Campaign",
        client: "Fashion House",
        year: "2024",
        description: "A director's treatment for a global fashion campaign, balancing artistic vision with commercial objectives.",
        coverImage: "/placeholder.svg?height=720&width=1280",
        slides: [
          "/placeholder.svg?height=720&width=1280",
          "/placeholder.svg?height=720&width=1280",
          "/placeholder.svg?height=720&width=1280",
        ],
      },
      {
        id: "com-2",
        title: "Product Launch",
        client: "Consumer Electronics",
        year: "2024",
        description: "Campaign concept deck for a major product launch, designed to align creative teams and stakeholders.",
        coverImage: "/placeholder.svg?height=720&width=1280",
        slides: [
          "/placeholder.svg?height=720&width=1280",
          "/placeholder.svg?height=720&width=1280",
        ],
      },
      {
        id: "com-3",
        title: "Branded Content Series",
        client: "Automotive Brand",
        year: "2023",
        description: "A treatment deck for a branded content series, weaving brand storytelling into compelling narrative.",
        coverImage: "/placeholder.svg?height=720&width=1280",
        slides: [
          "/placeholder.svg?height=720&width=1280",
          "/placeholder.svg?height=720&width=1280",
          "/placeholder.svg?height=720&width=1280",
        ],
      },
    ],
  },
];

export function getCategoryBySlug(slug: string): PortfolioCategory | undefined {
  return portfolioCategories.find((cat) => cat.slug === slug);
}

export function getProjectById(categorySlug: string, projectId: string): PortfolioProject | undefined {
  const category = getCategoryBySlug(categorySlug);
  return category?.projects.find((p) => p.id === projectId);
}
