import { NextResponse } from "next/server";

export function paginatedResponse<TModule>(
  data: TModule[],
  total: number,
  limit: number,
  skip: number,
) {
  return NextResponse.json({
    status: true,
    message: "Successfully retrieved modules.",
    data,
    total,
    limit,
    skip,
  });
}
