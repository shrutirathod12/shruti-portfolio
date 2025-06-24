"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#resume', label: 'Resume' },
  { href: '#contact', label: 'Contact' },
];

const Header = () => {
  const isMobile = useIsMobile();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let newActiveLink = '#home';

      for (let i = navLinks.length - 1; i >= 0; i--) {
        const link = navLinks[i];
        const section = document.getElementById(link.href.substring(1));
        if (section && section.offsetTop <= scrollY + 150) {
          newActiveLink = link.href;
          break;
        }
      }
      setActiveLink(newActiveLink);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    if (isMobile) {
      setIsSheetOpen(false);
    }
  };

  const NavContent = () => (
    <nav className="flex flex-col md:flex-row items-center gap-6 text-lg md:text-sm font-medium">
      {navLinks.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          onClick={() => handleLinkClick(href)}
          className={cn(
            "transition-colors",
            activeLink === href
              ? "text-primary font-semibold text-glow"
              : "text-foreground/80 hover:text-primary"
          )}
        >
          {label}
        </Link>
      ))}
    </nav>
  );

  return (
    <header className="sticky top-0 z-50 w-full glassmorphism">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#home" className="font-headline text-xl font-bold text-glow" onClick={() => handleLinkClick('#home')}>
          Portfolio
        </Link>
        {isMobile ? (
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background">
              <div className="flex flex-col items-start p-6 gap-8">
                <Link href="#home" className="font-headline text-xl font-bold text-glow mb-4" onClick={() => handleLinkClick('#home')}>
                  Portfolio
                </Link>
                <NavContent />
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <NavContent />
        )}
      </div>
    </header>
  );
};

export default Header;
