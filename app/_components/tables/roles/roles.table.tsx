"use client";

import { ToCapitalised } from "@/lib/helper";
import { DataTableProps } from "../common";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchRoles } from "@/store/thunks/roles.api";
import { flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";
import { useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";


export default function RolesTable<TData, TValue>({ columns }: DataTableProps<TData, TValue>) {

  const { data, status,  } = useAppSelector(state => state.table.roles)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchRoles())
  }, [dispatch])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  })

  return (
    <div className="">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map(headers => (
            <TableRow key={headers.id}>
              {headers.headers.map(header => (
                <TableCell key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody>
          {status !== "succeeded" && (
            [...Array(5)].map(i => (
              <TableRow key={i}>
                <TableCell colSpan={columns.length}>
                  <Skeleton className="h-7" />
                </TableCell>
              </TableRow>
            ))
          )}
          {status === "succeeded" && (
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
                <TableCell colSpan={columns.length} className="text-center text-xs py-10">
                  Not Found
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </div>
  )
} 