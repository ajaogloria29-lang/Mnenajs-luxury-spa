import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background pt-20">
      <div className="text-center px-4">
        <h1 className="mb-4 text-6xl md:text-8xl font-bold text-accent">404</h1>
        <h2 className="mb-4 text-3xl md:text-4xl font-semibold">Page Not Found</h2>
        <p className="mb-8 text-lg text-muted-foreground max-w-md mx-auto">
          The page you're looking for doesn't exist. Let's get you back to relaxation.
        </p>
        <Link to="/">
          <Button variant="gold" size="lg">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
