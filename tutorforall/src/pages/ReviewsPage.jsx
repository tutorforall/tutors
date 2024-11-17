import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Quote, Filter, ArrowUp, MessageCircle } from 'lucide-react';

const ReviewsPage = () => {
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [selectedRating, setSelectedRating] = useState('All');

  const successStories = [
    {
      id: 1,
      name: "Alex Thompson",
      image: "/api/placeholder/150/150",
      subject: "Mathematics",
      story: "Thanks to TutorForAll, I improved my calculus grade from a C to an A. My tutor helped me understand complex concepts through clear explanations and practice problems.",
      rating: 5,
      improvement: "Grade improved from C to A",
      university: "Stanford University",
      date: "March 2024"
    },
    {
      id: 2,
      name: "Maria Garcia",
      image: "/api/placeholder/150/150",
      subject: "Physics",
      story: "The one-on-one tutoring sessions completely transformed my understanding of quantum mechanics. I went from struggling to excelling in my advanced physics course.",
      rating: 5,
      improvement: "Ranked top of class",
      university: "MIT",
      date: "February 2024"
    },
    {
      id: 3,
      name: "David Chen",
      image: "/api/placeholder/150/150",
      subject: "Computer Science",
      story: "The programming support I received was exceptional. My tutor helped me master data structures and algorithms, leading to a successful internship placement.",
      rating: 5,
      improvement: "Secured dream internship",
      university: "UC Berkeley",
      date: "January 2024"
    }
  ];

  const reviews = [
    {
      id: 1,
      name: "Emma Wilson",
      subject: "Chemistry",
      rating: 5,
      comment: "Outstanding support! My tutor explained organic chemistry reactions in a way that finally made sense.",
      date: "2 days ago"
    },
    {
      id: 2,
      name: "James Miller",
      subject: "English Literature",
      rating: 4,
      comment: "Great help with my essay writing. Improved my analytical skills significantly.",
      date: "1 week ago"
    },
    {
      id: 3,
      name: "Sophie Clark",
      subject: "Biology",
      rating: 5,
      comment: "Excellent tutoring sessions. Made complex biological processes easy to understand.",
      date: "2 weeks ago"
    },
    {
      id: 4,
      name: "Michael Zhang",
      subject: "Mathematics",
      rating: 5,
      comment: "The best math tutoring I've ever received. Clear explanations and patient teaching.",
      date: "3 weeks ago"
    }
  ];

  const subjects = ['All', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science', 'English'];
  const ratings = ['All', '5 Stars', '4 Stars', '3 Stars'];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Student Success Stories
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            See how TutorForAll has helped thousands of students achieve their academic goals.
          </p>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <Card key={story.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-6">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-24 h-24 rounded-full"
                    />
                  </div>
                  <div className="text-center mb-4">
                    <h3 className="font-bold text-xl mb-1">{story.name}</h3>
                    <p className="text-gray-600">{story.university}</p>
                  </div>
                  <div className="flex justify-center mb-4">
                    {renderStars(story.rating)}
                  </div>
                  <Quote className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4 text-center">{story.story}</p>
                  <div className="text-center">
                    <span className="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-full">
                      {story.improvement}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Student Reviews</h2>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              <span>Filter by:</span>
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
            <div className="flex flex-wrap gap-2">
              {ratings.map((rating) => (
                <Button
                  key={rating}
                  variant={selectedRating === rating ? "default" : "outline"}
                  onClick={() => setSelectedRating(rating)}
                >
                  {rating}
                </Button>
              ))}
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review) => (
              <Card key={review.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold">{review.name}</h3>
                      <p className="text-gray-600">{review.subject}</p>
                    </div>
                    <div className="flex">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{review.comment}</p>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button size="lg">Load More Reviews</Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "4.9/5", label: "Average Rating", icon: <Star className="h-8 w-8" /> },
              { number: "10,000+", label: "Happy Students", icon: <MessageCircle className="h-8 w-8" /> },
              { number: "95%", label: "Success Rate", icon: <ArrowUp className="h-8 w-8" /> },
              { number: "98%", label: "Would Recommend", icon: <Quote className="h-8 w-8" /> }
            ].map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="py-6">
                  <div className="flex justify-center mb-4 text-blue-600">
                    {stat.icon}
                  </div>
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
          <h2 className="text-3xl font-bold mb-6">Join Our Success Stories</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start your journey towards academic excellence today.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Get Started Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ReviewsPage;

Create ReviewsPage component
