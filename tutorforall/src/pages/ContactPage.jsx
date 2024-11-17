import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, MessageCircle, Clock, Send } from 'lucide-react';

const ContactPage = () => {
  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Support",
      description: "24/7 Helpline Available",
      contact: "+91 9680212751",
      availability: "Mon-Sun: 24/7"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Support",
      description: "Quick Response Time",
      contact: "help@tutorforall.com",
      availability: "Response within 2 hours"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Live Chat",
      description: "Instant Support",
      contact: "Available on Website",
      availability: "24/7 Service"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Office Location",
      description: "Main Campus Center",
      contact: "123 Education St, Suite 100",
      availability: "Mon-Fri: 9 AM - 6 PM"
    }
  ];

  const faqs = [
    {
      question: "How quickly can I get help with my assignment?",
      answer: "We provide immediate assistance. You can typically connect with a tutor within 15-30 minutes of submitting your request."
    },
    {
      question: "What subjects do you cover?",
      answer: "We cover a wide range of subjects including Mathematics, Sciences, Engineering, Humanities, Business, and more. Check our services page for a complete list."
    },
    {
      question: "How are your tutors verified?",
      answer: "All our tutors go through a rigorous verification process including academic credential verification, background checks, and teaching ability assessment."
    },
    {
      question: "What are your payment options?",
      answer: "We accept all major credit cards, PayPal, and bank transfers. Payment is secure and encrypted."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We're here to help! Reach out to us through any of our support channels.
          </p>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4 text-blue-600">
                    {method.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <p className="font-semibold text-blue-600 mb-2">{method.contact}</p>
                  <p className="text-sm text-gray-500">
                    <Clock className="h-4 w-4 inline mr-1" />
                    {method.availability}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-center mb-8">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Billing Question</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Type your message here..."
                  />
                </div>
                <Button className="w-full" size="lg">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">Map Component Goes Here</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of students already benefiting from our services.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Start Learning Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

Create ContactPage component
