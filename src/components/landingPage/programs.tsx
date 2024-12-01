import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Programs() {
  const programs = [
    {
      title: "Nursery Education",
      description:
        "A nurturing environment for our youngest learners, focusing on social skills, basic concepts, and creative play to build a strong foundation for future learning.",
      image: "/school.png",
      level: "Ages 2.5-3",
      duration: "1 Year",
    },
    {
      title: "Kindergarten Education",
      description:
        "Preparing children for primary school through interactive learning, early literacy and numeracy skills, and fostering curiosity and independence.",
      image: "/school.png",
      level: "Ages 4-5",
      duration: "1 Year",
    },
    {
      title: "Primary Education",
      description:
        "Comprehensive curriculum covering core subjects, critical thinking, and personal development, setting a strong academic and social foundation for future studies.",
      image: "/school.png",
      level: "Ages 6-12",
      duration: "6 Years",
    },
    {
      title: "Junior High School",
      description:
        "Rigorous academic program preparing students for high school, with a focus on advanced subject matter, critical analysis, and personal growth.",
      image: "/school.png",
      level: "Ages 13-15",
      duration: "2.5 Years",
    },
  ];

  return (
    <section id="programs" className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Programs</h2>
          <p className="text-gray-600">
            Discover our comprehensive educational programs designed to nurture
            growth and excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{program.title}</CardTitle>
                  <Badge variant="secondary">{program.level}</Badge>
                </div>
                <CardDescription>{program.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    Duration: {program.duration}
                  </span>
                  <Button variant="outline">Learn More</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
