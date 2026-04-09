"use client";

import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { ThemeToggle } from "../theme-toggle";
import { Button } from "@/components/ui/button";


export default function MainNavbar() {
  return (
    <div className="pt-10 px-10 pb-2 w-full flex justify-between items-center">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              Documents
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-80">
                <ListItem href="/s/policies" title="Policies">
                  Re-usable components built with Tailwind CSS.
                </ListItem>
                <ListItem href="#" title="Installation">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="#" title="Typography">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href={"/s/settings"}  >Setting</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center gap-2">
        <ThemeToggle />
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger > asdasd
                {/* <Avatar className="m-2">
                  <AvatarImage />
                  <AvatarFallback>HU</AvatarFallback>
                  <AvatarBadge />
                </Avatar> */}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="right-0">
                <ul className="w-96">
                  <ListItem href="/s/policies" title="Policies">
                    Re-usable components built with Tailwind CSS.
                  </ListItem>
                  <ListItem href="#" title="Installation">
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem href="#" title="Typography">
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
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
          <div className="flex flex-col gap-1 text-xs">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}