"use client";

export function HomeFooter() {
  return (
    <footer className="w-full py-12 px-8 bg-surface-container-highest border-t border-outline-variant/20">
      <div className="max-w-full mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-on-surface-variant font-body">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-bold text-on-surface text-base mb-1 font-headline">Shimaya</span>
          <p>© 2026 Shimaya. All rights reserved.</p>
        </div>
        <div className="flex gap-8">
          <a className="hover:text-primary transition-colors" href="#">
            Lighthouse 98 Score
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            Privacy Policy
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
