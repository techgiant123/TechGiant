import DevelopmentHero from "./developmentHero";
import DevServices from "./devService";
import WDP from "./WDP";
import SupportDev  from "./supportDev";
import ProjectsContaner from "./projectsContaner";


export function DevContaner() {
  return (
    <div className="bg-bgColor">
      <DevelopmentHero />
      <DevServices />
      <WDP />
      <SupportDev/>
      <ProjectsContaner />
    </div>
  );
}
