import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import MediaGallery from "@/components/MediaGallery";
import SnakeGame from "@/components/SnakeGame";
import { LinkGroup, ProjectCard } from "@/components/cards";
import mediaOne from "../../Images/Screenshot 2026-04-08 at 16.24.59.png";
import mediaTwo from "../../Images/Screenshot 2026-04-08 at 16.25.22.png";
import mediaThree from "../../Images/Screenshot 2026-04-08 at 16.25.52.png";
import mediaFour from "../../Images/Screenshot 2026-04-08 at 16.27.05.png";
import mediaFive from "../../Images/Screenshot 2026-04-08 at 16.38.28.png";
import mediaSix from "../../Images/Screenshot 2026-04-08 at 16.42.18.png";
import mediaSeven from "../../Images/Screenshot 2026-04-08 at 16.42.29.png";
import mediaEight from "../../Images/Screenshot 2026-04-08 at 16.43.19.png";
import mediaNine from "../../Images/Screenshot 2026-04-08 at 16.44.05.png";
import mediaTen from "../../Images/Screenshot 2026-04-08 at 16.44.48.png";
import mediaEleven from "../../Images/Screenshot 2026-04-08 at 16.45.02.png";
import mediaTwelve from "../../Images/Screenshot 2026-04-08 at 16.46.00.png";
import mediaThirteen from "../../Images/Screenshot 2026-04-08 at 16.46.30.png";
import mediaFourteen from "../../Images/Screenshot 2026-04-08 at 16.47.51.png";
import mediaFifteen from "../../Images/Screenshot 2026-04-08 at 16.48.07.png";
import mediaSixteen from "../../Images/Screenshot 2026-04-08 at 16.49.22.png";
import mediaSeventeen from "../../Images/Screenshot 2026-04-08 at 16.57.11.png";
import mediaEighteen from "../../Images/Screenshot 2026-04-08 at 16.58.08.png";
import mediaNineteen from "../../Images/Screenshot 2026-04-08 at 16.58.56.png";
import mediaTwenty from "../../Images/Screenshot 2026-04-16 at 14.54.09.png";
import mediaTwentyOne from "../../Images/Screenshot 2026-04-16 at 14.54.31.png";

const projects = [
  {
    title: "Lean Scaling Co",
    description:
      "At Lean Scaling Co, I support the digital marketing and content efforts that position the company as a thought leader in scalable growth and operational strategy.\n\nMy work includes writing and developing SEO-driven blog articles that break down key topics such as scalable growth, leadership structure, and operational systems for founders and service-based businesses. I also support the rollout of digital campaigns by managing social media content, preparing posts, and coordinating content schedules.\n\nAlongside content creation, I track campaign performance across digital channels. This involves reviewing how content performs, identifying which topics resonate most with the audience, and making adjustments to improve reach and engagement.",
    impact:
      "In my role, I have taken ownership of content development and execution across blog and social platforms. Over the past 5 months, this has contributed to a steady 12-15% increase in overall social media engagement, while also improving consistency in posting and clarity in messaging across channels.",
    links: [
      { label: "Lean Scaling System", url: "https://www.leanscaling.com/lean-scaling-system" },
      { label: "Instagram", url: "https://www.instagram.com/leanscalingco" },
      { label: "Strategic Ops Blog", url: "https://www.strategicopsinstitute.com/blog" }
    ]
  },
  {
    title: "Sukume",
    description:
      "For Sukume, I worked on developing the website copy, focusing on clearly communicating the company vision, offering, and positioning. The platform brings together elements of technology, creativity, and culture, and the goal of the copy was to make that clear and easy to understand for a broader audience.",
    impact:
      "I led the full website copywriting, helping shape how the business presents itself online. The work made the messaging more clear and aligned across pages, which supported better understanding from both partners and users. I also contributed to broader strategy work across projects in tech, art, and fashion, while maintaining strong working relationships with stakeholders both locally and internationally.",
    links: [{ label: "Visit Sukume", url: "https://sukume.com/" }]
  },
  {
    title: "Botlhale AI (Project Lead at Sukume)",
    description:
      "I worked with Botlhale AI on developing their social media strategy, as well as writing the About page for their website. The focus was on positioning the brand clearly within the AI space, while making their offering accessible and relevant to their target audience.",
    impact:
      "The work helped strengthen their brand positioning and messaging within the AI space. It also supported visibility through industry workshops and conferences, where the brand was able to connect with relevant partners and stakeholders.",
    links: [
      {
        label: "Strategy Deck",
        url: "https://docs.google.com/presentation/d/1arJByUkDiRDEJ02OEFSJctPKShR32NoP/edit"
      },
      {
        label: "About Page",
        url: "https://botlhale.ai/about-us-multilingual-solutions/"
      }
    ]
  },
  {
    title: "Sobae Frozen (Project Lead at Sukume)",
    description:
      "I worked with Sobae Frozen to support their brand positioning and execution across social media platforms. My role focused on aligning their content with their overall business direction, making sure the messaging reflected their product offering and brand identity.",
    impact:
      "Through refining their marketing and content approach, the brand was able to present itself more clearly and consistently online. This helped improve how the business communicates its value to its audience.",
    links: [
      { label: "Instagram", url: "https://www.instagram.com/sobaefrozen/?hl=en" },
      {
        label: "Strategy Presentation",
        url: "https://docs.google.com/presentation/d/1A0nHdS0uIjVgI6z1DBDI_Gd78AW6QehB/edit?usp=drive_link&ouid=118223080494002328923&rtpof=true&sd=true"
      }
    ]
  },
  {
    title: "Moja Love",
    description:
      "At Moja Love, I was part of the team that led social media strategy and content creation across multiple platforms. I personally developed campaign strategies that amplified audience engagement, improved brand visibility, and positioned the network as a leader in relatable, local entertainment.",
    impact:
      "Boosted Instagram and Facebook engagement by 35% in six months. Increased post reach by 40% through data-driven content optimization. Strengthened audience connection with on-air shows, contributing to a 20% increase in program-driven digital interactions.",
    links: [
      { label: "X Profile", url: "https://x.com/mojalovetv" },
      { label: "Instagram", url: "https://www.instagram.com/mojalovetv/" }
    ]
  },
  {
    title: "Sizwe Studios (Pulse & MXF Cultural Festival)",
    description:
      "I’ve worked closely with the Content Director and Producer at Sizwe Studios, where I supported the curation and direction of content for their Pulse segment, as well as the recent MXF Cultural Festival. In both projects, I helped bring different content pieces together into a final product that met the needs of two separate stakeholders. I also worked as an Executive Strategy Director on a number of their projects, in collaboration with and under the guidance of Ngangezwe Khumalo.",
    impact:
      "Delivered structured content outputs that aligned stakeholders, improved production direction, and strengthened the final on-air/digital experience for Pulse and festival programming.",
    links: [
      { label: "Sizwe Studios", url: "https://www.instagram.com/sizwe.studio/" },
      { label: "Pulse", url: "https://www.instagram.com/thisis_pulse/" }
    ]
  },
  {
    title: "Wakanda Food Accelerator",
    description:
      "I developed the corporate identity (CI) guidelines for Wakanda Food Accelerator and led the logo redesign project. While I didn't design the logo myself, I managed the designer and provided strategic direction to ensure the final design aligned with the client's vision and brand objectives.",
    impact:
      "The new logo and CI revitalized Wakanda's brand, giving it a modern, elegant, and visually appealing identity that resonated with its audience. Strengthened the brand's presence across digital platforms, including the website and social media, improving overall digital perception. The CI guidelines clarified the brand's core principles, ensuring consistent application across physical and digital assets. Designed key brand collateral, including stationery, signage, and uniforms, reinforcing a cohesive and professional brand experience.",
    links: [
      {
        label: "Brand Guide PDF",
        url: "https://drive.google.com/file/d/1IsQDkXQjvy4ER0FBWZdv-aAPUslnOKBJ/view?usp=drive_link"
      }
    ]
  },
  {
    title: "Ferdinand Louw Interiors",
    description:
      "I developed the social media strategy and managed the Instagram page from 2023 to 2024. The focus was on building a strong and consistent brand presence from the ground up.",
    impact:
      "I grew the Instagram page from 0 to over 150 followers within the first 3 months through consistent posting and clear positioning. This laid a solid foundation for the brand online presence.",
    links: [
      {
        label: "Instagram",
        url: "https://www.instagram.com/ferdilouw_interiors"
      }
    ]
  }
];

const mediaItems = [
  {
    category: "Campaign work",
    title: "Portfolio image 01",
    helper: "A clear visual showing the quality and direction of my campaign work.",
    previewLabel: "View image",
    image: mediaOne
  },
  {
    category: "Campaign work",
    title: "Portfolio image 02",
    helper: "A campaign and content example used to support brand visibility and engagement.",
    previewLabel: "View image",
    image: mediaTwo
  },
  {
    category: "Campaign work",
    title: "Portfolio image 03",
    helper: "Creative content designed to strengthen brand messaging and audience connection.",
    previewLabel: "View image",
    image: mediaThree
  },
  {
    category: "Campaign work",
    title: "Portfolio image 04",
    helper: "A design and brand support image that reflects clear, professional communication.",
    previewLabel: "View image",
    image: mediaFour
  },
  {
    category: "Campaign work",
    title: "Portfolio image 05",
    helper: "A visual example of how content supports audience engagement and brand trust.",
    previewLabel: "View image",
    image: mediaFive
  },
  {
    category: "Campaign work",
    title: "Portfolio image 06",
    helper: "A visual piece from my work showing strategic content and campaign thinking.",
    previewLabel: "View image",
    image: mediaSix
  },
  {
    category: "Campaign work",
    title: "Portfolio image 07",
    helper: "Brand storytelling and campaign visuals used to make the message clearer.",
    previewLabel: "View image",
    image: mediaSeven
  },
  {
    category: "Campaign work",
    title: "Portfolio image 08",
    helper: "A concise visual example of content that supports business growth and reach.",
    previewLabel: "View image",
    image: mediaEight
  },
  {
    category: "Campaign work",
    title: "Portfolio image 09",
    helper: "Creative and strategic visual work designed to help the brand stand out.",
    previewLabel: "View image",
    image: mediaNine
  },
  {
    category: "Campaign work",
    title: "Portfolio image 10",
    helper: "Content that supports stronger positioning, clear messaging, and campaign momentum.",
    previewLabel: "View image",
    image: mediaTen
  },
  {
    category: "Campaign work",
    title: "Portfolio image 11",
    helper: "A visual example of practical and professional content execution.",
    previewLabel: "View image",
    image: mediaEleven
  },
  {
    category: "Campaign work",
    title: "Portfolio image 12",
    helper: "A social and campaign example showing how marketing ideas are turned into action.",
    previewLabel: "View image",
    image: mediaTwelve
  },
  {
    category: "Campaign work",
    title: "Portfolio image 13",
    helper: "Another example of content created to improve clarity, visibility, and engagement.",
    previewLabel: "View image",
    image: mediaThirteen
  },
  {
    category: "Campaign work",
    title: "Portfolio image 14",
    helper: "A visual supporting my work in brand storytelling and digital growth strategy.",
    previewLabel: "View image",
    image: mediaFourteen
  },
  {
    category: "Campaign work",
    title: "Portfolio image 15",
    helper: "A project image showing how content and campaign ideas are structured for growth.",
    previewLabel: "View image",
    image: mediaFifteen
  },
  {
    category: "Campaign work",
    title: "Portfolio image 16",
    helper: "A sample of the visual work that supports brand consistency and online presence.",
    previewLabel: "View image",
    image: mediaSixteen
  },
  {
    category: "Campaign work",
    title: "Portfolio image 17",
    helper: "A campaign-related image used to show the impact of strong marketing execution.",
    previewLabel: "View image",
    image: mediaSeventeen
  },
  {
    category: "Campaign work",
    title: "Portfolio image 18",
    helper: "A final visual example from my content and growth work.",
    previewLabel: "View image",
    image: mediaEighteen
  },
  {
    category: "Campaign work",
    title: "Portfolio image 19",
    helper: "A portfolio image showing the style, structure, and purpose behind my work.",
    previewLabel: "View image",
    image: mediaNineteen
  },
  {
    category: "Campaign work",
    title: "Portfolio image 20",
    helper: "A final visual from my portfolio that reflects the work I do in marketing and content.",
    previewLabel: "View image",
    image: mediaTwenty
  },
  {
    category: "Campaign work",
    title: "Portfolio image 21",
    helper: "An image from the set that supports the overall story of brand growth and strategy.",
    previewLabel: "View image",
    image: mediaTwentyOne
  }
];

const strengths = [
  "Social media strategy",
  "Content creation",
  "Campaign execution",
  "Analytics and performance tracking"
];

const groupedLinks = [
  {
    title: "Lean Scaling Co",
    links: [
      { label: "Lean Scaling System", url: "https://www.leanscaling.com/lean-scaling-system" },
      { label: "Instagram", url: "https://www.instagram.com/leanscalingco" },
      { label: "Strategic Ops Blog", url: "https://www.strategicopsinstitute.com/blog" }
    ]
  },
  {
    title: "Sukume",
    links: [{ label: "Website", url: "https://sukume.com/" }]
  },
  {
    title: "Botlhale AI",
    links: [
      {
        label: "Strategy Deck",
        url: "https://docs.google.com/presentation/d/1arJByUkDiRDEJ02OEFSJctPKShR32NoP/edit"
      },
      { label: "About Page", url: "https://botlhale.ai/about-us-multilingual-solutions/" }
    ]
  },
  {
    title: "Sobae Frozen",
    links: [
      { label: "Instagram", url: "https://www.instagram.com/sobaefrozen/?hl=en" },
      {
        label: "Presentation",
        url: "https://docs.google.com/presentation/d/1A0nHdS0uIjVgI6z1DBDI_Gd78AW6QehB/edit?usp=drive_link&ouid=118223080494002328923&rtpof=true&sd=true"
      }
    ]
  },
  {
    title: "Moja Love",
    links: [
      { label: "X", url: "https://x.com/mojalovetv" },
      { label: "Instagram", url: "https://www.instagram.com/mojalovetv/" }
    ]
  },
  {
    title: "Sizwe Studios",
    links: [
      { label: "Instagram", url: "https://www.instagram.com/sizwe.studio/" },
      { label: "Pulse", url: "https://www.instagram.com/thisis_pulse/" }
    ]
  },
  {
    title: "Wakanda Food Accelerator",
    links: [
      {
        label: "Brand Guide",
        url: "https://drive.google.com/file/d/1IsQDkXQjvy4ER0FBWZdv-aAPUslnOKBJ/view?usp=drive_link"
      }
    ]
  },
  {
    title: "Ferdinand Louw Interiors",
    links: [{ label: "Instagram", url: "https://www.instagram.com/ferdilouw_interiors" }]
  }
];

const heroStats = [
  { value: "35%", label: "engagement growth" },
  { value: "40%", label: "reach lift" },
  { value: "20%", label: "program interactions" },
  { value: "100%", label: "growth-focused execution" }
];

const designCollateralSegments = [
  {
    title: "Eat Naturale",
    folder: "Eat Naturale",
    images: [
      "PHOTO-2024-04-02-10-06-23.jpg",
      "PHOTO-2024-04-02-10-06-24 2.jpg",
      "PHOTO-2024-04-02-10-06-24.jpg",
      "PHOTO-2024-05-13-16-57-08.jpg",
      "PHOTO-2024-05-15-11-25-25.jpg",
      "PHOTO-2024-05-15-11-25-26 2.jpg",
      "PHOTO-2024-05-15-11-25-26.jpg",
      "PHOTO-2024-06-10-23-24-47.jpg",
      "PHOTO-2024-06-10-23-24-48.jpg"
    ]
  },
  {
    title: "Freelance",
    folder: "Freelance",
    images: [
      "Screenshot 2026-10-02 at 11.17.20.png",
      "Screenshot 2026-10-02 at 11.17.44.png"
    ]
  },
  {
    title: "Lean Scaling Co",
    folder: "Lean Scaling Co",
    images: [
      "Screenshot 2026-10-02 at 12.08.30.png",
      "Screenshot 2026-10-02 at 12.08.42.png",
      "Screenshot 2026-10-02 at 12.09.00.png",
      "Screenshot 2026-10-02 at 12.09.13.png",
      "Screenshot 2026-10-02 at 12.09.27.png"
    ]
  },
  {
    title: "Logos",
    folder: "Logos",
    images: [
      "Screenshot 2026-10-02 at 12.37.05.png",
      "Screenshot 2026-10-02 at 12.37.12.png",
      "Screenshot 2026-10-02 at 12.37.17.png"
    ]
  },
  {
    title: "Reflection",
    folder: "Reflection",
    images: [
      "Screenshot 2026-10-02 at 12.43.56.png",
      "Screenshot 2026-10-02 at 12.44.20.png",
      "Screenshot 2026-10-02 at 12.44.38.png"
    ]
  },
  {
    title: "Sukume",
    folder: "Sukume",
    images: ["Screenshot 2026-10-02 at 12.11.45.png"]
  },
  {
    title: "Wakanda Food Accelerator",
    folder: "Wakanda Food Accelerator",
    images: [
      "Screenshot 2026-10-02 at 12.39.17.png",
      "Screenshot 2026-10-02 at 12.39.41.png",
      "Screenshot 2026-10-02 at 12.39.51.png",
      "Screenshot 2026-10-02 at 12.40.00.png",
      "Screenshot 2026-10-02 at 12.40.12.png",
      "Screenshot 2026-10-02 at 12.40.19.png",
      "Screenshot 2026-10-02 at 12.40.29.png"
    ]
  },
  {
    title: "Botlhale AI",
    folder: "botlhale ai",
    images: [
      "Screenshot 2026-10-02 at 12.22.22.png",
      "Screenshot 2026-10-02 at 12.22.34.png",
      "Screenshot 2026-10-02 at 12.23.24.png"
    ]
  }
];

const getCollateralImageUrl = (folder: string, fileName: string) =>
  `/design-collateral/${encodeURIComponent(folder)}/${encodeURIComponent(fileName)}`;

export default function Home() {
  return (
    <main>
      <header className="sticky top-0 z-50 border-b border-cyan/10 bg-slate-950/80 backdrop-blur-md">
        <nav className="container-page flex items-center justify-between py-4">
          <Link href="#top" className="text-lg font-semibold text-white">
            Vuyisile Phika
          </Link>
          <div className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
            <Link href="#top" className="transition-colors hover:text-cyan">Home</Link>
            <Link href="#projects" className="transition-colors hover:text-cyan">Projects</Link>
            <Link href="#media-content" className="transition-colors hover:text-cyan">Media</Link>
            <Link href="#design-collateral" className="transition-colors hover:text-cyan">Design</Link>
            <Link href="#links" className="transition-colors hover:text-cyan">Links</Link>
            <Link href="#contact" className="transition-colors hover:text-cyan">Contact</Link>
          </div>
        </nav>
      </header>

      <section id="top" className="hero-section border-b border-cyan/10 relative min-h-screen flex items-center">
        <div className="container-page py-24 md:py-32">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-cyan">
                Portfolio
              </p>
              <h1 className="mt-4 max-w-3xl text-5xl md:text-7xl font-bold tracking-tight text-lightText leading-tight">
                <span className="bg-gradient-to-r from-cyan via-purple to-cyan/60 bg-clip-text text-transparent">Vuyisile</span> Phika
              </h1>
              <p className="mt-6 text-xl md:text-2xl font-semibold text-slate-300">
                Growth Marketer &amp; Brand Strategist
              </p>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
                I help brands grow through marketing, business strategy and strong brand positioning. 
                I develop and execute strategies across marketing, digital marketing, 
                content creation and branding, connecting business goals with the right audiences and opportunities. My focus is on building clear, 
                relevant brands while driving stronger visibility, engagement and measurable growth.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold text-slate-200">
                <div className="rounded-full border border-cyan/30 bg-cyan/10 px-4 py-2">
                  <strong className="text-cyan">35%</strong> engagement growth
                </div>
                <div className="rounded-full border border-purple/30 bg-purple/10 px-4 py-2">
                  <strong className="text-purple">40%</strong> reach lift
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  <strong className="text-white">20%</strong> program interactions
                </div>
              </div>
              <Link
                href="#projects"
                className="mt-10 inline-flex items-center rounded-xl bg-gradient-to-r from-cyan to-purple px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-lg active:translate-y-0 uppercase tracking-wide"
              >
                View My Work
              </Link>
            </div>
            <div className="mx-auto w-full max-w-sm">
              <div className="relative rounded-3xl border-2 border-cyan/30 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-3 shadow-2xl backdrop-blur-md hover:border-cyan/60 transition-all duration-500 group">
                <Image
                  src="/vuyisile-phika.png"
                  alt="Vuyisile Phika portrait"
                  width={900}
                  height={1200}
                  className="h-auto w-full rounded-2xl object-cover group-hover:shadow-glow transition-all duration-500"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection className="section-light py-4 md:py-6" id="highlights">
        <div className="container-page">
          <div className="grid gap-4 rounded-[2rem] border border-cyan/10 bg-white/80 p-4 shadow-soft backdrop-blur-md md:grid-cols-2 xl:grid-cols-4 md:p-6">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-gradient-to-br from-slate-50 to-white p-5 text-left ring-1 ring-slate-200/80">
                <p className="text-3xl font-black tracking-tight text-darkText">{stat.value}</p>
                <p className="mt-2 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-light py-20 md:py-24" id="about">
        <div className="container-page">
        <SectionHeading
          eyebrow="About"
          title="Clear strategy, strong content, and focused growth execution"
          description="I work across social media, campaigns, and content systems to help brands communicate better and grow with consistency. My approach combines creative direction with performance tracking."
          tone="light"
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {strengths.map((strength) => (
            <div key={strength} className="rounded-xl border-2 border-cyan/30 bg-gradient-to-br from-cyan/10 to-purple/5 p-6 shadow-lg text-sm font-semibold text-darkText transition-all duration-300 hover:border-cyan/60 hover:shadow-xl hover:-translate-y-1 hover:bg-cyan/15 backdrop-blur-sm">
              {strength}
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan">CV summary</p>
          <p className="mt-4 text-base leading-relaxed text-slate-700 md:text-lg">
            I help brands grow through marketing, business strategy and strong brand positioning. I develop and execute strategies across marketing, digital marketing, content creation and branding, connecting business goals with the right audiences and opportunities. My focus is on building clear, relevant brands while driving stronger visibility, engagement and measurable growth.
          </p>
        </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-dark py-20 md:py-24" id="projects">
        <div className="container-page">
          <SectionHeading
            eyebrow="Main Work"
            title="Projects"
            description="Detailed case studies covering strategy, copy, campaign execution, and measurable impact."
            tone="dark"
          />
          <div className="space-y-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-light py-20 md:py-24" id="media-content">
        <div className="container-page">
        <SectionHeading
          eyebrow="Media"
          title="Media & campaign highlights"
          description="A simple look at the work behind the strategy: campaign visuals, performance snapshots, and brand content created to support growth."
          tone="light"
        />
        <MediaGallery items={mediaItems} />
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-light py-20 md:py-24" id="design-collateral">
        <div className="container-page">
          <SectionHeading
            eyebrow="Design collateral"
            title="Segmented creative work"
            description="Selected visuals and deliverables grouped by project, brand, and campaign work so each body of work can be reviewed clearly."
            tone="light"
          />

          <div className="space-y-8">
            {designCollateralSegments.map((segment) => (
              <div key={segment.title} className="rounded-[2rem] border border-slate-200 bg-white/80 p-4 shadow-soft md:p-6">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <h3 className="text-2xl font-bold text-darkText">{segment.title}</h3>
                  <span className="rounded-full border border-cyan/30 bg-cyan/5 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-cyan">
                    {segment.images.length} images
                  </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {segment.images.map((imageName) => (
                    <div key={`${segment.title}-${imageName}`} className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
                      <div className="relative h-72 w-full overflow-hidden bg-slate-100">
                        <Image
                          src={getCollateralImageUrl(segment.folder, imageName)}
                          alt={`${segment.title} ${imageName}`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                          className="object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-light py-20 md:py-24" id="arcade">
        <div className="container-page">
          <SectionHeading
            eyebrow="Play"
            title="A quick break for anyone reviewing the portfolio"
            description="This portfolio is built to feel strategic and polished, but it also keeps a little personality built in. Take a moment and play a quick round of Snake while you browse."
            tone="light"
          />
          <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-5">
              <div className="rounded-3xl border border-cyan/20 bg-gradient-to-br from-cyan/5 to-purple/5 p-6 shadow-soft">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan">Why it works</p>
                <ul className="mt-4 space-y-3 text-base text-darkText">
                  <li>• Builds a memorable, high-end brand impression.</li>
                  <li>• Keeps the core CV story visible and intact.</li>
                  <li>• Adds interactive personality without distracting from the work.</li>
                </ul>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-purple">Profile strengths</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {strengths.map((strength) => (
                    <span key={strength} className="rounded-full border border-cyan/20 bg-cyan/5 px-3 py-2 text-sm font-medium text-darkText">
                      {strength}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <SnakeGame />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-light py-20 md:py-24" id="links">
        <div className="container-page">
          <SectionHeading
            eyebrow="Access"
            title="Project Links"
            description="All relevant links grouped by project for quick access."
            tone="light"
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {groupedLinks.map((group) => (
              <LinkGroup key={group.title} {...group} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-light py-20 md:py-24" id="contact">
        <div className="container-page">
        <div className="group relative rounded-3xl bg-gradient-to-br from-white/98 to-white/95 p-8 shadow-xl md:p-12 overflow-hidden transition-all duration-500 hover:shadow-2xl">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan/20 via-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="relative z-10">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-cyan">Contact</p>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-darkText">
              Let&apos;s work together
            </h2>
            <p className="mt-4 max-w-2xl text-muted">
              If you are looking for growth-focused content, clear messaging, and practical campaign
              strategy, I&apos;d love to hear about your goals.
            </p>
            <div className="mt-8 flex flex-col gap-4 text-sm">
              <a className="inline-flex items-center text-darkText font-semibold transition-all duration-300 hover:text-cyan group/link" href="mailto:vuyisilephika3@gmail.com">
                <span className="inline-block w-2 h-2 bg-cyan rounded-full mr-3 group-hover/link:shadow-glow transition-all"></span>
                vuyisilephika3@gmail.com
              </a>
              <a
                className="inline-flex items-center text-darkText font-semibold transition-all duration-300 hover:text-cyan group/link"
                href="https://www.linkedin.com/in/vuyisile-phika-154b46159/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="inline-block w-2 h-2 bg-cyan rounded-full mr-3 group-hover/link:shadow-glow transition-all"></span>
                linkedin.com/in/vuyisilephika
              </a>
            </div>
          </div>
        </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
