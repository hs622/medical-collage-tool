import { columns } from "@/app/_components/tables/roles/columns"
import RoleHeader from "@/app/_components/tables/roles/header"
import RolesTable from "@/app/_components/tables/roles/roles.table"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Roles and Permissions",
  description: ""
}
export default function Page() {

  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">

          <div className="flex gap-2 px-4">
            <Roles className="flex-2">
              <RolesTable columns={columns} />
            </Roles>
            <Card className="flex-1 px-2">
              <CardTitle>
                Permissions
              </CardTitle>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}


function Roles({ className, children, ...props }: React.ComponentProps<"div">) {

  return (
    <div className={cn("border rounded-md overflow-hidden", className)} {...props}>
      <div className="flex flex-col gap-2 px-4 py-4">
        Roles
        <RoleHeader />
      </div>
      <div className="px-4"> {children} </div>
    </div>
  )
}

