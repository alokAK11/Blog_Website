import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock, Heart, MessageCircle, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar?: string;
  };
  publishedAt: string;
  readTime: string;
  category: string;
  likes: number;
  comments: number;
  image?: string;
  featured?: boolean;
}

const BlogCard = ({ 
  id, 
  title, 
  excerpt, 
  author, 
  publishedAt, 
  readTime, 
  category, 
  likes, 
  comments, 
  image, 
  featured = false 
}: BlogCardProps) => {
  return (
    <Card className={`group cursor-pointer transition-all duration-300 hover:shadow-card-hover ${
      featured ? "border-primary/20 bg-gradient-to-br from-background to-primary/5" : ""
    }`}>
      {image && (
        <div className="relative overflow-hidden rounded-t-lg">
          <Link to={`/blog/${id}`}>
            <img 
              src={image} 
              alt={title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
          {featured && (
            <Badge className="absolute top-3 left-3 bg-blog-gradient text-white border-0">
              Featured
            </Badge>
          )}
        </div>
      )}
      
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <Bookmark className="h-4 w-4" />
          </Button>
        </div>
        
        <Link to={`/blog/${id}`}>
          <h3 className={`font-bold leading-tight transition-colors group-hover:text-primary ${
            featured ? "text-xl" : "text-lg"
          }`}>
            {title}
          </h3>
        </Link>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link to={`/profile/${author.name}`} className="flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={author.avatar} alt={author.name} />
                <AvatarFallback className="text-xs bg-primary/10">
                  {author.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                {author.name}
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Clock className="h-3 w-3" />
              <span>{readTime}</span>
            </div>
            <span>•</span>
            <span>{publishedAt}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 pt-3 border-t">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="h-8 px-3 text-muted-foreground hover:text-red-500">
              <Heart className="h-4 w-4 mr-1" />
              {likes}
            </Button>
            <Button variant="ghost" size="sm" className="h-8 px-3 text-muted-foreground hover:text-primary">
              <MessageCircle className="h-4 w-4 mr-1" />
              {comments}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;