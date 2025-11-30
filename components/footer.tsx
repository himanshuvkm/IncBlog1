import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 mt-auto w-full">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 sm:py-12">
        {/* Grid Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-8 mb-10">
          
          {/* Brand Section */}
          <div className="flex flex-col items-start text-center sm:text-left">
            <Link href="/" className="inline-block mb-4">
              <span className="font-bold text-2xl text-gray-900 tracking-tight">
                IncBlog
              </span>
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
             Share Your Tech Insights,
Connect With Innovators
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">
              Platform
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-600 hover:text-gray-900 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/startup/create"
                  className="text-sm text-gray-600 hover:text-gray-900 transition"
                >
                  Create Pitch
                </Link>
              </li>
              <li>
                <Link
                  href="/?query="
                  className="text-sm text-gray-600 hover:text-gray-900 transition"
                >
                  Browse Startups
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">
              Categories
            </h3>
            <ul className="space-y-3">
              {["Technology", "Health", "Education", "Finance"].map((category) => (
                <li key={category}>
                  <Link
                    href={`/?query=${category.toLowerCase()}`}
                    className="text-sm text-gray-600 hover:text-gray-900 transition"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-600 hover:text-gray-900 transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-600 hover:text-gray-900 transition"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-gray-600 hover:text-gray-900 transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-gray-600 hover:text-gray-900 transition"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-5">
          <p className="text-sm text-gray-600 text-center sm:text-left">
            © {currentYear} TechClout. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center sm:justify-end items-center gap-5">
            {[
              { href: "https://twitter.com", Icon: Twitter, label: "Twitter" },
              { href: "https://github.com", Icon: Github, label: "GitHub" },
              { href: "https://linkedin.com", Icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:contact@techclout.com", Icon: Mail, label: "Email" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
