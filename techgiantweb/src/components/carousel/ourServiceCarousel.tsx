import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import ManPower from "../../icons/manpower"

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
            markers: true,
          },
        });
      }
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <div className="App overflow-hidden" ref={component}>
      <div className="flex flex-col justify-center items-center  bg-black">
        <h1 className="text-3xl font-bold mb-4 text-white text-wrap">Testing horizontal scrolling w/ three sections</h1>
        <h2 className="text-xl">First Container</h2>
      </div>
      <div ref={slider} className="flex w-[600vw] h-screen flex-wrap">
        <div className="panel w-screen h-screen bg-blue-500 text-white flex items-center justify-center">
          <div>
            SCROLL DOWN
            Elevate your digital presence with our tailored software development services.
            <div className="scroll-down mt-4">
              <div className="arrow w-6 h-6 bg-white"></div>
            </div>
          </div>
        </div>
        <div className="panel w-screen h-screen bg-red-500 text-white flex items-center justify-center" id="panel">
          
        Empower your career with our specialized software training in the ever evolving landscape
        <ManPower height={700} width={700}/>
        </div>
        <div className="panel w-screen h-screen bg-orange-500 text-white flex items-center justify-center" id="panel">
        Empower your career with our specialized software training in the ever evolving landscape
        </div>
        <div className="panel w-screen h-screen bg-purple-500 text-white flex items-center justify-center" id="panel">
        Elevate your online presence with our expert social media management
        </div>
      </div>
      <div className="flex h-screen bg-yellow-500 items-center justify-center">
        <p className="text-lg">Last Container</p>
      </div>
    </div>
  );
}
