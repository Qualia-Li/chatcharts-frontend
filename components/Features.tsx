import { Container } from "./ui/container"

const features = [
  {
    title: "AI-Powered Creation",
    description: "Input your presentation topic, and GPTSlides automatically generates complete, visually appealing slides.",
    icon: "✨"
  },
  {
    title: "Multiple Design Templates",
    description: "Choose from various beautiful templates, from professional business to creative education, for all scenarios.",
    icon: "🎨"
  },
  {
    title: "One-Click Editing",
    description: "Easily customize content, change layouts, and adjust designs with no design experience needed.",
    icon: "🖋️"
  },
  {
    title: "Instant Export",
    description: "Export in multiple file formats, compatible with PowerPoint, Keynote, and Google Slides.",
    icon: "📤"
  },
  {
    title: "Collaboration",
    description: "Easily share and collaborate on presentations with team members.",
    icon: "👥"
  },
  {
    title: "Image Generation",
    description: "Built-in AI image generation, no need to search for third-party resources.",
    icon: "🖼️"
  }
]

export default function Features() {
  return (
    <section id="features" className="section-padding bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose ChatSlide?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ChatSlide integrates powerful AI technology to make creating
            professional presentations easier than ever
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="neobrutalism bg-white p-6 rounded-xl hover:translate-y-[-4px] transition-transform"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
} 