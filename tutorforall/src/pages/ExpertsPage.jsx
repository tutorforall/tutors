import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, BookOpen, ThumbsUp, Search } from 'lucide-react';

const ExpertsPage = () => {
  const [selectedSubject, setSelectedSubject] = useState('All');

  const experts = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      image: "/api/placeholder/200/200",
      subjects: ["Mathematics", "Physics"],
      education: "Ph.D. in Applied Mathematics",
      rating: 4.9,
      reviews: 156,
      experience: "8 years",
      description: "Specializes in advanced mathematics and physics. Passionate about making complex concepts easy to understand."
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      image: "/api/placeholder/200/200",
      subjects: ["Computer Science", "Programming"],
      education: "Masters in Computer Science",
      rating: 4.8,
      reviews: 142,
      experience: "10 years",
      description: "Expert in programming languages and algorithms. Helps students develop strong coding skills."
    },
    {
      id: 3,
      name: "Dr. Emily Williams",
      image: "/api/placeholder/200/200",
      subjects: ["Chemistry", "Biology"],
      education: "Ph.D. in Chemistry",
      rating: 4.9,
      reviews: 189,
      experience: "12 years",
      description: "Specializes in organic chemistry and molecular biology. Makes science engaging and accessible."
    },
    {
      id: 4,
      name: "Prof. James Anderson",
      image: "/api/placeholder/200/200",
      subjects: ["English Literature", "Writing"],
      education: "Masters in English Literature",
      rating: 4.7,
      reviews: 167,
      experience: "15 years",
      description: "Expert in essay writing and literary analysis. Helps students develop strong writing skills."
    }
  ];

  const subjects = ['All', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science', 'English Literature'];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our Expert Tutors
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Learn from highly qualified professionals with years of teaching experience.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search experts..."
                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {subjects.map((subject) => (
                <Button
                  key={subject}
                  variant={selectedSubject === subject ? "default" : "outline"}
                  onClick={() => setSelectedSubject(subject)}
                >
                  {subject}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experts.map((expert) => (
              <Card key={expert.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    <img
                      src={expert.image}
                      alt={expert.name}
                      className="w-32 h-32 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{expert.name}</h3>
                      <p className="text-gray-600 mb-2">{expert.education}</p>
                      <div className="flex items-center gap-4 mb-2">
                        <div className="flex items-center">
                          <Star className="h-5 w-5 text-yellow-400" />
                          <span className="ml-1">{expert.rating}</span>
                        </div>
                        <div className="flex items-center">
                          <ThumbsUp className="h-5 w-5 text-blue-500" />
                          <span className="ml-1">{expert.reviews} reviews</span>
                        </div>
                        <div className="flex items-center">
                          <BookOpen className="h-5 w-5 text-green-500" />
                          <span className="ml-1">{expert.experience}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {expert.subjects.map((subject) => (
                          <span
                            key={subject}
                            className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                      <p className="text-gray-600 mb-4">{expert.description}</p>
                      <Button className="w-full">Book a Session</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Expert Tutors" },
              { number: "50+", label: "Subjects" },
              { number: "98%", label: "Satisfaction Rate" },
              { number: "24/7", label: "Support" }
            ].map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="py-6">
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

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Learn from the Best?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book a session with one of our expert tutors and take your learning to the next level.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Find Your Tutor
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ExpertsPage;

Create ExpertsPage component
