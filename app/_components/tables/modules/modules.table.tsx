"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";

import { DataTableProps } from "../common";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from "react";
import { fetchModuleData } from "@/store/thunks/module.api";

export default function ModuleTable<TData, TValue>({ columns }: DataTableProps<TData, TValue>) {

  const { data, status } = useAppSelector(state => state.module)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchModuleData())
  }, [dispatch])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  })

  return (
    <Table className="border rounded-md overflow-hidden bg-muted">
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id} className="text-xs">
            {headerGroup.headers.map((header) => (
              <TableHead key={header.id}>
                {header.isPlaceholder ? null : flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>

      <TableBody>
        {status == "succeeded" && (
          table.getRowModel().rows ? (
            table.getRowModel().rows?.map((row) => (
              <TableRow
                key={row.id}
                className="text-xs"
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={8} className="text-center text-xs py-10">
                Not Found
              </TableCell>
            </TableRow>
          )
        )}
      </TableBody>
    </Table>
  )
}