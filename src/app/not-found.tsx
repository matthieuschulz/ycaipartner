import { AuroraBackground } from "@/components/ui/aurora-background";
import Link from "next/link";

export default function NotFound() {
  return (
    <AuroraBackground intensity="subtle">
      <div className="flex items-center justify-center min-h-screen text-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">Oops! Page not found</p>
          <Link href="/" className="text-blue-500 hover:text-blue-700 underline">
            Return to Home
          </Link>
        </div>
      </div>
    </AuroraBackground>
  );
} 