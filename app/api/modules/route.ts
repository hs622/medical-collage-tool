// import { CreateModuleSchema, TCreateModule } from "@/types/validations.zod";
import {
  DEFAULT_LIMIT,
  DEFAULT_SKIP,
  MAX_LIMIT,
  MODULES_COLUMNS,
} from "@/constants/database";
import { getPool } from "@/lib/db/postgres";
import { isValidId, safeInt } from "@/lib/helper";
import { ModuleRow } from "@/types/schemas.zod";
import { NextRequest, NextResponse } from "next/server";
import { paginatedResponse } from "../_common/helper";

export async function GET(request: NextRequest) {
  const pool = getPool();
  const params = request.nextUrl.searchParams;

  try {
    if (params.has("mid")) {
      const mid = params.get("mid");

      if (!isValidId(mid)) {
        return NextResponse.json(
          {
            status: false,
            message: "Invalid module ID.",
          },
          {
            status: 400,
          },
        );
      }

      const result = await pool.query<ModuleRow>(
        `SELECT ${MODULES_COLUMNS} FROM modules WHERE id = $1 AND deleted_at IS NULL;`,
        [mid],
      );

      if (result.rowCount === 0) {
        return NextResponse.json(
          {
            status: false,
            message: "module not found.",
          },
          {
            status: 404,
          },
        );
      }

      return NextResponse.json({
        status: true,
        message: "Successfully retrieved module.",
        data: result.rows[0],
      });
    }

    if (params.has("trashed")) {
      const limit = safeInt(params.get("limit"), DEFAULT_LIMIT, 1, MAX_LIMIT);
      const skip = safeInt(
        params.get("skip"),
        DEFAULT_SKIP,
        0,
        Number.MAX_SAFE_INTEGER,
      );

      const result = await pool.query<ModuleRow>(
        `SELECT ${MODULES_COLUMNS}, deleted_at FROM modules WHERE deleted_at IS NOT NULL LIMIT $1 OFFSET $2;`,
        [limit, skip],
      );

      return paginatedResponse<ModuleRow>(
        result.rows,
        result.rowCount ?? 0,
        limit,
        skip,
      );
    }

    const limit = safeInt(params.get("limit"), DEFAULT_LIMIT, 1, MAX_LIMIT);
    const skip = safeInt(
      params.get("skip"),
      DEFAULT_SKIP,
      0,
      Number.MAX_SAFE_INTEGER,
    );

    const query = `SELECT ${MODULES_COLUMNS} FROM modules WHERE deleted_at IS NULL LIMIT $1 OFFSET $2;`;
    const result = await pool.query(query, [limit, skip]);

    return paginatedResponse<ModuleRow>(
      result.rows,
      result.rowCount ?? 0,
      limit,
      skip,
    );
  } catch (error) {
    console.log("[GET /Modules]:", error);
    return NextResponse.json(
      {
        status: false,
        message: "unable to retrieve modules.",
      },
      {
        status: 500,
      },
    );
  }
}

// export async function POST(request: NextRequest) {

//   const body = await request.json()
//   const parseData = CreateModuleSchema.safeParse(body)

//   // const zodErrors = {}
//   if (!parseData.success) {
//     //
//   }

//   const qry = "insert into modules(title, description, slug, has_associated, visibility, created_at) values($1, $2, $3, $4, $5, $6) returning *"
//   const data: TCreateModule = parseData?.data
//   const values = [
//     data.title,
//     data.description ? data.description : null,
//     data.title.toLowerCase().replace(" ", "-"),
//     false,
//     data.visibility == "on" ? true : false,
//     new Date()
//   ]

//   const result = await pool.query(qry, values)
//   const response = result.rows

//   return NextResponse.json({
//     massega: "successfully created",
//     ...response
//   })
// }
