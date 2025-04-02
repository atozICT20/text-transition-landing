import AnimatedHero from '@/components/AnimatedHero';
import TextTransition from '@/components/TextTransition';

const heroTexts = [
  "Creative Solutions",
  "Digital Experiences",
  "Brand Growth",
  "Innovative Ideas"
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-800">
      <AnimatedHero />
      {/* Hero Section */}
      <section className="container mx-auto px-4 flex flex-col items-center justify-center min-h-[80vh] text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
          We Build{' '}
          <TextTransition 
            texts={heroTexts} 
            interval={2000}
            className="min-w-[300px] md:min-w-[400px] text-left"
          />
        </h1>
        
        <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl">
          Crafting memorable digital experiences that drive results and create lasting impressions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-3 bg-white text-indigo-900 font-semibold rounded-full hover:bg-opacity-90 transition">
            Get Started
          </button>
          <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-white/70">
        <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}