import KyndrylCyberDefense from "./vapt/vapt";
import SecurityOperationsHero from "./vapt/vaptHero";
export function VaptContaner() {
  return (
    <div className="bg-bgColor">
      <SecurityOperationsHero />
      <KyndrylCyberDefense />
    </div>
  );
}
