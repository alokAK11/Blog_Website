import { useParams, Link } from "react-router-dom";
import { mockBlogs } from "@/data/mockBlogs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft, Heart, MessageCircle, Share2, Bookmark, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const blog = mockBlogs.find(b => b.id === id);

  if (!blog) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <article className="container max-w-4xl py-8">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="secondary">{blog.category}</Badge>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="h-4 w-4 mr-1" />
              {blog.readTime}
            </div>
          </div>
          
          <h1 className="text-4xl font-bold leading-tight mb-6">{blog.title}</h1>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={blog.author.avatar} alt={blog.author.name} />
                <AvatarFallback>{blog.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{blog.author.name}</p>
                <p className="text-sm text-muted-foreground">{blog.publishedAt}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <Heart className="h-4 w-4 mr-2" />
                {blog.likes}
              </Button>
              <Button variant="ghost" size="sm">
                <MessageCircle className="h-4 w-4 mr-2" />
                {blog.comments}
              </Button>
              <Button variant="ghost" size="sm">
                <Bookmark className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </header>

        {blog.image && (
          <div className="mb-8 rounded-xl overflow-hidden">
            <img 
              src={blog.image} 
              alt={blog.title}
              className="w-full h-96 object-cover"
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none">
          {blog.content ? (
            <div className="leading-relaxed space-y-6">
              {blog.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('#')) {
                  const level = paragraph.match(/^#+/)?.[0].length || 1;
                  const text = paragraph.replace(/^#+\s*/, '');
                  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
                  return (
                    <Tag key={index} className={`font-bold ${
                      level === 1 ? 'text-3xl' : level === 2 ? 'text-2xl' : 'text-xl'
                    } mt-8 mb-4`}>
                      {text}
                    </Tag>
                  );
                }
                if (paragraph.startsWith('```')) {
                  return (
                    <Card key={index} className="my-6">
                      <CardContent className="p-4">
                        <pre className="text-sm overflow-x-auto">
                          <code>{paragraph.replace(/```\w*\n?/, '').replace(/```$/, '')}</code>
                        </pre>
                      </CardContent>
                    </Card>
                  );
                }
                if (paragraph.startsWith('- **') || paragraph.startsWith('- ')) {
                  return (
                    <ul key={index} className="space-y-2 ml-4">
                      {paragraph.split('\n').map((item, i) => (
                        <li key={i} className="list-disc">
                          {item.replace(/^- \*\*(.*?)\*\*:\s*/, '<strong>$1:</strong> ')
                            .replace(/^- /, '')}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={index} className="text-foreground leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          ) : (
            <p className="text-foreground leading-relaxed">{blog.excerpt}</p>
          )}
        </div>

        <footer className="mt-12 pt-8 border-t">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="hover:bg-red-50 hover:text-red-600 hover:border-red-200">
                <Heart className="h-4 w-4 mr-2" />
                Like ({blog.likes})
              </Button>
              <Button variant="outline">
                <MessageCircle className="h-4 w-4 mr-2" />
                Comment ({blog.comments})
              </Button>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <Bookmark className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default BlogDetail;