import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Video, PenTool, MessageCircle, Clock, CheckCircle } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: <BookOpen className="h-12 w-12 text-blue-600" />,
      title: "Assignment Help",
      description: "Expert assistance with all types of academic assignments",
      features: [
        "24/7 support",
        "Plagiarism-free work",
        "On-time delivery",
        "Multiple revisions"
      ],
      price: "From $25/page"
    },
    {
      icon: <Video className="h-12 w-12 text-blue-600" />,
      title: "Live Tutoring",
      description: "One-on-one sessions with expert tutors",
      features: [
        "Flexible scheduling",
        "Interactive whiteboard",
        "Screen sharing",
        "Session recordings"
      ],
      price: "From $40/hour"
    },
    {
      icon: <PenTool className="h-12 w-12 text-blue-600" />,
      title: "Homework Help",
      description: "Step-by-step guidance for homework problems",
      features: [
        "Quick responses",
        "Detailed explanations",
        "Practice problems",
        "Progress tracking"
      ],
      price: "From $15/question"
    },
    {
      icon: <MessageCircle className="h-12 w-12 text-blue-600" />,
      title: "Essay Writing Support",
      description: "Guidance for writing and editing essays",
      features: [
        "Structure planning",
        "Research assistance",
        "Citation help",
        "Proofreading"
      ],
      price: "From $30/page"
    }
  ];

  const subjects = [
    "Mathematics", "Physics", "Chemistry", "Biology",
    "Computer Science", "English Literature", "History",
    "Economics", "Business", "Psychology", "Engineering",
    "Statistics"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Academic Services
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Comprehensive academic support tailored to your needs. Choose from our range of services designed to help you excel.
          </p>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-4 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-blue-600 mb-4">
                      {service.price}
                    </p>
                    <Button className="w-full">Get Started</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Subjects We Cover</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {subjects.map((subject, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="py-6">
                  <p className="font-medium">{subject}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, text: "Choose your service", icon: <Clock className="h-8 w-8" /> },
              { step: 2, text: "Select your subject", icon: <BookOpen className="h-8 w-8" /> },
              { step: 3, text: "Provide details", icon: <PenTool className="h-8 w-8" /> },
              { step: 4, text: "Get expert help", icon: <MessageCircle className="h-8 w-8" /> }
            ].map(item => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold mb-2">Step {item.step}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Choose the service that best fits your needs and take the first step towards academic success.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            View Pricing Plans
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

Create ServicesPage component
