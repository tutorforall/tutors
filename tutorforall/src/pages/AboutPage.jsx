import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Target, Users, Award, BookOpen } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { number: "10,000+", label: "Students Helped" },
    { number: "95%", label: "Success Rate" },
    { number: "500+", label: "Expert Tutors" },
    { number: "50+", label: "Subjects Covered" }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Our Mission",
      description: "To empower students worldwide with personalized academic support, helping them achieve their educational goals and unlock their full potential."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: "Our Vision",
      description: "To be the world's most trusted platform for academic assistance, making quality education support accessible to every student."
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Our Values",
      description: "Excellence, integrity, and student success are at the core of everything we do. We believe in providing honest, ethical, and high-quality academic support."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About TutorForAll</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Your trusted partner in academic excellence since 2020. We're committed to helping students achieve their educational goals through personalized support and guidance.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose TutorForAll</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {[
                "Experienced and verified tutors",
                "24/7 academic support",
                "Personalized learning approach",
                "Comprehensive subject coverage",
                "Affordable pricing plans",
                "Money-back guarantee"
              ].map((point, index) => (
                <div key={index} className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Our Commitment to Quality</h3>
              <p className="text-gray-600 mb-6">
                We maintain high standards through rigorous tutor selection, regular quality assessments, and continuous improvement based on student feedback. Every session and assignment is handled with utmost professionalism and attention to detail.
              </p>
              <Button className="w-full">Learn More About Our Process</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Chief Executive Officer",
                image: "/api/placeholder/150/150"
              },
              {
                name: "David Chen",
                role: "Head of Academics",
                image: "/api/placeholder/150/150"
              },
              {
                name: "Emily Williams",
                role: "Student Success Director",
                image: "/api/placeholder/150/150"
              }
            ].map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community of successful students and take the first step towards academic excellence.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

Create AboutPage component
