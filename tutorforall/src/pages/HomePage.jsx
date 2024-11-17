import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Users, Star, Clock } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Expert Tutoring",
      description: "One-on-one sessions with qualified tutors"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Assignment Help",
      description: "Professional guidance for all assignments"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "High Success Rate",
      description: "95% student satisfaction rate"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Support",
      description: "Round-the-clock academic assistance"
    }
  ];

  const subjects = [
    "Mathematics", "Physics", "Chemistry", "Biology",
    "Computer Science", "English", "History", "Economics"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Your Path to Academic Excellence
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get expert help with assignments, homework, and one-on-one tutoring from qualified professionals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-16">
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

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Excel in Your Studies?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of students who have achieved academic success with our help.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Start Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

Create HomePage component
