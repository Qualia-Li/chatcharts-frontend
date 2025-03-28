import { Container } from "./ui/container"
import { Button } from "./ui/button"

export default function Hero() {
  return (
    <div className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-b from-[#FFF9E0] to-white">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Create Beautiful Slides<br />
              <span className="text-[#FCD40B]">with AI Power</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Just input your ideas, and GPTSlides will automatically generate professional presentations, saving your time and effort.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="rounded-xl">
                <a href="https://chatslide.ai/signup">Start for Free</a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-xl">
                <a href="https://chatslide.ai">Watch Demo</a>
              </Button>
            </div>
          </div>
          <div className="neobrutalism bg-white p-3 md:p-5 rounded-xl">
            <div className="relative w-full overflow-hidden" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/jfbGL3zAUr4"
                title="GPTSlides Presentation Demo"
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
} 