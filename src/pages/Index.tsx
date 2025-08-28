import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import BlogCard from "@/components/BlogCard";
import { mockBlogs } from "@/data/mockBlogs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Users, BookOpen, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const featuredBlogs = mockBlogs.filter(blog => blog.featured);
  const recentBlogs = mockBlogs.slice(0, 4);
  const popularBlogs = mockBlogs.sort((a, b) => b.likes - a.likes).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-10" />
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blog-gradient text-white border-0 px-4 py-2">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Welcome to BlogHub
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Share Your{" "}
                  <span className="bg-text-gradient bg-clip-text text-transparent">
                    Ideas
                  </span>{" "}
                  with the World
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  Discover amazing stories, thinking, and expertise from writers on any topic. 
                  Join our community of creators and readers.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blog-gradient hover:opacity-90 px-8 py-6 text-lg">
                  Start Writing
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Link to="/blogs">
                  <Button variant="outline" size="lg" className="px-8 py-6 text-lg w-full sm:w-auto">
                    Explore Blogs
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">Readers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">1.2K+</div>
                  <div className="text-sm text-muted-foreground">Writers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">5K+</div>
                  <div className="text-sm text-muted-foreground">Articles</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-blog-gradient rounded-3xl transform rotate-3 opacity-20" />
              <img 
                src={heroImage} 
                alt="Modern workspace" 
                className="relative rounded-3xl shadow-2xl w-full h-96 lg:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blogs */}
      {featuredBlogs.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">Featured Stories</h2>
                <p className="text-muted-foreground">Hand-picked articles from our community</p>
              </div>
              <Link to="/blogs">
                <Button variant="outline">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredBlogs.map((blog) => (
                <BlogCard key={blog.id} {...blog} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Popular This Week */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <TrendingUp className="h-6 w-6 text-primary" />
              <div>
                <h2 className="text-3xl font-bold">Trending This Week</h2>
                <p className="text-muted-foreground">Most liked articles by our readers</p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularBlogs.map((blog) => (
              <BlogCard key={blog.id} {...blog} />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-primary" />
              <div>
                <h2 className="text-3xl font-bold">Latest Articles</h2>
                <p className="text-muted-foreground">Fresh content from our writers</p>
              </div>
            </div>
            <Link to="/blogs">
              <Button variant="outline">
                View All Posts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentBlogs.map((blog) => (
              <BlogCard key={blog.id} {...blog} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Share Your Story?</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join thousands of writers who are already sharing their knowledge, 
              experiences, and insights with our growing community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blog-gradient hover:opacity-90 px-8 py-6 text-lg">
                <Users className="mr-2 h-5 w-5" />
                Join Our Community
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-muted/50">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-blog-gradient flex items-center justify-center">
                  <BookOpen className="h-4 w-4 text-white" />
                </div>
                <span className="text-xl font-bold bg-text-gradient bg-clip-text text-transparent">
                  BlogHub
                </span>
              </div>
              <p className="text-muted-foreground">
                A platform for writers and readers to connect, share, and discover amazing content.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Features</div>
                <div>Pricing</div>
                <div>API</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Writers</div>
                <div>Readers</div>
                <div>Guidelines</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Help Center</div>
                <div>Contact</div>
                <div>Privacy</div>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 BlogHub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;