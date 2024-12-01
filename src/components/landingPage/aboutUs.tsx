import { Button } from "../ui/button";
import Image from "next/image";
import Anthem from "./anthem";

const AboutUs = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">
              About Wesley International School
            </h2>
            <p className="text-gray-600">
              At Wesley International School, we believe in nurturing young
              minds to become the leaders of tomorrow. Our institution is built
              on the pillars of academic excellence, character development, and
              innovative learning.
            </p>
            <p className="text-gray-600">
              With a team of dedicated educators and state-of-the-art
              facilities, we provide a stimulating environment where students
              can explore their potential and develop a lifelong love for
              learning.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Experienced and passionate teachers
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Modern, well-equipped classrooms and laboratories
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Comprehensive curriculum with focus on holistic development
              </li>
            </ul>
            <Button className="bg-purple-600 hover:bg-purple-700">
              Learn More About Us
            </Button>
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <Image
              src="/school.png"
              alt="Students in a classroom"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* School Anthem Section */}
        <Anthem />

        {/* History Section - Placeholder */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold mb-6">Our History</h2>
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <p className="text-gray-600 italic">
              Our rich history and heritage will be shared here soon...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
