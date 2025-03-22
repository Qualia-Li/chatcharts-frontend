import { Container } from "./ui/container"
import { Button } from "./ui/button"

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for individuals trying it out",
    features: [
      "5 AI presentations per month",
      "Basic template library",
      "Standard export formats",
      "Community support"
    ],
    highlight: false,
    buttonText: "Get Started"
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    description: "For professionals and small teams",
    features: [
      "Unlimited AI presentations",
      "All premium templates",
      "Multiple export formats",
      "Priority email support",
      "Advanced AI image generation",
      "Team collaboration features"
    ],
    highlight: true,
    buttonText: "Choose Pro"
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with custom needs",
    features: [
      "All Pro features",
      "Enterprise-grade security",
      "Dedicated account manager",
      "Brand customization",
      "API integration",
      "Advanced team management"
    ],
    highlight: false,
    buttonText: "Contact Sales"
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
            Whether you're an individual user or a corporate team, we have flexible pricing options
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