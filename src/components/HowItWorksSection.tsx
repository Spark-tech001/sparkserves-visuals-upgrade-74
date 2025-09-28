const HowItWorksSection = () => {
  const steps = [
    {
      step: "1",
      title: "Sign Up",
      description: "Create your account in minutes and set up your business profile with our easy onboarding process.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      )
    },
    {
      step: "2",
      title: "Customize",
      description: "Tailor the system to your business needs with easy-to-use settings, themes, and workflow configurations.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      step: "3",
      title: "Go Live",
      description: "Start selling immediately with our intuitive interface, comprehensive training, and 24/7 support team.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            🚀 How It Works
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get Started in{' '}
            <span className="text-primary">3 Simple Steps</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Getting started with SparkServes is easy. Follow these simple steps to transform your business operations.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div 
              key={step.step}
              className="text-center relative animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary to-muted transform -translate-x-1/2 animate-scale-in" style={{ animationDelay: `${(index + 1) * 300}ms` }}></div>
              )}
              
              {/* Step Circle */}
              <div className="relative mx-auto mb-6">
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-button mx-auto relative z-10 animate-pulse-glow">
                  {step.step}
                </div>
                <div className="absolute inset-0 w-24 h-24 bg-primary/20 rounded-full animate-ping mx-auto"></div>
              </div>

              {/* Icon */}
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 mx-auto group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '800ms' }}>
           <Button 
              variant="outline" 
              className="bg-white text-orange-500 border-white hover:bg-orange-50 px-8 py-6 text-lg font-semibold rounded-2xl"
              onClick={() => window.location.href = '/demo'}
            >
              Start Free Trial
            <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;