"use client";

import { ColumnDef } from "@tanstack/react-table";
import { TModulesTableSchema } from '@/types/tables.zod';
import { Switch } from '@/components/ui/switch';
import { ButtonGroup } from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";
import { Eye, Pencil, Trash } from "lucide-react";
import Link from "next/link";
// import { Checkbox } from "@/components/ui/checkbox";

export const columns: ColumnDef<TModulesTableSchema>[] = [
  {
    accessorKey: "id",
    header: "Id"
  },
  {
    accessorKey: "title",
    header: "Title"
  },
  {
    accessorKey: "slug",
    header: "Slug",
    cell: ({ row }) => (
      <Link href={`/d/modules/${row.original.slug}`}>
        /{row.original.slug}
      </Link>
    )
  },
  {
    accessorKey: "visibility",
    header: "Visibility",
    cell: ({ row }) => (
      <div>
        <Switch defaultChecked={row.original.visibility as boolean} />
      </div>
    )
  },
  {
    accessorKey: "has_associated",
    header: "Associated",
    cell: ({ row }) => (
      <div>
        {row.original.has_associated}
      </div>
    ),
  },
  {
    header: "Actions",
    cell: ({ row }) => (
      <ButtonGroup>
        <Button variant={"outline"} size={"xs"} onClick={() => console.log(row.original.id)}><Eye /></Button>
        <Button variant={"outline"} size={"xs"} onClick={() => console.log(row.original.id)}><Pencil /></Button>
        <Button variant={"outline"} size={"xs"} onClick={() => console.log(row.original.id)}><Trash /></Button>
      </ButtonGroup>
    )
  }
]