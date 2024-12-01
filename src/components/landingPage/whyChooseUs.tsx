import { Book, Users, Trophy, Target, BusFront } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Book,
      title: "Expert Teachers",
      description:
        "Learn from highly qualified educators with years of experience in their fields.",
    },
    {
      icon: Users,
      title: "Small Class Sizes",
      description:
        "Enjoy personalized attention with our small student-to-teacher ratio.",
    },
    {
      icon: Trophy,
      title: "Academic Excellence",
      description:
        "Consistently high academic achievements and SHS placements.",
    },
    {
      icon: Target,
      title: "Modern Facilities",
      description:
        "State-of-the-art facilities and resources for optimal learning.",
    },
    {
      icon: BusFront,
      title: "School Bus",
      description:
        "Comfortable school bus to transport your ward in and out of the school",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-600">
            We provide a comprehensive educational experience focused on
            academic excellence and personal growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
