import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, Calendar, Clock, User, Tag, ArrowRight } from 'lucide-react';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const featuredPosts = [
    {
      id: 1,
      title: "10 Effective Study Techniques for Better Academic Performance",
      excerpt: "Discover scientifically-proven study methods that can help you retain information better and improve your grades.",
      image: "/api/placeholder/800/400",
      author: "Dr. Sarah Johnson",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Study Tips"
    },
    {
      id: 2,
      title: "How to Write a Perfect Research Paper: Step-by-Step Guide",
      excerpt: "Learn the essential steps to writing a well-structured research paper that will impress your professors.",
      image: "/api/placeholder/800/400",
      author: "Prof. Michael Chen",
      date: "March 12, 2024",
      readTime: "12 min read",
      category: "Academic Writing"
    }
  ];

  const blogPosts = [
    {
      id: 3,
      title: "Managing Academic Stress: A Student's Guide",
      excerpt: "Practical tips and strategies for handling academic pressure while maintaining your mental health.",
      image: "/api/placeholder/400/300",
      author: "Emma Williams",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Student Life"
    },
    {
      id: 4,
      title: "The Power of Active Learning in Online Education",
      excerpt: "Explore how active learning techniques can enhance your online learning experience.",
      image: "/api/placeholder/400/300",
      author: "Dr. James Anderson",
      date: "March 8, 2024",
      readTime: "7 min read",
      category: "Online Learning"
    },
    {
      id: 5,
      title: "Essential Math Study Tips for College Students",
      excerpt: "Master mathematical concepts with these proven study strategies and tips.",
      image: "/api/placeholder/400/300",
      author: "Prof. Lisa Chen",
      date: "March 5, 2024",
      readTime: "9 min read",
      category: "Mathematics"
    },
    {
      id: 6,
      title: "How to Prepare for Final Exams: Expert Advice",
      excerpt: "Comprehensive guide to organizing your study schedule and maximizing your exam performance.",
      image: "/api/placeholder/400/300",
      author: "David Miller",
      date: "March 3, 2024",
      readTime: "10 min read",
      category: "Exam Prep"
    }
  ];

  const categories = [
    'All',
    'Study Tips',
    'Academic Writing',
    'Student Life',
    'Online Learning',
    'Mathematics',
    'Exam Prep'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            TutorForAll Blog
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Tips, guides, and insights to help you excel in your academic journey
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-2 w-full md:w-80 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2" />
                        <span className="text-sm text-gray-600">{post.author}</span>
                      </div>
                      <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{post.author}</span>
                      <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button size="lg">
              Load More Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-8">
            Get the latest articles, study tips, and student resources delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none sm:w-80"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.filter(cat => cat !== 'All').map((category) => (
              <Card key={category} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Tag className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold">{category}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;


Create BlogPage component
