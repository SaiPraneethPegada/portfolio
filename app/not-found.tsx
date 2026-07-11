import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-24 sm:py-32 text-center">
      <p className="font-mono text-sm text-primary mb-4">404</p>
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
        Page not found
      </h1>
      <p className="text-muted-foreground mb-8 max-w-md mx-auto">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Button render={<Link href="/" />} nativeButton={false}>
        Back to home
      </Button>
    </div>
  );
}
