import { ArrowRight } from "lucide-react";
import DevProjectScreen from "../development/devProjectScreen";
import ForestHerbs from "../../assets/forestHearbs.mp4";
import Falahzar from "../../assets/falahzar.mp4";

// Reusable section component
interface ProjectSectionProps {
  title: string;
  description: string;
  videoSrc: string;
  reverse?: boolean;
  href?: string;
  directProjectLink?: string;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({
  title,
  description,
  videoSrc,
  reverse = false,
  href,
  directProjectLink,
}) => {
  return (
    <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
      {/* Conditionally render video/text based on `reverse` */}
      {reverse ? (
        <>
          {/* Video first on left */}
          <div className="flex items-center justify-center order-1 lg:order-1">
            <div className="w-full max-w-xl relative shadow-xl">
              <DevProjectScreen src={videoSrc} />
            </div>
          </div>
          {/* Text second on right */}
          <div className="flex flex-col justify-center order-2 lg:order-2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 font-sans">
              {title}
            </h1>
            <p className="text-gray-300 mb-8 text-base md:text-lg font-sans">
              {description}
            </p>
            <div>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-white hover:text-gray-300 transition-colors border-b border-white hover:border-gray-300 pb-1 group font-sans"
              >
                {directProjectLink}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Text first on left */}
          <div className="flex flex-col justify-center order-1 lg:order-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
              {title}
            </h1>
            <p className="text-gray-300 mb-8 text-base md:text-lg font-sans">
              {description}
            </p>
            <div>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-white font-sans hover:text-gray-300 transition-colors border-b border-white hover:border-gray-300 pb-1 group"
              >
                {directProjectLink}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          {/* Video second on right */}
          <div className="flex items-center justify-center order-2 lg:order-2">
            <div className="w-full max-w-xl relative shadow-xl">
              <DevProjectScreen src={videoSrc} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const ProjectsContaner = () => {
  return (
    <div className="min-h-screen bg-bgColor flex flex-col items-center justify-center px-4 md:px-8 py-16 space-y-16">
      <ProjectSection
        title="Interactive demo app development of Forest Herbs"
        description="A herbal skincare and haircare brand. We developed an interactive demo app to showcase their natural products using a modern, secure web interface, highlighting their organic approach and product range."
        videoSrc={ForestHerbs}
        reverse={false} // text left, video right
        href="https://theforestherbs.com/"
        directProjectLink="Forest Herbs"
      />

      <ProjectSection
        title="Explore Falahzar"
        description="A modern eCommerce clothing brand. We built a sleek, user-friendly online store showcasing their premium fashion collections with seamless shopping and mobile-first design."
        videoSrc={Falahzar}
        reverse={true}
        href="https://falahzar.com/"
        directProjectLink="Falahzar"
      />

<ProjectSection
        title="Another awesome project"
        description="Here's another cool description about a different project. Highlighting how the app or website tackled unique challenges and brought results."
        videoSrc={Falahzar}
        reverse={false}
        href="https://falahzar.com/"
      />
    </div>
  );
};

export default ProjectsContaner;
