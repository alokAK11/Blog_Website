export const mockBlogs = [
  {
    id: "1",
    title: "Building Modern Web Applications with React and TypeScript",
    excerpt: "Explore the power of TypeScript in React development, from type safety to better developer experience. Learn best practices and common patterns that will make your code more maintainable.",
    author: {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b4e7b8f5?w=64&h=64&fit=crop&crop=face"
    },
    publishedAt: "2 days ago",
    readTime: "8 min read",
    category: "Development",
    likes: 142,
    comments: 23,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    featured: true,
    content: `
# Building Modern Web Applications with React and TypeScript

TypeScript has revolutionized the way we write React applications. In this comprehensive guide, we'll explore how to leverage TypeScript's powerful type system to build robust, maintainable web applications.

## Why TypeScript with React?

TypeScript brings static type checking to JavaScript, catching errors at compile time rather than runtime. When combined with React, it provides:

- **Type Safety**: Catch props mismatches and other errors before they reach production
- **Better Developer Experience**: Enhanced IDE support with autocomplete and refactoring tools
- **Self-Documenting Code**: Types serve as inline documentation for your components

## Getting Started

Let's start with a simple typed React component:

\`\`\`tsx
interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary' }) => {
  return (
    <button 
      className={\`btn btn-\${variant}\`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
\`\`\`

This approach ensures that anyone using your Button component will know exactly what props are required and what types they should be.
    `
  },
  {
    id: "2",
    title: "The Future of Web Design: Trends to Watch in 2024",
    excerpt: "From AI-powered design tools to immersive 3D experiences, discover the trends that are shaping the future of web design and user experience.",
    author: {
      name: "Alex Rodriguez",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
    },
    publishedAt: "1 week ago",
    readTime: "6 min read",
    category: "Design",
    likes: 89,
    comments: 15,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop"
  },
  {
    id: "3",
    title: "Mastering CSS Grid: A Complete Guide",
    excerpt: "CSS Grid is a powerful layout system that can handle complex designs with ease. Learn how to use Grid to create responsive, flexible layouts.",
    author: {
      name: "Emma Thompson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face"
    },
    publishedAt: "3 days ago",
    readTime: "12 min read",
    category: "CSS",
    likes: 234,
    comments: 41,
    image: "https://images.unsplash.com/photo-1545670723-196ed0954986?w=800&h=400&fit=crop"
  },
  {
    id: "4",
    title: "Building Scalable APIs with Node.js and Express",
    excerpt: "Learn how to design and implement robust, scalable APIs using Node.js and Express. Covers authentication, middleware, error handling, and more.",
    author: {
      name: "Michael Johnson",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
    },
    publishedAt: "5 days ago",
    readTime: "15 min read",
    category: "Backend",
    likes: 178,
    comments: 32,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop"
  },
  {
    id: "5",
    title: "UX/UI Best Practices for Mobile Apps",
    excerpt: "Creating intuitive mobile experiences requires understanding user behavior and platform conventions. Explore key principles for mobile design.",
    author: {
      name: "Lisa Park",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=64&h=64&fit=crop&crop=face"
    },
    publishedAt: "1 week ago",
    readTime: "10 min read",
    category: "UX/UI",
    likes: 156,
    comments: 28,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
    featured: true
  },
  {
    id: "6",
    title: "Getting Started with Machine Learning in JavaScript",
    excerpt: "Discover how to implement machine learning algorithms in JavaScript using TensorFlow.js. Build intelligent web applications with ease.",
    author: {
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=64&h=64&fit=crop&crop=face"
    },
    publishedAt: "4 days ago",
    readTime: "20 min read",
    category: "AI/ML",
    likes: 298,
    comments: 67,
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=400&fit=crop"
  }
];

export const categories = [
  "All",
  "Development", 
  "Design",
  "CSS",
  "Backend",
  "UX/UI",
  "AI/ML"
];