import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !leftRef.current || !rightRef.current) return;

    let ctx = gsap.context(() => {
      gsap.set([leftRef.current, rightRef.current], { opacity: 1 }); // Ensure elements are visible before animation

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none none",
        },
      });

      tl.from(leftRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      }).from(
        rightRef.current,
        { x: 100, opacity: 0, duration: 1, ease: "power3.out" },
        "-=0.5"
      );

      ScrollTrigger.refresh(); // Ensures correct trigger points
    });

    return () => ctx.revert(); // Cleanup on component unmount
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-bgColor text-white py-12 px-6 md:px-20 flex flex-col md:flex-row items-center mt-[50px] mb-[50px]"
    >
      {/* Left Section */}
      <div ref={leftRef} className="md:w-1/2">
        <h4 className="text-white font-semibold">Features of Our Courses</h4>
        <h2 className="text-3xl font-bold text-white mt-2">Why Choose Us?</h2>
        <ul className="mt-4 text-white space-y-2">
          <li>✅ Expert-led training that bridges theory and practice.</li>
          <li>
            ✅ Proven track record of successful placements in the software
            testing industry.
          </li>
          <li>✅ Unparalleled expertise in software training in Hyderabad.</li>
        </ul>
      </div>

      {/* Right Section */}
      <div
        ref={rightRef}
        className="md:w-1/2 mt-8 md:mt-0 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="flex items-start space-x-4">
          <span className="text-2xl">👑</span>
          <div>
            <h3 className="font-bold text-white">Best Industry Leaders</h3>
            <p className="text-white text-sm">
              Learn from the best industry leaders in software testing in
              Hyderabad.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <span className="text-2xl">⏳</span>
          <div>
            <h3 className="font-bold text-white">
              Learn Online at Your Own Pace
            </h3>
            <p className="text-white text-sm">
              Flexible learning at your own pace for optimal progress.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <span className="text-2xl">🎯</span>
          <div>
            <h3 className="font-bold text-white">Placement Community</h3>
            <p className="text-white text-sm">
              Join our thriving placement community and connect with industry
              professionals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
