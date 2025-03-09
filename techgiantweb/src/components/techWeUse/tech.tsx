import React from "react";

interface TechnologyLogo {
  name: string;
  logoUrl: string;
  alt: string;
}

const TechnologiesWeUse: React.FC = () => {
  const technologies: TechnologyLogo[] = [
    {
      name: "MySQL",
      logoUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      alt: "MySQL logo",
    },
    {
      name: "PHP",
      logoUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      alt: "PHP logo",
    },
    {
      name: "Shopify",
      logoUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg",
      alt: "Shopify logo",
    },
    {
      name: "WordPress",
      logoUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
      alt: "WordPress logo",
    },
    {
      name: "CSS3",
      logoUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      alt: "CSS3 logo",
    },
    {
      name: "HTML5",
      logoUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      alt: "HTML5 logo",
    },
  ];

  return (
    <div className="w-full py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-light text-center text-orange-400 mb-12">
          Technologies We Use
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="w-20 h-20 flex items-center justify-center"
            >
              <img
                src={tech.logoUrl}
                alt={tech.alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologiesWeUse;
