"use client";

import { FullkodCredit } from "@/components/layouts/FullkodCredit";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="relative min-h-dvh bg-cream">
      <main className="flex min-h-dvh items-center justify-center px-4 py-10">
        {children}
      </main>
      <div className="pointer-events-none absolute inset-x-0 bottom-3 flex justify-center px-6">
        <FullkodCredit className="pointer-events-auto" />
      </div>
    </div>
  );
}
