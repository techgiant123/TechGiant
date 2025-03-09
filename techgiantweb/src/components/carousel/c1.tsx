import React, {
  useLayoutEffect,
  useRef,
  useState,
  useEffect,
  memo,
  useCallback,
  useMemo,
} from "react";
import { gsap } from "gsap";
import "tailwindcss/tailwind.css";

// Import SVG files as URLs
import innovationSvg from "../../assets/svg/innovation.svg";
import qualitySvg from "../../assets/svg/quality.svg";
import centricSvg from "../../assets/svg/centric.svg";
import reliabilitySvg from "../../assets/svg/reliability.svg";

interface CardProps {
  title: string;
  description: string;
  svg: string; // Use string for the SVG file path
}

const Card: React.FC<CardProps> = memo(({ title, description, svg }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="absolute top-0 left-0 w-full h-full text-center font-sans bg-gradient-to-tr from-[#11071f] via-[#452170] to-[#11071f] rounded-lg flex flex-col md:flex-row items-center justify-between p-4 md:p-8 lg:p-12 xl:p-16 shadow-2xl hover:shadow-3xl transition-shadow duration-300"
    >
      {/* SVG Image Section */}
      <div className="h-48 w-48 md:h-64 md:w-64 lg:h-96 lg:w-96 xl:h-[600px] xl:w-[600px] relative flex justify-center items-center">
        {isVisible ? (
          <img
            src={svg}
            alt={title}
            className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gray-700 animate-pulse rounded-lg" />
        )}
      </div>

      {/* Text Content Section */}
      <div className="flex flex-col items-center text-center mt-4 md:mt-0 md:ml-8 lg:ml-12 xl:ml-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
          {title}
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-300 font-light leading-relaxed max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl text-left">
          {description}
        </p>
      </div>
    </div>
  );
});

const Gallery: React.FC = memo(() => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLUListElement>(null);
  const playhead = useRef({ offset: 0 });
  const seamlessLoopRef = useRef<gsap.core.Timeline | null>(null);

  const cardsData = useMemo(
    () => [
      {
        title: "Innovation",
        description: `We embrace the latest technologies and industry trends to develop cutting-edge software solutions. Our commitment to innovation drives us to continuously explore new possibilities, ensuring that we stay ahead in a rapidly evolving digital landscape.`,
        svg: innovationSvg,
      },
      {
        title: "Quality",
        description: `Delivering excellence is at the core of what we do. We follow rigorous testing, coding standards, and best practices to ensure that every solution we create meets the highest standards of performance, reliability, and security.`,
        svg: qualitySvg,
      },
      {
        title: "Centric Approach",
        description: `Our success is measured by our clients’ success. We take the time to understand their unique challenges and business goals.`,
        svg: centricSvg,
      },
      {
        title: "Reliability",
        description: `Trust and dependability define our work. We ensure our solutions are robust, scalable, and future-proof.`,
        svg: reliabilitySvg,
      },
    ],
    []
  );

  const buildSeamlessLoop = useCallback(
    (
      items: HTMLElement[],
      spacing: number,
      animateFunc: (el: HTMLElement) => gsap.core.Timeline
    ) => {
      const rawSequence = gsap.timeline({ paused: true });
      const seamlessLoop = gsap.timeline({ paused: true, repeat: -1 });
      const cycleDuration = spacing * items.length;
      let dur: number;

      items
        .concat(items)
        .concat(items)
        .forEach((_item, i) => {
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
    },
    []
  );

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!cardsRef.current || !galleryRef.current) return;

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
      gsap.to(playhead.current, {
        offset: 0,
        onUpdate: () => {
          seamlessLoop.time(wrapTime(playhead.current.offset));
        },
        duration: 0.5,
        ease: "power3",
        paused: true,
      });
    }, galleryRef);

    return () => ctx.revert();
  }, [buildSeamlessLoop]);

  const handleNext = useCallback(() => {
    if (seamlessLoopRef.current) {
      gsap.to(playhead.current, {
        offset: "+=0.25",
        duration: 0.5,
        ease: "power2.inOut",
        onUpdate: () => {
          seamlessLoopRef.current?.time(playhead.current.offset);
        },
      });
    }
  }, []);

  const handlePrev = useCallback(() => {
    if (seamlessLoopRef.current) {
      gsap.to(playhead.current, {
        offset: "-=0.25",
        duration: 0.5,
        ease: "power2.inOut",
        onUpdate: () => {
          seamlessLoopRef.current?.time(playhead.current.offset);
        },
      });
    }
  }, []);

  const cards = useMemo(() => {
    return cardsData.map((card, i) => (
      <li key={i} className="absolute top-0 left-0 w-full h-full">
        <Card
          title={card.title}
          description={card.description}
          svg={card.svg}
        />
      </li>
    ));
  }, [cardsData]);

  return (
    <div
      ref={galleryRef}
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
    >
      <ul
        ref={cardsRef}
        className="absolute w-full max-w-[83rem] h-48 sm:h-64 md:h-96 lg:h-[45rem] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        {cards}
      </ul>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4 sm:gap-2">
        <button
          onClick={handlePrev}
          className="bg-gray-700 text-white px-4 py-2 sm:px-2 sm:py-1 rounded-lg hover:bg-gray-600 transition-colors"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-700 text-white px-4 py-2 sm:px-2 sm:py-1 rounded-lg hover:bg-gray-600 transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
});

export default Gallery;
