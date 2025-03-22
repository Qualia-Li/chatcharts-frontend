import Image from "next/image"
import { Container } from "./ui/container"

const testimonials = [
  {
    content: "GPTSlides completely changed how I prepare for presentations. Now I can spend more time refining content instead of struggling with design.",
    author: "Mark Zhang",
    role: "Marketing Director",
    avatar: "/avatars/user-1.png"
  },
  {
    content: "As a teacher, I need to frequently create lesson materials. GPTSlides saves me hours of work, and my students are more engaged.",
    author: "Lisa Wang",
    role: "University Professor",
    avatar: "/avatars/user-2.png"
  },
  {
    content: "I never had design talent, but with GPTSlides, my presentations look like they were made by a professional designer.",
    author: "Sarah Chen",
    role: "Entrepreneur",
    avatar: "/avatars/user-3.png"
  }
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
              <p className="text-gray-700 mb-6 flex-grow">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden neobrutalism-sm">
                    {/* Replace with real avatars */}
                    <div className="w-full h-full bg-[#FCD40B]"></div>
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