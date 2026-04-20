import { Card, CardContent, CardTitle } from "@/components/ui/card"
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
              <RolesTable />
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


function Roles({ children, ...props }: React.ComponentProps<"div">) {

  return (
    <Card {...props}>
      <CardTitle className="px-2">
        Roles
      </CardTitle>
      <CardContent className="px-2">
        {children}
      </CardContent>
    </Card>
  )
}

function RolesTable() {

  return (
    <table>
      
    </table>
  )
}


