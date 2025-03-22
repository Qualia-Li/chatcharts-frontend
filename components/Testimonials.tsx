import Image from "next/image"
import { Container } from "./ui/container"

const testimonials = [
  {
    content: "🇧🇷 Drlambda – rede neural que transforma páginas da web, arquivos PDF e vídeos em uma apresentação com slides interativos. E é grátis.",
    author: "Edinaldo Oliveira",
    role: "Hacker Osint | IA",
    avatar: "/images/nkSbABHU_400x400.jpeg"
  },
  {
    content: "This game-changer revolutionized my content creation—no more copy-pasting chaos, just effortless brilliance!",
    author: "Mohini Shewale",
    role: "AI Content Creator",
    avatar: "/images/1706594634503.jpeg"
  },
  {
    content: "This all-in-one tool seamlessly turns my documents, YouTube videos, and web findings into stunning slides and social posts. 📊💡",
    author: "Md Riyazuddin",
    role: "Founder at Digiwin | AI Enthusiast",
    avatar: "/images/t1.jpeg"
  },
  {
    content: "🇩🇪 DrLamdba ist so gestaltet, dass jeder, unabhängig vom Fachwissen, beeindruckende Präsentationen erstellen kann.",
    author: "Marco Linke",
    role: "Designers Inn & Businesserfolg",
    avatar: "/images/Screen-Shot-2024-03-18-at-5.36.59-PM.png"
  },
  {
    content: "I tried different tools for making presentations with AI - also the famous one like Tome. So i also tried DrLambda and was impressed - you get a great output with very little effort!",
    author: "Robert Leitinger",
    role: "Designers Inn & Businesserfolg",
    avatar: "/images/robert-leitinger.webp"
  },
  {
    content: "Great concept and cuts down on a lot of work creating presentations.",
    author: "The Learning Point",
    role: "",
    avatar: "/images/thelearningpoint.jpeg"
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-[#FFF9E0]">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how others are using GPTSlides to enhance their presentations
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="neobrutalism bg-white p-6 rounded-xl flex flex-col"
            >
              <p className="text-gray-700 mb-6 flex-grow">&ldquo;{testimonial.content}&rdquo;</p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden neobrutalism-sm">
                    <Image src={testimonial.avatar} alt={testimonial.author} width={48} height={48} />
                  </div>
                </div>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
} 