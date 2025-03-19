import Link from 'next/link'

const HeroSection = () => {
  return (
    <section
      className=""
    >
      <div
        className="container mx-auto flex flex-col items-center justify-center text-center py-20 px-4">
        {/* Header */}
        <h1
          className="text-5xl font-extrabold mb-4"
        >
          Welcome to my Portfolio
        </h1>
        {/* Subheadline */}
        <p
          className="text-lg text-gray-600 mb-6 max-w-2xl"
        >
          Here, you'll find details about my experience and skills. There's also a collection of my projects. If you feel so inclined, you can even read my blog or reach out to me via the <Link href="/contact">contact page</Link>!
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
