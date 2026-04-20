"use client";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Item, ItemContent, ItemDescription, ItemTitle } from "@/components/ui/item";
import { Bell } from "lucide-react";
import Link from "next/link";


export default function NotificationButton() {


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Bell />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-xs">
        <DropdownMenuGroup>
          <Item asChild className="">
            <Link href={"#"}>
              <ItemContent className="text-xs gap-1">
                <ItemTitle className="text-xs">Visit our documentation</ItemTitle>
                <ItemDescription className="text-xs">
                  Learn how to get started with our components.
                </ItemDescription>
              </ItemContent>
            </Link>
          </Item>
          <Item asChild className="">
            <Link href={"#"}>
              <ItemContent className="gap-1">
                <ItemTitle className="text-xs">Visit our documentation</ItemTitle>
                <ItemDescription className="text-xs">
                  Learn how to get started with our components.
                </ItemDescription>
              </ItemContent>
            </Link>
          </Item>
        </DropdownMenuGroup>

        <DropdownMenuGroup>
          <Item asChild>
            <Button type="button" onClick={() => console.log("asda")} variant={"link"} >
              see more
            </Button>
          </Item>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}