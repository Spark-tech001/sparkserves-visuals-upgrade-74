import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const DemoForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    storeType: '',
    inquireFor: '',
    contactNumber: '',
    email: '',
    location: '',
    additional_notes: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.storeType || !formData.inquireFor || !formData.contactNumber || !formData.email || !formData.location) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // Phone validation (basic)
    const phoneRegex = /^[0-9+\-\s()]+$/;
    if (!phoneRegex.test(formData.contactNumber)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid phone number.",
        variant: "destructive",
      });
      return;
    }

    try {
      // Store data in Supabase database
      const { error } = await supabase
        .from('demo_requests')
        .insert([
          {
            name: formData.name,
            store_type: formData.storeType,
            inquire_for: formData.inquireFor,
            contact_number: formData.contactNumber,
            email: formData.email,
            location: formData.location,
            additional_notes: formData.additional_notes || null
          }
        ]);

      if (error) {
        console.error('Error storing demo request:', error);
        toast({
          title: "Error",
          description: "Failed to submit demo request. Please try again.",
          variant: "destructive",
        });
        return;
      }

      // Form submitted successfully - no WhatsApp redirect
      
      toast({
        title: "Demo Request Submitted!",
        description: "Your request has been saved successfully. Our team will contact you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        storeType: '',
        inquireFor: '',
        contactNumber: '',
        email: '',
        location: '',
        additional_notes: ''
      });
    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            🚀 Get Your Demo
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Transform{' '}
            <span className="text-primary">Your Business?</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get a personalized demo of SparkServes and see how our POS system can revolutionize your operations. 
            Fill out the form below and our team will contact you within 24 hours.
          </p>
        </div>

        {/* Demo Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-card border-0 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle className="text-2xl text-center text-foreground">
                Schedule Your Free Demo
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground font-medium">Full Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="mt-2 transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="storeType" className="text-foreground font-medium">Store Type *</Label>
                  <Select onValueChange={(value) => handleInputChange('storeType', value)} value={formData.storeType}>
                    <SelectTrigger className="mt-2 transition-all duration-300 focus:ring-2 focus:ring-primary/20">
                      <SelectValue placeholder="Select your store type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="restaurant">Restaurant</SelectItem>
                      <SelectItem value="cafe">Cafe/Coffee Shop</SelectItem>
                      <SelectItem value="fast-food">Fast Food</SelectItem>
                      <SelectItem value="retail">Retail Store</SelectItem>
                      <SelectItem value="bakery">Bakery</SelectItem>
                      <SelectItem value="bar">Bar/Pub</SelectItem>
                      <SelectItem value="food-truck">Food Truck</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="inquireFor" className="text-foreground font-medium">Inquire For *</Label>
                  <Select onValueChange={(value) => handleInputChange('inquireFor', value)} value={formData.inquireFor}>
                    <SelectTrigger className="mt-2 transition-all duration-300 focus:ring-2 focus:ring-primary/20">
                      <SelectValue placeholder="Select product you're interested in" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dine-flow">Dine Flow - Restaurant Management</SelectItem>
                      <SelectItem value="dine-ease">Dine Ease - Advanced POS</SelectItem>
                      <SelectItem value="store-assist">Store Assist - Retail Solution</SelectItem>
                      <SelectItem value="custom">Custom Solution</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="contactNumber" className="text-foreground font-medium">Contact Number *</Label>
                  <Input
                    id="contactNumber"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.contactNumber}
                    onChange={(e) => handleInputChange('contactNumber', e.target.value)}
                    className="mt-2 transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground font-medium">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="mt-2 transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="location" className="text-foreground font-medium">Location *</Label>
                  <Input
                    id="location"
                    type="text"
                    placeholder="City, State/Country"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="mt-2 transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="additional_notes" className="text-foreground font-medium">Additional Notes (Optional)</Label>
                  <Input
                    id="additional_notes"
                    type="text"
                    placeholder="Any specific requirements or questions?"
                    value={formData.additional_notes}
                    onChange={(e) => handleInputChange('additional_notes', e.target.value)}
                    className="mt-2 transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-semibold shadow-button hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Submit Demo Request
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </Button>
              </form>

              {/* Benefits */}
              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4 text-center">What to Expect:</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="text-sm font-medium text-foreground">30-Min Demo</div>
                    <div className="text-xs text-muted-foreground">Personalized walkthrough</div>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="text-sm font-medium text-foreground">Custom Setup</div>
                    <div className="text-xs text-muted-foreground">Tailored to your needs</div>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div className="text-sm font-medium text-foreground">24/7 Support</div>
                    <div className="text-xs text-muted-foreground">Always here to help</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DemoForm;