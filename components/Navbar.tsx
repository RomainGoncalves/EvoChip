"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Cpu,
  Server,
  Microchip,
  Menu,
  X,
  ChevronDown,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui";
import { Logo } from "@/components/brand";

interface NavbarProps {
  onViewChange: (view: string) => void;
}

export const Navbar = ({ onViewChange }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const dropdownTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setProductsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setProductsDropdownOpen(false);
    }, 150);
  };

  const navLinks = [
    { name: "Home", href: "/", external: true },
    { name: "Products", href: "#products" },
    { name: "Insights", href: "/insights", external: true },
    { name: "Contact", href: "#contact-evo" },
    { name: "Investor Portal", href: "/investor-portal", icon: Lock, external: true },
  ];

  const products = [
    {
      name: "AltiCoreMCU",
      tag: "Embedded & IoT",
      href: "/mcu-technical-details",
      icon: Microchip,
      color: "text-blue-400",
      hoverColor: "hover:bg-blue-400/10",
    },
    {
      name: "AltiCoreSWP",
      tag: "FPGA & ASIC",
      href: "/swp-technical-details",
      icon: Server,
      color: "text-teal-400",
      hoverColor: "hover:bg-teal-400/10",
    },
    {
      name: "AltiCoreHDL",
      tag: "Server & Desktop",
      href: "/hdl-technical-details",
      icon: Cpu,
      color: "text-amber-500",
      hoverColor: "hover:bg-amber-500/10",
    },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Logo size="md" />
        </Link>
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            if (link.name === "Products") {
              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium uppercase tracking-wide flex items-center gap-1"
                    onClick={(e) => {
                      e.preventDefault();
                      setProductsDropdownOpen(!productsDropdownOpen);
                    }}
                  >
                    {link.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        productsDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {productsDropdownOpen && (
                    <div className="absolute top-full left-0 pt-2 w-64">
                      <div className="bg-slate-900/95 backdrop-blur-md border border-slate-700 rounded-lg shadow-xl overflow-hidden">
                        {products.map((product) => {
                          const Icon = product.icon;
                          return (
                            <Link
                              key={product.name}
                              href={product.href}
                              onClick={() => {
                                setProductsDropdownOpen(false);
                                if (dropdownTimeoutRef.current) {
                                  clearTimeout(dropdownTimeoutRef.current);
                                }
                              }}
                              className={`flex items-center gap-3 px-4 py-3 ${product.hoverColor} transition-colors border-b border-slate-800 last:border-b-0`}
                            >
                              <Icon className={`w-5 h-5 ${product.color}`} />
                              <div className="flex flex-col">
                                <span
                                  className={`text-sm font-medium ${product.color}`}
                                >
                                  {product.name}
                                </span>
                                <span className="text-xs text-slate-400">
                                  {product.tag}
                                </span>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            // Handle external links (actual routes)
            if (link.external) {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium uppercase tracking-wide flex items-center gap-1.5"
                >
                  {link.icon && <link.icon className="w-3.5 h-3.5" />}
                  {link.name}
                </Link>
              );
            }

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                  onViewChange("evochip");
                }}
                className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium uppercase tracking-wide flex items-center gap-1.5"
              >
                {link.icon && <link.icon className="w-3.5 h-3.5" />}
                {link.name}
              </a>
            );
          })}
          {/* <div className="h-6 w-px bg-slate-700 mx-2"></div> */}
          {/* <Button
            variant="outline"
            className="py-2 px-4 text-xs"
            onClick={() => onViewChange("alticore_home")}
          >
            Visit AltiCore
          </Button> */}
        </div>
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-slate-900 border-t border-slate-800 p-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => {
            if (link.name === "Products") {
              return (
                <div key={link.name} className="flex flex-col gap-2">
                  <button
                    onClick={() =>
                      setProductsDropdownOpen(!productsDropdownOpen)
                    }
                    className="text-slate-300 hover:text-cyan-400 text-lg flex items-center justify-between"
                  >
                    {link.name}
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        productsDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {productsDropdownOpen && (
                    <div className="ml-4 flex flex-col gap-2">
                      {products.map((product) => {
                        const Icon = product.icon;
                        return (
                          <Link
                            key={product.name}
                            href={product.href}
                            onClick={() => {
                              setIsOpen(false);
                              setProductsDropdownOpen(false);
                            }}
                            className={`flex items-center gap-3 px-3 py-2 rounded ${product.hoverColor} transition-colors`}
                          >
                            <Icon className={`w-5 h-5 ${product.color}`} />
                            <div className="flex flex-col">
                              <span className={`text-base ${product.color}`}>
                                {product.name}
                              </span>
                              <span className="text-xs text-slate-400">
                                {product.tag}
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }
            // Handle external links (actual routes)
            if (link.external) {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-300 hover:text-cyan-400 text-lg flex items-center gap-2"
                >
                  {link.icon && <link.icon className="w-4 h-4" />}
                  {link.name}
                </Link>
              );
            }

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                  onViewChange("evochip");
                }}
                className="text-slate-300 hover:text-cyan-400 text-lg flex items-center gap-2"
              >
                {link.icon && <link.icon className="w-4 h-4" />}
                {link.name}
              </a>
            );
          })}
          {/* <Button
            variant="outline"
            onClick={() => {
              setIsOpen(false);
              onViewChange("alticore_home");
            }}
          >
            Visit AltiCore
          </Button> */}
        </div>
      )}
    </nav>
  );
};
