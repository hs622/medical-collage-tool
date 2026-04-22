import { getPool } from "@/lib/db/postgres";
import { NextRequest, NextResponse } from "next/server";
import { paginatedResponse } from "../_common/helper";
import { isValidId, safeInt } from "@/lib/helper";
import {
  DEFAULT_LIMIT,
  DEFAULT_SKIP,
  MAX_LIMIT,
  ROLES_COLUMNS,
} from "@/constants/database";
import { RolesRow } from "@/types/schemas.zod";

export const GET = async (request: NextRequest) => {
  const pool = getPool();
  const params = request.nextUrl.searchParams;

  try {
    if (params.has("rid")) {
      const rid = params.get("rid");

      if (!isValidId(rid)) {
        return NextResponse.json(
          {
            status: false,
            message: "Invalid roles ID.",
          },
          {
            status: 400,
          },
        );
      }

      const query = `SELECT ${ROLES_COLUMNS} FROM roles WHERE deleted_at IS NULL AND id = $1`;
      const result = await pool.query(query, [rid]);

      return NextResponse.json({
        status: true,
        message: "Successfully retrieved modules.",
        data: result.rows[0],
      });
    }

    if (params.get("trashed")) {
      const limit = safeInt(params.get("limit"), DEFAULT_LIMIT, 1, MAX_LIMIT);
      const skip = safeInt(params.get("skip"), DEFAULT_LIMIT, 0, MAX_LIMIT);

      const query = `SELECT ${ROLES_COLUMNS}, deleted_at FROM roles WHERE deleted_at IS NOT NULL AND level >= LIMIT $1 OFFSET $2`;
      const result = await pool.query(query, [limit, skip]);

      return paginatedResponse<RolesRow>(result.rows, result.rowCount || 0, limit, skip);
    }

    const limit = safeInt(params.get("limit"), DEFAULT_LIMIT, 1, MAX_LIMIT);
    const skip = safeInt(
      params.get("skip"),
      0,
      DEFAULT_SKIP,
      Number.MAX_SAFE_INTEGER,
    );

    const query = `SELECT ${ROLES_COLUMNS} FROM roles WHERE deleted_at IS NULL AND level >= 1 LIMIT $1 OFFSET $2`;
    const result = await pool.query(query, [limit, skip]);

    return paginatedResponse(result.rows, result.rowCount ?? 0, limit, skip);
  } catch (error) {
    console.log("[GET /roles]: ",error);
    return NextResponse.json(
      {
        status: false,
        message: "unable to retrieve roles.",
      },
      {
        status: 500,
      },
    );
  }
};
