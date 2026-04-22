"use client";

import { type ColumnDef } from "@tanstack/react-table"
import { TRolesTable } from '@/types/tables.zod';
import { ButtonGroup } from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";


export const columns: ColumnDef<TRolesTable>[] = [
  {
    accessorKey: "id",
    header: ({ header }) => {
      return (
        <Checkbox key={header.id} />
      )
    },
    cell: ({ cell }) => {
      return (
        <Checkbox key={cell.id} />
      )
    }
  },
  {
    accessorKey: "title",
    header: "Title"
  },
  {
    accessorKey: "slug",
    header: "Slug"
  },
  {
    accessorKey: "level",
    header: "Level"
  },
  {
    accessorKey: "Actions",
    cell: ({ row }) => {
      const roleId = row.original.id

      return (
        <ButtonGroup className="cursor-pointer" key={row.id}>
          <Button type="button" variant={"outline"} size={"xs"} onClick={() => console.log(roleId)}>
            <Eye />
          </Button>
          <Button type="button" variant={"outline"} size={"xs"} onClick={() => console.log(roleId)}>
            <Pencil />
          </Button>
          <Button type="button" variant={"outline"} size={"xs"} onClick={() => console.log(roleId)}>
            <Trash2 className="text-red-500" />
          </Button>
        </ButtonGroup>
      )
    }
  }
]