export const statistics = [
  {
    number: "100+",
    title: "Sucessful Projects",
  },
  {
    number: "100%",
    title: "Achieved ROI",
  },
  {
    number: "35+",
    title: "Happy Customers",
  },
  {
    number: "1.5x",
    title: "Increased Profits",
  },
];

const SectionStats = () => {
  return (
    <section className="relative py-16 after:absolute after:inset-0 after:bg-secondary/80 lg:py-28">
      <img
        src="statistic.jpg"
        alt="Statistics"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="container relative z-[1]">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((item, index) => (
            <div key={index}>
              {item.number && (
                <span className="mb-4 block text-3xl font-bold text-white">
                  {item.number}
                </span>
              )}
              {item.title && (
                <span className="block text-md font-bold text-white">
                  {item.title}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionStats;
