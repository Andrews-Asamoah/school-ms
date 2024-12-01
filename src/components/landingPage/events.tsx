const Events = () => {
  const events = [
    { title: "Annual Sports Day", date: "May 15, 2023" },
    { title: "Science Fair", date: "June 10, 2023" },
    { title: "Parent-Teacher Meeting", date: "July 5, 2023" },
  ];

  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-600">{event.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
