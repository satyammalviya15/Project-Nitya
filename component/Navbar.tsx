"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, CircleHelpIcon, CircleCheckIcon, CircleIcon } from "lucide-react"
import { useState } from "react"
import logo from "../assets/web-traffic.png"
import Image from "next/image"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import LoginBtn from "./login-btn"
import { useSession, signIn, signOut } from "next-auth/react";

const components = [
  {
    title: "Reactjs",
    href: "https://react.dev/",
    description: "ReactJS a JavaScript library building fast, interactive UI using reusable component",
  },
  {
    title: "Nextjs",
    href: "https://nextjs.org/",
    description: "Next.js is a powerful React framework for building fast, scalable web applications.",
  },
  {
    title: "Python",
    href: "https://www.python.org/downloads/",
    description: "Python is a high-level, interpreted programming language.",
  },
  {
    title: "PHP",
    href: "https://www.php.net/downloads.php",
    description: "PHP is a open-source scripting language for create dynamic web pages.",
  },
  {
    title: "MySQL",
    href: "https://www.mysql.com/",
    description: "MySQL is a widely-used open-source relational database management system.",
  },
  {
    title: "Nodejs",
    href: "https://nodejs.org/",
    description: "Used for APIs, real-time apps, and backend services",
  },
]

export default function Navbar() {
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Brand */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src={logo} alt="logo" className="h-10 w-10" />
          <span className="text-xl font-bold">Satyam Malviya</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-4">
              <NavigationMenuItem>
                <NavigationMenuTrigger>About me</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] p-4">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          >
                          <Image
                          src="https://media.licdn.com/dms/image/v2/D4D35AQE7qx3h9ttw0w/profile-framedphoto-shrink_400_400/B4DZbKkT55GYAc-/0/1747155238844?e=1761033600&v=beta&t=UfodEwR-Y6PPUE5oNPDuiFPme5Ro4Km4h1TgClz4Gwk"
                          alt=""
                          width={800}
                          height={800}
                          />
                          <div className="mt-4 mb-2 text-lg font-medium">Satyam Malviya</div>
                          <p className="text-muted-foreground text-sm leading-tight">
                            Software Engineer
                          </p>
                          </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="https://www.linkedin.com/in/satyammalviya15/" title="Linkdin">
                      A dedicated space where you can explore my Achievements.
                    </ListItem>
                    <ListItem href="https://github.com/satyammalviya15" title="Github">
                      A curated showcase of the projects, applications, and tools I’ve built
                    </ListItem>
                    <ListItem href="https://drive.google.com/file/d/19haEcC_8ckgZwb0nqUJTUnWpEXNkBu_4/view?usp=sharing" title="Resume">
                     A reflection of my personal and professional journey 
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Technologies</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px] p-4">
                    {components.map((component) => (
                      <ListItem key={component.title} title={component.title} href={component.href}>
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <LoginBtn/>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {session?.user?.image && (
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <img
            src={session.user.image}
            alt={session.user.email || "User"}
            className="h-10 w-10 rounded-full object-cover"
          />
        </NavigationMenuLink>
      )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 py-2 space-y-2 bg-white border-t">
          <MobileNavLink href="/">Home</MobileNavLink>
          <MobileNavLink href="https://www.linkedin.com/in/satyammalviya15/">Linkdin</MobileNavLink>
          <MobileNavLink href="https://github.com/satyammalviya15">Github</MobileNavLink>
          <MobileNavLink href="https://drive.google.com/file/d/19haEcC_8ckgZwb0nqUJTUnWpEXNkBu_4/view?usp=sharing">Resume</MobileNavLink>
          <MobileNavLink href="/about">About</MobileNavLink>
        </div>
      )}
    </nav>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-muted-foreground text-sm leading-snug line-clamp-2">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600"
    >
      {children}
    </Link>
  )
}
