import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import usePricingGate from '@/components/DiscountTimer';

const Features = () => {
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const [visibleFeatures, setVisibleFeatures] = useState(15);
  const isPricingVisible = usePricingGate();

  const featureData = {
    "Dine Flow": [
      "Table Overview – Instantly monitor all tables",
      "Order Status – Track every order in real-time", 
      "Customer Details – Capture essential guest info",
      "WhatsApp Billing – Send bills directly via WhatsApp",
      "Menu Management – Add, edit, or remove items easily",
      "Live Updates – Reflects every change instantly",
      "Order Timeline – Visual step-by-step flow",
      "Multi-table Support – Manage multiple tables simultaneously",
      "Bill Generation – One-tap digital billing",
      "Delivery Tracking – Know when orders are out",
      "Kitchen Panel – View orders from the kitchen's perspective",
      "Contact Restriction – Orders tied to phone numbers",
      "Status Progression – From Confirmed to Completed",
      "Completed Orders – History for performance analysis",
      "Dashboard UI – Simple, clean, and intuitive",
      "Dynamic Buttons – Actionable controls for every stage",
      "Order Confirmation – Smart verification system",
      "Table Auto Lock – Prevents multiple bookings",
      "Sequential Status Flow – Forces correct order handling",
      "One-click Billing – Fastest way to close a table",
      "Customer Validation – Ensures repeat orders from same number",
      "Contact Integration – Built-in communication flow",
      "Table Allocation – Smart table assignment",
      "Responsive Design – Perfect on any device",
      "Minimal Interface – Clutter-free and easy to use"
    ],
    "Dine Ease": [
      "Instant Invoicing – Generate bills in seconds",
      "Item Click Billing – Tap to add items instantly",
      "Customer Details – Capture name and contact info",
      "WhatsApp Integration – Send invoices directly",
      "Real-time Calculation – Auto totals and tax updates",
      "Clean Dashboard – Simple, intuitive UI",
      "Order Summary – Clear itemized list",
      "Bill Preview – View before sending",
      "Multiple Items Support – Handle bulk orders easily",
      "Editable Menu – Add/remove/edit items on the fly",
      "GST Support – Include tax if needed",
      "Contact Validation – Ensures correct recipient",
      "Download Invoice – Save as image or PDF",
      "One-tap Sharing – Share via WhatsApp or phone",
      "Custom Notes – Add special instructions",
      "Table Number Entry – Identify where it was served",
      "Minimal Interface – Fast and clutter-free",
      "Digital-first Design – Built for mobile & desktop",
      "Smart Pricing Logic – Auto calculate discounts",
      "Item Search – Quick lookup for large menus",
      "Dark Mode Friendly – Eye-comfort UI",
      "Printer Support – Optional paper billing",
      "Customer History – Track regulars (manual entry)",
      "No Login Required – Use instantly",
      "Easy Menu Updates – Real-time changes"
    ],
    "Store Assist": [
      "Item Management – Add, edit, delete products",
      "Bulk Add Support – Add many items at once",
      "Barcode Scanning – Quick item identification",
      "Smart Billing – Instant bill generation",
      "Inventory Update – Auto stock deduction after billing",
      "Customer Details – Capture buyer contact info",
      "WhatsApp Billing – Send bill via WhatsApp",
      "Real-time Inventory – Live stock tracking",
      "Sales Overview – View order history anytime",
      "Responsive Design – Works on all devices",
      "Fast UI – Optimized for speed",
      "Clean Interface – User-friendly layout",
      "Stock Alerts – Warns on low inventory",
      "One-tap Billing – Quick checkout process",
      "Manual Entry Option – For items without barcode",
      "Price Auto-Update – Reflects latest changes instantly",
      "Category Sorting – Organized item listing",
      "Date-wise Orders – Filter by transaction dates",
      "Smart Search – Find items quickly",
      "Discount Option – Add price reductions easily",
      "Secure Access – Admin-only controls",
      "No Login Required – Fast launch",
      "Printer Friendly – Supports printed receipts",
      "Digital Record – Keeps transaction logs",
      "Mobile Ready – Optimized for small screens"
    ]
  };

  const allFeatures = Object.entries(featureData).flatMap(([plan, features]) => 
    features.map(feature => ({ plan, feature }))
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      
      if (scrolled + windowHeight >= docHeight - 100 && !showAllFeatures) {
        setShowAllFeatures(true);
        setVisibleFeatures(allFeatures.length);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showAllFeatures, allFeatures.length]);

  const displayedFeatures = allFeatures.slice(0, visibleFeatures);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              ✨ Complete Feature Overview
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Powerful Features for{' '}
              <span className="text-primary">Every Business</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the comprehensive suite of features that make SparkServes the perfect POS solution 
              for restaurants, cafes, and retail stores of all sizes.
            </p>
          </div>

          {/* Plan Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {Object.entries(featureData).map(([plan, features], index) => (
              <Card 
                key={plan}
                className="text-center hover:shadow-card transition-all duration-300 hover:scale-105 animate-fade-in border-0 bg-card"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">{plan}</CardTitle>
                  <p className="text-muted-foreground">
                    {plan === 'Dine Flow' && 'Complete restaurant management solution'}
                    {plan === 'Dine Ease' && 'Advanced POS with smart features'}
                    {plan === 'Store Assist' && 'Comprehensive retail management'}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {features.length}
                  </div>
                  <div className="text-sm text-muted-foreground">Features Included</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Feature Breakdown by Plan
            </h2>
            <p className="text-muted-foreground">
              {!showAllFeatures 
                ? `Showing first ${visibleFeatures} features. Scroll down to see all features.`
                : `All ${allFeatures.length} features displayed.`
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedFeatures.map((item, index) => (
              <Card 
                key={index}
                className="group hover:shadow-card transition-all duration-300 hover:scale-105 animate-fade-in border-0 bg-card"
                style={{ animationDelay: `${(index % 15) * 50}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <svg className="w-5 h-5 text-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-primary mb-1">
                        {item.plan}
                      </div>
                      <div className="text-foreground font-medium leading-relaxed">
                        {item.feature}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {!showAllFeatures && (
            <div className="text-center mt-12">
              <Button 
                onClick={() => {
                  setShowAllFeatures(true);
                  setVisibleFeatures(allFeatures.length);
                }}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold shadow-button hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Show All Features
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </Button>
            </div>
          )}

          {showAllFeatures && (
            <div className="text-center mt-12 animate-fade-in">
              <div className="bg-primary/10 rounded-2xl p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Choose the plan that fits your business needs and start your free trial today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 font-semibold shadow-button hover:shadow-lg transition-all duration-300 hover:scale-105"
                    onClick={() => window.location.href = '/demo'}
                  >
                    Get Demo
                  </Button>
                  {isPricingVisible ? (
                    <Button 
                      variant="outline" 
                      className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                      onClick={() => window.location.href = '/#pricing'}
                    >
                      View Pricing
                    </Button>
                  ) : (
                    <Button 
                      variant="outline" 
                      disabled
                      className="opacity-50 cursor-not-allowed"
                    >
                      Pricing Available Sept 22, 2025
                    </Button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
    </>
  );
};

export default Features;