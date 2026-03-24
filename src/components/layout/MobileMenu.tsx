"use client";

import { Home, Building2, PhoneCall, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { useState } from "react";

export function MobileMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // App-like bottom navigation items
  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Projects", href: "/projects", icon: Building2 },
    { name: "Contact", href: "/contact", icon: PhoneCall },
  ];

  return (
    <>
      {/* App-like Sticky Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-background border-t z-50 flex items-center justify-around px-2 pb-safe">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${
                isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
              }`}
            >
              <item.icon className={`w-5 h-5 ${isActive ? "fill-primary/20" : ""}`} />
              <span className="text-[10px] font-medium">{item.name}</span>
            </Link>
          );
        })}

        {/* More Menu Trigger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="flex flex-col items-center justify-center w-full h-full space-y-1 text-muted-foreground hover:text-primary">
              <Menu className="w-5 h-5" />
              <span className="text-[10px] font-medium">More</span>
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[85vw] sm:w-[350px] p-0 flex flex-col">
            <div className="p-6 border-b">
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription className="sr-only">Mobile Navigation Menu</SheetDescription>
            </div>
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              <div className="space-y-3">
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Company</div>
                <div className="grid gap-2">
                  <MobileLink href="/our-story" setOpen={setOpen}>Our Story</MobileLink>
                  <MobileLink href="/career" setOpen={setOpen}>Career</MobileLink>
                  <MobileLink href="/our-impact" setOpen={setOpen}>Our Impact</MobileLink>
                  <MobileLink href="/investors" setOpen={setOpen}>Investors</MobileLink>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Resources</div>
                <div className="grid gap-2">
                  <MobileLink href="/nri-corner" setOpen={setOpen}>NRI Corner</MobileLink>
                  <MobileLink href="/downloads" setOpen={setOpen}>Downloads</MobileLink>
                  <MobileLink href="/media-center" setOpen={setOpen}>Media Center</MobileLink>
                  <MobileLink href="/gallery" setOpen={setOpen}>Gallery</MobileLink>
                  <MobileLink href="/blog" setOpen={setOpen}>Blog</MobileLink>
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Tools</div>
                <div className="grid gap-2">
                  <MobileLink href="/buyers-guide" setOpen={setOpen}>Buyers Guide</MobileLink>
                  <MobileLink href="/emi-calculator" setOpen={setOpen}>EMI Calculator</MobileLink>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}

function MobileLink({ href, setOpen, children }: { href: string; setOpen: (open: boolean) => void; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      onClick={() => setOpen(false)}
      className="block py-2 text-lg font-medium hover:text-primary transition-colors"
    >
      {children}
    </Link>
  );
}
