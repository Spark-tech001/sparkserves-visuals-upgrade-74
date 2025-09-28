import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import featuresBg from '@/assets/features-bg.jpg';

const FeaturesSection = () => {
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  const featuresData = {
    dineFlow: {
      name: "Dine Flow",
      subtitle: "For Restaurants",
      color: "from-orange-500 to-red-500",
      features: [
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
      ]
    },
    dineEase: {
      name: "Dine Ease",
      subtitle: "For Advanced Operations", 
      color: "from-blue-500 to-purple-500",
      features: [
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
      ]
    },
    storeAssist: {
      name: "Store Assist",
      subtitle: "For Retail Stores",
      color: "from-green-500 to-teal-500",
      features: [
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
    }
  };

  const initialFeatureCount = 15;

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${featuresBg})`
        }}
      >
        <div className="absolute inset-0 bg-white/85"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-medium mb-6 shadow-lg">
            ⚡ Powerful Features
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Everything You Need for{' '}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Modern Business</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive POS solutions designed for restaurants, cafes, and retail stores.
          </p>
        </div>

        {/* Feature Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {Object.values(featuresData).map((category, categoryIndex) => {
            const featuresToShow = showAllFeatures 
              ? category.features 
              : category.features.slice(0, initialFeatureCount);

            return (
              <Card 
                key={category.name}
                className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in bg-white"
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                <div className={`h-1 bg-gradient-to-r ${category.color}`}></div>
                
                <CardContent className="p-8">
                  {/* Category Header */}
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.name}</h3>
                    <p className="text-gray-600 font-medium">{category.subtitle}</p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3">
                    {featuresToShow.map((feature, featureIndex) => (
                      <div 
                        key={feature}
                        className="flex items-start space-x-3 animate-fade-in opacity-0"
                        style={{ 
                          animationDelay: `${(categoryIndex * 200) + (featureIndex * 50)}ms`,
                          animationFillMode: 'forwards'
                        }}
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} mt-2 flex-shrink-0`}></div>
                        <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                    
                    {!showAllFeatures && category.features.length > initialFeatureCount && (
                      <div className="text-center pt-4">
                        <span className="text-gray-500 text-sm">
                          +{category.features.length - initialFeatureCount} more features
                        </span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Show More Button */}
        {!showAllFeatures && (
          <div className="text-center animate-fade-in">
            <Button 
              onClick={() => setShowAllFeatures(true)}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Show All Features
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Button>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-20 text-center bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-12 shadow-2xl animate-fade-in">
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using SparkServes to streamline operations and boost revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              className="bg-white text-orange-500 border-white hover:bg-orange-50 px-8 py-6 text-lg font-semibold rounded-2xl"
              onClick={() => window.location.href = '/demo'}
            >
              Start Free Trial
            </Button>
            <Button 
              variant="ghost"
              className="text-white border-white border-2 hover:bg-white hover:text-orange-500 px-8 py-6 text-lg font-semibold rounded-2xl"
              onClick={() => window.location.href = '/demo'}
            >
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;