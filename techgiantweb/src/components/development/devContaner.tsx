import DevelopmentHero from "./developmentHero";
import DevServices from "./devService";
import WDP from "./WDP";

export function DevContaner() {
  return (
    <div className="bg-bgColor">
      <DevelopmentHero />
      <DevServices />
      <WDP />
    </div>
  );
}
