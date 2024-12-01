"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Home, RotateCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center space-y-6">
        <AlertTriangle className="w-24 h-24 text-red-600 mx-auto" />
        <h1 className="text-4xl font-bold text-gray-900">500 - Server Error</h1>
        <p className="text-xl text-gray-600">
          Oops! Our system seems to be having a pop quiz.
        </p>
        <p className="text-lg text-gray-500">
          We&apos;re working on solving this problem. Please try again later.
        </p>
        <div className="flex justify-center space-x-4">
          <Button onClick={() => reset()} className="inline-flex items-center">
            <RotateCcw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
          <Button asChild variant="outline">
            <Link href="/" className="inline-flex items-center">
              <Home className="mr-2 h-4 w-4" />
              Back to Homepage
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
