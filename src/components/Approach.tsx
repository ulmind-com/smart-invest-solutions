import { Users, FileText, Settings, HeadphonesIcon } from "lucide-react";

const Approach = () => {
  const steps = [
    {
      icon: Users,
      title: "Client-First Understanding",
      description: "We listen carefully to understand each client's financial goals before suggesting any solution.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: FileText,
      title: "Simple & Transparent Advice",
      description: "We explain plans in easy language with complete transparency—no hidden terms or confusion.",
      color: "from-primary to-primary/80",
    },
    {
      icon: Settings,
      title: "Personalized Solutions",
      description: "Every recommendation is tailored to the client's needs, budget, and long-term objectives.",
      color: "from-blue-600 to-primary",
    },
    {
      icon: HeadphonesIcon,
      title: "Continuous Support",
      description: "From policy selection to servicing and claims assistance, we support our clients at every step.",
      color: "from-primary/80 to-blue-500",
    },
  ];

  return (
    <section id="approach" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-stagger>
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Approach
            </span>
          </h2>
          <p className="text-lg text-foreground/70" data-stagger>
            We combine clear guidance, tailored planning, and ongoing support to help our clients make confident financial decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connection Lines for Desktop */}
          <div className="hidden lg:block absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
              data-stagger
            >
              <div className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 h-full hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-3 hover:scale-105">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center font-bold text-primary-foreground shadow-lg group-hover:animate-bounce-subtle">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500`}>
                  <step.icon className="w-8 h-8 text-white group-hover:animate-pulse" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                <p className="text-foreground/60 group-hover:text-foreground/80 transition-colors duration-300">{step.description}</p>
                
                {/* Progress indicator on hover */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/70 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-card p-8 rounded-2xl border border-border hover:shadow-xl transition-all duration-500" data-stagger>
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4" data-stagger>Why Choose Us?</h3>
            <p className="text-foreground/70" data-stagger>
              One platform for all your insurance and investment needs—manage, track, and grow everything in one smart place.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
