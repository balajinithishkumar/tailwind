import { useState } from 'react';

const testimonials = [
  { id: 1, text: "This is the first testimonial." },
  { id: 2, text: "This is the second testimonial." },
  { id: 3, text: "This is the third testimonial." },
  { id: 4, text: "This is the fourth testimonial." },
  { id: 5, text: "This is the fifth testimonial." },
  { id: 6, text: "This is the sixth testimonial." }, // New card
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    );
  };

  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex >= testimonials.length - 3;

  return (
    <div className="bg-black relative overflow-hidden max-[100%]">
      <div
        className="flex max-[80%] bg-red-200 transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex-none w-1/3 p-4 bg-gray-100 mx-2 rounded-lg shadow-md"
          >
            <p>{testimonial.text}</p>
          </div>
        ))}
      </div>
      <button
        className={`absolute top-1/2 left-0 transform -translate-y-1/2 p-2 rounded-full ${
          isAtStart ? 'bg-gray-300' : 'bg-gray-800 text-white'
        }`}
        onClick={handlePrev}
        disabled={isAtStart}
      >
        &lt;
      </button>
      <button
        className={`absolute top-1/2 right-0 transform -translate-y-1/2 p-2 rounded-full ${
          isAtEnd ? 'bg-gray-300' : 'bg-gray-800 text-white'
        }`}
        onClick={handleNext}
        disabled={isAtEnd}
      >
        &gt;
      </button>
    </div>
  );
};

export default Testimonials;