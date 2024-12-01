import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center space-y-6">
        <BookOpen className="w-24 h-24 text-blue-600 mx-auto" />
        <h1 className="text-4xl font-bold text-gray-900">
          404 - Page Not Found
        </h1>
        <p className="text-xl text-gray-600">
          Oops! It seems this page is playing hooky.
        </p>
        <p className="text-lg text-gray-500">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button asChild className="mt-4">
          <Link href="/" className="inline-flex items-center">
            <Home className="mr-2 h-4 w-4" />
            Back to Homepage
          </Link>
        </Button>
      </div>
    </div>
  );
}
