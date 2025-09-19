import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import DiscountStamp from '@/components/DiscountStamp';
import usePricingGate from '@/components/DiscountTimer';
import pricingBg from '@/assets/pricing-bg.jpg';

const PricingSection = () => {
  const [billingPeriod, setBillingPeriod] = useState('yearly');
  const isPricingVisible = usePricingGate();

  const plans = [
    {
      name: "Dine Flow",
      subtitle: "For Restaurants",
      prices: {
        yearly: { amount: "₹7,999", period: "/year", savings: "Save 45%" },
        halfYearly: { amount: "₹4,499", period: "/6 months", savings: "Save 25%" },
        quarterly: { amount: "₹3,499", period: "/3 months", savings: "Save 10%" }
      },
      description: "Complete restaurant management solution with table overview and order tracking.",
      features: [
        "Table Overview – Monitor all tables instantly",
        "Order Status Tracking – Real-time updates",
        "Customer Details – Capture guest information",
        "WhatsApp Billing – Direct bill sharing",
        "Menu Management – Easy item updates",
        "Live Updates – Instant reflections",
        "Order Timeline – Visual workflow",
        "Multi-table Support – Handle multiple tables",
        "Bill Generation – One-tap billing",
        "Kitchen Panel – Kitchen order view",
        "Contact Restrictions – Phone-based orders",
        "Status Progression – Order lifecycle"
      ],
      isPopular: true,
      buttonText: "Get Started",
      buttonVariant: "outline" as const
    },
    {
      name: "Dine Ease",
      subtitle: "For Advanced Operations",
      prices: {
        yearly: { amount: "₹3,999", period: "/year", savings: "Save 50%" },
        halfYearly: { amount: "₹2,499", period: "/6 months", savings: "Save 30%" },
        quarterly: { amount: "₹1,499", period: "/3 months", savings: "Save 15%" }
      },
      description: "Advanced POS system with instant invoicing and smart calculations.",
      features: [
        "Instant Invoicing – Bills in seconds",
        "Item Click Billing – Tap to add items",
        "Customer Details – Name and contact capture",
        "WhatsApp Integration – Direct invoice sharing",
        "Real-time Calculation – Auto totals",
        "Clean Dashboard – Intuitive interface",
        "Order Summary – Clear itemized lists",
        "Bill Preview – Review before sending",
        "Multiple Items Support – Bulk orders",
        "GST Support – Tax calculations",
        "Download Invoice – PDF and image export",
        "Custom Notes – Special instructions"
      ],
      isPopular: false,
      buttonText: "Start Free Trial",
      buttonVariant: "default" as const
    },
    {
      name: "Store Assist",
      subtitle: "For Retail Stores",
      prices: {
        yearly: { amount: "₹5,999", period: "/year", savings: "Save 40%" },
        halfYearly: { amount: "₹3,499", period: "/6 months", savings: "Save 25%" },
        quarterly: { amount: "₹2,499", period: "/3 months", savings: "Save 10%" }
      },
      description: "Comprehensive retail solution with inventory management and barcode scanning.",
      features: [
        "Item Management – Add, edit, delete products",
        "Bulk Add Support – Multiple item uploads",
        "Barcode Scanning – Quick item identification",
        "Smart Billing – Instant bill generation",
        "Inventory Updates – Auto stock deduction",
        "Customer Details – Buyer information",
        "Real-time Inventory – Live stock tracking",
        "Sales Overview – Order history",
        "Stock Alerts – Low inventory warnings",
        "Price Auto-Update – Latest pricing",
        "Category Sorting – Organized listings",
        "Secure Access – Admin controls"
      ],
      isPopular: false,
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const
    }
  ];

  const getCurrentPrice = (plan: typeof plans[0]) => {
    return plan.prices[billingPeriod as keyof typeof plan.prices];
  };

  if (!isPricingVisible) {
    // Show pricing cards with discount stamps covering them
    return (
      <section id="pricing" className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${pricingBg})`
          }}
        >
          <div className="absolute inset-0 bg-white/90"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              💰 Pricing Plans
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Choose Your{' '}
              <span className="text-primary">Perfect Plan</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Select the perfect POS solution tailored to your business needs.
            </p>
            
            {/* Billing Toggle */}
            <div className="inline-flex items-center p-1 bg-muted rounded-lg">
              <button 
                onClick={() => setBillingPeriod('quarterly')}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  billingPeriod === 'quarterly' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Quarterly
              </button>
              <button 
                onClick={() => setBillingPeriod('halfYearly')}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  billingPeriod === 'halfYearly' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Half Yearly  
              </button>
              <button 
                onClick={() => setBillingPeriod('yearly')}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  billingPeriod === 'yearly' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Yearly
                <span className="ml-2 text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">Best Deal</span>
              </button>
            </div>
          </div>

          {/* Pricing Cards with Stamps */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <Card 
                key={plan.name}
                className={`relative overflow-visible transition-all duration-300 hover:scale-105 animate-fade-in ${
                  plan.isPopular 
                    ? 'border-2 border-primary shadow-card bg-card' 
                    : 'border hover:border-primary/50 bg-card'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 font-medium text-sm z-10">
                    🌟 Most Popular
                  </div>
                )}
                
                {/* Discount Stamp Overlay */}
                <DiscountStamp />
                
                <CardHeader className={`text-center ${plan.isPopular ? 'pt-12' : 'pt-8'} relative`}>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-4">{plan.subtitle}</p>
                  <div className="mb-2 opacity-30">
                    <span className="text-4xl lg:text-5xl font-bold text-primary">
                      {getCurrentPrice(plan).amount}
                    </span>
                    <span className="text-muted-foreground">{getCurrentPrice(plan).period}</span>
                  </div>
                  <div className="text-sm text-primary font-medium mb-4 opacity-30">
                    {getCurrentPrice(plan).savings}
                  </div>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </CardHeader>

                <CardContent className="px-8 pb-8">
                  <ul className="space-y-3 mb-8">
                    {plan.features.slice(0, 8).map((feature, featureIndex) => (
                      <li 
                        key={feature} 
                        className="flex items-center space-x-3 animate-fade-in opacity-60"
                        style={{ animationDelay: `${(index * 200) + (featureIndex * 50)}ms` }}
                      >
                        <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant="outline"
                    disabled
                    className="w-full py-6 text-lg font-semibold opacity-50 cursor-not-allowed"
                  >
                    Available Sept 22, 2025
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${pricingBg})`
        }}
      >
        <div className="absolute inset-0 bg-white/90"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            💰 Pricing Plans
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Choose Your{' '}
            <span className="text-primary">Perfect Plan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Transparent pricing with no hidden fees. All plans include core POS features and free customer support.
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button 
              onClick={() => setBillingPeriod('yearly')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                billingPeriod === 'yearly' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Yearly
              <span className="ml-2 text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">Best Value</span>
            </button>
            <button 
              onClick={() => setBillingPeriod('halfYearly')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                billingPeriod === 'halfYearly' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Half Yearly
            </button>
            <button 
              onClick={() => setBillingPeriod('quarterly')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                billingPeriod === 'quarterly' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Quarterly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`relative overflow-hidden transition-all duration-300 hover:scale-105 animate-fade-in ${
                plan.isPopular 
                  ? 'border-2 border-primary shadow-card bg-card' 
                  : 'border hover:border-primary/50 bg-card'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 font-medium text-sm">
                  🌟 Most Popular
                </div>
              )}
              
              <CardHeader className={`text-center ${plan.isPopular ? 'pt-12' : 'pt-8'}`}>
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.subtitle}</p>
                <div className="mb-2">
                  <span className="text-4xl lg:text-5xl font-bold text-primary">
                    {getCurrentPrice(plan).amount}
                  </span>
                  <span className="text-muted-foreground">{getCurrentPrice(plan).period}</span>
                </div>
                <div className="text-sm text-primary font-medium mb-4">
                  {getCurrentPrice(plan).savings}
                </div>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </CardHeader>

              <CardContent className="px-8 pb-8">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li 
                      key={feature} 
                      className="flex items-center space-x-3 animate-fade-in"
                      style={{ animationDelay: `${(index * 200) + (featureIndex * 50)}ms` }}
                    >
                      <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.buttonVariant}
                  className={`w-full py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 ${
                    plan.isPopular 
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-button' 
                      : 'hover:bg-primary/10'
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Custom Solution CTA */}
        <div className="text-center bg-card rounded-2xl p-8 shadow-card animate-fade-in" style={{ animationDelay: '800ms' }}>
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Have specific requirements or need a tailored solution for your business? Our team is here to help you find the perfect fit.
          </p>
          <Button 
            variant="outline" 
            className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
          >
            Contact our Solutions Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;