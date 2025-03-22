import { Container } from "./ui/container"
import { Button } from "./ui/button"

const plans = [
  {
    name: "Plus Plan",
    price: "$9.9",
    period: "/Month",
    description: "Perfect for Small Projects",
    features: [
      "Up to 20 slides per project",
      "30 slide generations",
      "5 resources per project",
      "20 resource pages",
      "50MB file size limit",
      "Basic export options (PDF, PPTX, VIDEO, KEYNOTE, PODCAST)"
    ],
    highlight: false,
    buttonText: "Get Started"
  },
  {
    name: "Pro Plan",
    price: "$14.9",
    period: "/Month",
    description: "More Features & Flexibility",
    features: [
      "Up to 40 slides per project",
      "80 slide generations",
      "10 resources per project",
      "40 resource pages",
      "100MB file size limit",
      "Advanced export options with System Avatar",
      "Video generation with 100+ avatars (10 min/month)",
      "100+ System Voices with unlimited usage",
      "Convert slides to podcast content"
    ],
    highlight: true,
    buttonText: "Get Started"
  },
  {
    name: "Ultimate Plan",
    price: "$59.9",
    period: "/Month",
    description: "Unlock Full Creative Control",
    features: [
      "Up to 60 slides per project",
      "200 slide generations",
      "20 resources per project",
      "40 resource pages",
      "100MB file size with no restrictions",
      "Premium export options",
      "Extended video generation (30 min/month)",
      "Custom voice recording & integration",
      "Custom branding & logo integration"
    ],
    highlight: false,
    buttonText: "Get Started"
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your Plan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you are an individual user or a corporate team, we have flexible pricing options
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`neobrutalism p-6 rounded-xl flex flex-col ${
                plan.highlight 
                  ? 'bg-[#FCD40B] transform md:-translate-y-4' 
                  : 'bg-white'
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-gray-600">{plan.period}</span>}
              </div>
              <p className="text-gray-700 mb-6">{plan.description}</p>
              <ul className="mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center mb-3">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 mr-2 text-green-500" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button 
                variant={plan.highlight ? "outline" : "default"}
                className="w-full mt-auto"
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
} 