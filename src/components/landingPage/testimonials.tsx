"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoplayPlugin from "embla-carousel-autoplay";
import ClassNames from "embla-carousel-class-names";
import { ImQuotesRight } from "react-icons/im";
import { Card, CardContent } from "../ui/card";

type Testimonial = {
  id: number;
  name: string;
  image: string;
  quote: string;
  website: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    image: "/lol.png",
    quote:
      "Wesley International School has provided my children with an exceptional education. The teachers are dedicated and the curriculum is comprehensive. It's been a transformative experience for our family.",
    website: "Parent",
  },
  {
    id: 2,
    name: "Michael Chen",
    image: "/school.png",
    quote:
      "The school's focus on both academic excellence and character development sets it apart. My child has grown tremendously in confidence and capabilities since joining Wesley International.",
    website: "Parent",
  },
  {
    id: 3,
    name: "Priya Patel",
    image: "/lol.png",
    quote:
      "What impresses me most is how the school nurtures each student's individual talents while maintaining high academic standards. The supportive community here is truly special.",
    website: "Education Consultant",
  },
  {
    id: 4,
    name: "Priya Patel",
    image: "/school.png",
    quote:
      "What impresses me most is how the school nurtures each student's individual talents while maintaining high academic standards. The supportive community here is truly special.",
    website: "Education Consultant",
  },
  {
    id: 5,
    name: "Priya Patel",
    image: "/school.png",
    quote:
      "What impresses me most is how the school nurtures each student's individual talents while maintaining high academic standards. The supportive community here is truly special.",
    website: "Education Consultant",
  },
];

export default function Testimonials() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      containScroll: "trimSnaps",
      breakpoints: {
        "(min-width: 640px)": { slidesToScroll: 2 },
        "(min-width: 1024px)": { slidesToScroll: 3 },
      },
    },
    [
      AutoplayPlugin({
        delay: 5000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
      ClassNames(),
    ]
  );

  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      let maxHeight = 0;
      cardsRef.current.forEach((card) => {
        if (card) {
          card.style.height = "auto";
          maxHeight = Math.max(maxHeight, card.offsetHeight);
        }
      });
      cardsRef.current.forEach((card) => {
        if (card) {
          card.style.height = `${maxHeight}px`;
        }
      });
    });

    cardsRef.current.forEach((card) => {
      if (card) {
        resizeObserver.observe(card);
      }
    });

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12">
          <h2 className="text-3xl font-bold mb-4 lg:mb-0 lg:w-1/2">
            What our students are saying about us
          </h2>
          <p className="text-gray-600 lg:w-1/2">
            You learn today and earn tomorrow. The roots of education are bitter
            but the fruits are sweet. If you learn today you can lead tomorrow.
            See what our students are saying.
          </p>
        </div>

        <div className="w-full max-w-7xl mx-auto px-2">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, idx) => (
                <div
                  key={testimonial.id}
                  className="  flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-2"
                >
                  <div className="relative left-5 pt-12">
                    <div className="absolute top-2 left-5 z-10">
                      <div className="relative w-20 h-20 bg-white rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <Card
                      className="flex relative h-full flex-col"
                      ref={(el: HTMLDivElement | null) => {
                        if (el) cardsRef.current[idx] = el;
                      }}
                    >
                      <CardContent className="pt-11 p-6 flex flex-col flex-grow">
                        <div className="flex justify-between items-end mb-4">
                          <div>
                            <h3 className="font-semibold text-lg">
                              {testimonial.name}
                            </h3>
                            <p className="text-primary">
                              {testimonial.website}
                            </p>
                          </div>
                          <span className="text-3xl font-serif text-primary leading-none">
                            <ImQuotesRight />
                          </span>
                        </div>
                        <blockquote className="text-gray-700 mb-6 flex-grow">
                          {testimonial.quote}
                        </blockquote>
                        <div className="absolute bottom-0 right-0 w-4/6 h-1 bg-primary rounded-b-lg" />
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
