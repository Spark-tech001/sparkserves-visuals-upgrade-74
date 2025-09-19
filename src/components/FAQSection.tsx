import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "Does the system work offline?",
      answer: "Yes, our POS system includes offline mode functionality. You can continue processing sales even when your internet connection is interrupted. All data will automatically sync when the connection is restored."
    },
    {
      question: "Can I integrate my existing tools?",
      answer: "Absolutely! SparkServes integrates with over 100+ popular business tools including accounting software, payment processors, marketing platforms, and inventory management systems. Our API also allows for custom integrations."
    },
    {
      question: "What payment processors do you support?",
      answer: "We support all major payment processors including Square, Stripe, PayPal, and many others. We also support traditional credit card terminals, mobile payments, contactless payments, and digital wallets."
    },
    {
      question: "Is there a contract or can I cancel anytime?",
      answer: "There are no long-term contracts required. You can cancel your subscription at any time with 30 days notice. We believe in earning your business every month with excellent service and features."
    },
    {
      question: "Do you offer training for my staff?",
      answer: "Yes! We provide comprehensive training for your team including video tutorials, live training sessions, detailed documentation, and ongoing support. Our goal is to ensure your staff feels confident using the system."
    },
    {
      question: "How secure is my data?",
      answer: "Security is our top priority. We use bank-level encryption, are PCI DSS compliant, and store all data in secure, redundant data centers. Regular security audits and updates ensure your business data stays protected."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            ❓ FAQ
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Frequently Asked{' '}
            <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about SparkServes. Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-xl px-6 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary transition-colors duration-300 hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '800ms' }}>
          <div className="bg-muted/50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our support team is here to help. Get in touch and we'll answer any questions you have about SparkServes.
            </p>
            <button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-button"
              onClick={() => window.open('https://wa.me/919471359517?text=Hi, I have a question about SparkServes. Could you please help me?', '_blank')}
            >
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;