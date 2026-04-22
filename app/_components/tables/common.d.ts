
export type DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[]
}

export interface InitialState<Schema> {
  currentPage: number;
  limit: number;
  skip: number;
  total: number;
  data: Schema[];
  error: string | null;
  status: "idle" | "loading" | "succeeded" | "failed";
}
