import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import ManPower from "../../icons/manpower";
import DevDoodle from "../../icons/developerDoodle";
// import { TypewriterEffectSmoothDemo } from "../../components/carousel/TypeWritterAnimation";
// import TypingEffect from "../OurSolution/OurServiceTextAnimation";

gsap.registerPlugin(ScrollTrigger);

export default function OurService() {
  const component = useRef<HTMLDivElement | null>(null);
  const slider = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".panel") as HTMLElement[];
      if (slider.current) {
        gsap.to(panels, {
          xPercent: -100 * (panels.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: slider.current,
            pin: true,
            scrub: 1,
            snap: 1 / (panels.length - 1),
            end: () => "+=" + slider.current!.offsetWidth,
            markers: false, // Set to false in production
          },
        });
      }
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <div className="App overflow-hidden" ref={component}>
      <div className="flex flex-col justify-center items-center bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 h-[100px] animate-text">
        <h1 className="text-3xl font-bold mb-4 text-black">Our Services</h1>
      </div>
      <div ref={slider} className="flex w-[600vw] h-screen flex-wrap">
        <div className="panel w-screen h-screen bg-white text-black flex items-center justify-center p-12">
          <div className="flex rounded-lg border-spacing-1">
            <div className="flex flex-row gap-10">
              {/* <div className="flex items-center justify-center">
                <TypingEffect />
              </div> */}
              <div className="flex">
                <DevDoodle className="h-[500px] w-[500px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="panel w-screen h-screen bg-red-500 text-white flex items-center justify-center">
          Empower your career with our specialized software training in the
          ever-evolving landscape
          <ManPower height={700} width={700} />
        </div>
        <div className="panel w-screen h-screen bg-orange-500 text-white flex items-center justify-center">
          Empower your career with our specialized software training in the
          ever-evolving landscape
        </div>
        <div className="panel w-screen h-screen bg-purple-500 text-white flex items-center justify-center">
          Elevate your online presence with our expert social media management
        </div>
      </div>
      <div className="flex h-screen bg-yellow-500 items-center justify-center">
        <p className="text-lg">Last Container</p>
      </div>
    </div>
  );
}
