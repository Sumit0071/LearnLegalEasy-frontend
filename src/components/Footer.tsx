interface MenuItem {
    title: string;
    links: {
      text: string;
      url: string;
    }[];
  }
  
  interface Footer2Props {
    logo?: {
      url: string;
      src: string;
      alt: string;
      title: string;
    };
    tagline?: string;
    menuItems?: MenuItem[];
    copyright?: string;
    bottomLinks?: {
      text: string;
      url: string;
    }[];
  }
  
  const Footer2 = ({
    logo = {
      src: "https://media-hosting.imagekit.io/21baa5e0aa6140ee/LearnLegalEasy_logo (1).png?Expires=1839871673&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=BhY~dU1xhHiQ~3mAE1u5T3cgZxTE1MjxC~R6mGRwO1ZHSDpIZq1EbM1CXkp1o-dNq4VoN~AQeAlnsZSPSHqguXSotPJ58e~6LX6OZDOMhc52lNtjEWTDTkja011-V4hkmHFuNhE0ryBoyIecxBmAVJe6SYAQ7xsuJVT~5OW~PJ6kpCcv6R8vdH2bKpiMKRYYXFKVhqJ9ydPPt~i9a0jo3Aifq33bMNxS-AiuzULWEAb2HQgD~9XhX-isqv41Rq707sBOsuMTp5oTrf4t3gpMfhgHMkoB07OZ8vCvgLVSfi-GikcH9iHpra0amLchgCDb3bM-fZdXEVhgcHy5yqLwOw__",
      alt: "blocks for shadcn/ui",
      title: "LearnLegalEasy.com",
      url: "https://www.shadcnblocks.com",
    },
    tagline = "Your Guide to Everyday Law",
    menuItems = [
      {
        title: "Product",
        links: [
          { text: "Overview", url: "#" },
          { text: "Pricing", url: "#" },
          { text: "Marketplace", url: "#" },
          { text: "Features", url: "#" },
          { text: "Integrations", url: "#" },
          { text: "Pricing", url: "#" },
        ],
      },
      {
        title: "Company",
        links: [
          { text: "About", url: "#" },
          { text: "Team", url: "#" },
          { text: "Blog", url: "#" },
          { text: "Careers", url: "#" },
          { text: "Contact", url: "#" },
          { text: "Privacy", url: "#" },
        ],
      },
      {
        title: "Resources",
        links: [
          { text: "Help", url: "#" },
          { text: "Sales", url: "#" },
          { text: "Advertise", url: "#" },
        ],
      },
      {
        title: "Social",
        links: [
          { text: "Twitter", url: "#" },
          { text: "Instagram", url: "www.instagram.com/Sonic_blizard" },
          { text: "LinkedIn", url: "#" },
        ],
      },
    ],
    copyright = "© 2025 LearnLegalEasy.com. All rights reserved.",
    bottomLinks = [
      { text: "Terms and Conditions", url: "/terms-conditions" },
      { text: "Privacy Policy", url: "/privacy-policy" },
    ],
  }: Footer2Props) => {
    return (
      <section className="py-32">
        <div className="container">
          <footer>
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
              <div className="col-span-2 mb-8 lg:mb-0">
                <div className="flex items-center gap-2 lg:justify-start">
                  <a href="https://shadcnblocks.com">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      title={logo.title}
                      className="h-10"
                    />
                  </a>
                  <p className="text-xl font-semibold">{logo.title}</p>
                </div>
                <p className="mt-4 font-bold">{tagline}</p>
              </div>
              {menuItems.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h3 className="mb-4 font-bold">{section.title}</h3>
                  <ul className="space-y-4 text-muted-foreground">
                    {section.links.map((link, linkIdx) => (
                      <li
                        key={linkIdx}
                        className="font-medium hover:text-primary"
                      >
                        <a href={link.url}>{link.text}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
              <p>{copyright}</p>
              <ul className="flex gap-4">
                {bottomLinks.map((link, linkIdx) => (
                  <li key={linkIdx} className="underline hover:text-primary">
                    <a href={link.url}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </footer>
        </div>
      </section>
    );
  };
  
  export { Footer2 };
  