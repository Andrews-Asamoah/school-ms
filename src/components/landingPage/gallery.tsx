import Image from "next/image";

const Gallery = () => {
  const images = [
    { src: "/school.png", alt: "Students in classroom" },
    { src: "/school.png", alt: "Students in classroom" },
    { src: "/school.png", alt: "Students in classroom" },
    { src: "/school.png", alt: "Students in classroom" },
    { src: "/school.png", alt: "Students in classroom" },
    { src: "/school.png", alt: "Students in classroom" },
  ];

  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our School Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-video rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
