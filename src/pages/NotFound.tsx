import { Link } from "react-router-dom";
import { ArrowLeft, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center py-20 px-6 bg-sky-pale min-h-[70vh] text-center">
      <div className="max-w-md mx-auto">
        <h1 className="text-8xl font-extrabold font-heading text-sky-primary mb-4 leading-none">404</h1>
        <h2 className="text-2xl font-bold font-heading text-foreground mb-4">Page Not Found</h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-8">
          The requested page is missing or has been relocated to another route link. Let's return back to home.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild variant="sky">
            <Link to="/">
              <ArrowLeft className="h-4 w-4" />
              Return Home
            </Link>
          </Button>
          <Button onClick={() => window.location.reload()} variant="outline">
            <RefreshCw className="h-4 w-4" />
            Reload Page
          </Button>
        </div>
      </div>
    </div>
  );
}
