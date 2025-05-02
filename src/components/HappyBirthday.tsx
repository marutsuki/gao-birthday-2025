import { FC, useState, useEffect } from "react";
import HeroSection from "./HeroSection";
import { useAppContext } from "../context/AppContext";

// Define image type
interface ImageType {
  id: number;
  src: string;
  alt: string;
}

const images = Array.from({ length: 45 }, (_, i) => {
  const index = i + 1;
  const extension = [2, 3, 4, 5].includes(index) ? "jpg" : "jfif";
  return {
    id: index,
    src: `/images/image${index}.${extension}`,
    alt: `Birthday memory ${index}`,
  };
});

const HappyBirthday: FC = () => {
  const { finalSectionStarted, renderConfetti } = useAppContext();
  const [visibleImages, setVisibleImages] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to shuffle array
  const shuffleArray = (array: ImageType[]) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Shuffle images on component mount
  const [shuffledImages] = useState(() => shuffleArray(images));

  useEffect(() => {
    if (!finalSectionStarted) return;
    // Display a new image every 1.5 seconds
    const interval = setInterval(() => {
      if (currentIndex < shuffledImages.length) {
        setVisibleImages((prev) => [...prev, shuffledImages[currentIndex].id]);
        setCurrentIndex((prev) => prev + 1);
      } else {
        clearInterval(interval);
      }
    }, 1379);

    return () => clearInterval(interval);
  }, [currentIndex, shuffledImages, finalSectionStarted]);

  useEffect(() => {
    if (!finalSectionStarted) return;
    const interval = setInterval(() => {
      window.scrollBy({ left: 0, top: 130, behavior: "smooth" });
      if (currentIndex >= shuffledImages.length) {
        clearInterval(interval);
      }
    }, 1379);

    return () => clearInterval(interval);
  }, [finalSectionStarted, currentIndex, shuffledImages.length]);

  return (
    <HeroSection
      sectionIndex={24}
      nextSectionIndex={0}
      buttonText="Back to Top"
      title="Happy Birthday Kevin!!!"
      subtitle="From your one and only Lucien, and all the boys."
      className="py-48"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-24 w-full max-w-6xl mx-auto">
        {shuffledImages.map((image) => (
          <div
            key={image.id}
            className={`transition-all duration-700 transform ${
              visibleImages.includes(image.id)
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="max-h-96 w-full object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        ))}
      </div>
      {renderConfetti("🎉")}
      {renderConfetti("🎂")}
      {renderConfetti("❄️")}
      {renderConfetti("Kevin", 25)}
      {renderConfetti("Gao", 25)}

      <h1 className="text-7xl mt-16">Happy Birthday !!!</h1>
      <h2 className="mt-4">and</h2>
      <h1 className="text-4xl">Welcome Back Home !!!</h1>
    </HeroSection>
  );
};

export default HappyBirthday;
