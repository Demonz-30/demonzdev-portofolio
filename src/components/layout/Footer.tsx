"use client";

import { content } from "@/data/content";
import { TransitionLink } from "@/components/layout/PageTransition";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "WORK", href: "/work" },
  { label: "ABOUT", href: "/about" },
  { label: "CREATIVE", href: "/creative" },
  { label: "CONTACT", href: "/contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-12 md:py-16 px-6 md:px-12 border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
          <div className="max-w-sm flex flex-col">
            <div className="flex items-center gap-3">
              <span className="text-lg font-black tracking-tighter text-white uppercase">
                DEMONZDEV
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-purple-light animate-pulse" />
            </div>
            <span className="text-[11px] font-mono text-brand-purple-light uppercase tracking-wider mt-1 block">
              Creative Technologist &amp; Product Engineer
            </span>
            <p className="text-xs text-zinc-400 font-light leading-relaxed mt-2.5">
              Building digital products, mobile platforms, and interactive systems where engineering depth meets creative execution.
            </p>
          </div>

          <div className="flex flex-row gap-8 sm:gap-16 md:gap-20">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-brand-purple-light uppercase mb-3 block">
                NAVIGATION
              </span>
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <TransitionLink
                      href={link.href}
                      className="group flex items-center text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white transition-all duration-200"
                    >
                      <span className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 text-brand-purple-light mr-1.5 transition-all duration-200">
                        ›
                      </span>
                      <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                        {link.label}
                      </span>
                    </TransitionLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-[10px] font-mono tracking-widest text-brand-purple-light uppercase mb-3 block">
                CONNECT
              </span>
              <ul className="flex flex-col gap-2">
                {Object.entries(content.contact).map(([platform, url]) => {
                  const isEmail = platform === "email";
                  const href = isEmail ? `mailto:${url}` : (url as string);

                  return (
                    <li key={platform}>
                      <a
                        href={href}
                        target={isEmail ? undefined : "_blank"}
                        rel={isEmail ? undefined : "noopener noreferrer"}
                        className="group flex items-center text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white transition-all duration-200"
                      >
                        <span className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 text-brand-purple-light mr-1.5 transition-all duration-200">
                          ›
                        </span>
                        <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                          {platform}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-[11px] font-mono text-zinc-500 gap-3">
          <p>&copy; {currentYear} {content.footer.copyright.toUpperCase()}. ALL RIGHTS RESERVED.</p>
          <p className="text-zinc-400 uppercase tracking-widest">{content.footer.message}</p>
        </div>
      </div>
    </footer>
  );
}
