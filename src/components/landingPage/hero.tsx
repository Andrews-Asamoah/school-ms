"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Ratings from "./ratings";
import Typewritter from "typewriter-effect";

export default function Hero() {
  return (
    <section id="home" className="relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-12 lg:py-24">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Welcome to Wesley International School
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight lg:leading-tight">
                Empowering Minds,{" "}
                <span className="text-primary">
                  <Typewritter
                    options={{
                      strings: [
                        "Shaping Futures",
                        "Inspiring Growth",
                        "Nurturing Talent",
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 50,
                    }}
                  />
                </span>
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                Join our vibrant learning community where innovation meets
                education. Discover a world of opportunities and excellence in
                education.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/admission">
                <Button size="lg">Start Your Journey</Button>
              </Link>
              <Link href="#programs">
                <Button size="lg" variant="outline">
                  Explore Programs
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t">
              <Ratings mainText="300+" subText="Students" />
              <Ratings mainText="30+" subText="Expert Teachers" />
              <Ratings mainText="100%" subText="Success Rate" />
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/lol.png"
                alt="Students learning"
                fill
                className="object-cover"
              />
            </div>
            {/* Image object */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-4 flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <div className="font-medium">Accredited Programs</div>
                <div className="text-sm text-gray-600">
                  Internationally Recognized
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
