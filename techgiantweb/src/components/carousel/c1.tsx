import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/all";
import "tailwindcss/tailwind.css";
import Lottie from "lottie-react";
import Quality from "../../lottie/Quality.json";
import inovation from "../../lottie/inovation.json";
import centric from "../../lottie/center.json";

gsap.registerPlugin(Draggable);

interface CardProps {
  title: string;
  description: string;
  animationData: any;
}

const Card: React.FC<CardProps> = ({ title, description, animationData }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full text-center text-2xl font-sans bg-[radial-gradient(circle_at_50%_20%,_#020344,_#000000)] rounded-lg flex flex-row items-center justify-between p-[120px]">
      <div className="h-[600px] w-[600px] relative justify-center items-center flex">
        <Lottie
          animationData={animationData}
          loop={true}
          className="w-[400px] h-[400px] sm:w-40 sm:h-40 md:w-[500px] md:h-[500px]"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-5xl font-bold text-white ">{title}</h2>
        <p className="text-2xl text-gray-200 mt-2 text-wrap max-w-[400px]">
          {description}
        </p>
      </div>
    </div>
  );
};

const Gallery: React.FC = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLUListElement>(null);
  const proxyRef = useRef<HTMLDivElement>(null);
  const playhead = useRef({ offset: 0 });
  const seamlessLoopRef = useRef<gsap.core.Timeline | null>(null);

  const cardsData = [
    {
      title: "Innovation",
      description:
        "We embrace the latest technologies and industry trends to develop cutting-edge software solutions. Our team continuously explores new possibilities, ensuring that our clients stay ahead in an ever-evolving digital landscape.",
      animationData: inovation,
    },
    {
      title: "⁠Quality",
      description:
        "Delivering excellence is at the core of what we do. We follow rigorous testing, coding standards, and best practices to ensure that our software is reliable, secure, and high-performing. Quality assurance is not just a phase but a mindset embedded in our development process.",
      animationData: Quality,
    },
    {
      title: "Centric Approach",
      description:
        "Our success is measured by our clients’ success. We take the time to understand their unique challenges and business goals, crafting tailored solutions that drive growth and efficiency. We believe in collaboration, transparency, and building long-term partnerships.",
      animationData: centric,
    },
    {
      title: "⁠Reliability",
      description:
        "Trust and dependability define our work. We ensure our solutions are robust, scalable, and future-proof. From development to deployment and beyond, we provide continuous support and maintenance, ensuring smooth operations and peace of mind for our clients.",
      animationData: Quality,
    },
  ];

  useEffect(() => {
    if (!cardsRef.current || !galleryRef.current || !proxyRef.current) return;

    const spacing = 0.25;
    const cards = gsap.utils.toArray(
      cardsRef.current.children
    ) as HTMLElement[];
    gsap.set(cards, { xPercent: 400, opacity: 0, scale: 0 });

    const animateFunc = (element: HTMLElement) => {
      const tl = gsap.timeline();
      tl.fromTo(
        element,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          zIndex: 100,
          duration: 0.5,
          yoyo: true,
          repeat: 1,
          ease: "power1.in",
        }
      ).fromTo(
        element,
        { xPercent: 130 },
        { xPercent: -130, duration: 1, ease: "none" },
        0
      );
      return tl;
    };

    const seamlessLoop = buildSeamlessLoop(cards, spacing, animateFunc);
    seamlessLoopRef.current = seamlessLoop;

    const wrapTime = gsap.utils.wrap(0, seamlessLoop.duration());
    const scrub = gsap.to(playhead.current, {
      offset: 0,
      onUpdate() {
        seamlessLoop.time(wrapTime(playhead.current.offset));
      },
      duration: 0.5,
      ease: "power3",
      paused: true,
    });

    Draggable.create(proxyRef.current, {
      type: "x",
      trigger: cardsRef.current,
      onPress() {
        this.startOffset = scrub.vars.offset;
      },
      onDrag() {
        scrub.vars.offset = this.startOffset + (this.startX - this.x) * 0.001;
        scrub.invalidate().restart();
      },
    });
  }, []);

  const handleNext = () => {
    if (seamlessLoopRef.current) {
      gsap.to(playhead.current, {
        offset: "+=0.25",
        duration: 0.5,
        ease: "power2.inOut",
        onUpdate: () => seamlessLoopRef.current?.time(playhead.current.offset),
      });
    }
  };

  const handlePrev = () => {
    if (seamlessLoopRef.current) {
      gsap.to(playhead.current, {
        offset: "-=0.25",
        duration: 0.5,
        ease: "power2.inOut",
        onUpdate: () => seamlessLoopRef.current?.time(playhead.current.offset),
      });
    }
  };

  return (
    <div
      ref={galleryRef}
      className="relative w-full h-screen overflow-hidden bg-bgColor flex items-center justify-center"
    >
      <ul
        ref={cardsRef}
        className="absolute w-full max-w-[100rem] h-80 sm:h-96 md:h-[60rem] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        {cardsData.map((card, i) => (
          <li key={i} className="absolute top-0 left-0 w-full h-full ">
            <div className="flex flex-col text-wrap p-[120px]">
              <Card
                title={card.title}
                description={card.description}
                animationData={card.animationData}
              />
            </div>
          </li>
        ))}
      </ul>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4 sm:gap-2">
        <button
          onClick={handlePrev}
          className="bg-gray-700 text-white px-6 py-3 md:px-4 md:py-2 sm:px-2 sm:py-1 rounded-lg hover:bg-cardBg"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-700 text-white px-6 py-3 md:px-4 md:py-2 sm:px-2 sm:py-1 rounded-lg hover:bg-cardBg"
        >
          Next
        </button>
      </div>
      <div ref={proxyRef} className="absolute invisible" />
    </div>
  );
};

function buildSeamlessLoop(
  items: HTMLElement[],
  spacing: number,
  animateFunc: (el: HTMLElement) => gsap.core.Timeline
) {
  const rawSequence = gsap.timeline({ paused: true });
  const seamlessLoop = gsap.timeline({ paused: true, repeat: -1 });
  const cycleDuration = spacing * items.length;
  let dur: number;

  items
    .concat(items)
    .concat(items)
    .forEach((item, i) => {
      const anim = animateFunc(items[i % items.length]);
      rawSequence.add(anim, i * spacing);
      dur = anim.duration();
    });

  seamlessLoop.fromTo(
    rawSequence,
    { time: cycleDuration + dur! / 2 },
    { time: "+=" + cycleDuration, duration: cycleDuration, ease: "none" }
  );
  return seamlessLoop;
}

export default Gallery;
