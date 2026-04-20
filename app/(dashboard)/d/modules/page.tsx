import { columns } from "@/app/_components/tables/modules/columns"
import ModuleHeader from "@/app/_components/tables/modules/header"
import ModuleTable from "@/app/_components/tables/modules/modules.table"
import { Suspense } from "react"

// const DynamicTable = dynamic(() => import('@/app/_components/tables/modules/modules.table'), {
//   ssr: false
// })

export default function Page() {

  return (
    <div className="flex justify-center w-full">
      <Suspense fallback={"loading..."}>
        <div className="w-7xl py-5">
          <ModuleHeader />
          <ModuleTable columns={columns} />
        </div>
      </Suspense>
    </div>
  )
}