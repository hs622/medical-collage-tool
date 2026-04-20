import ModuleForm from "@/app/_components/forms/create-module-form";
import { TypographyH1 } from "@/app/_components/typography/headings"
import { TypographyD } from "@/app/_components/typography/paragraph";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Create Module",
  description: ""
}

export default function Page() {

  return (
    <div className="pt-8 pb-4 w-full">
      <div className="m-auto md:px-4 md:w-5xl">
        <div className="flex flex-col">
          <div className="pb-6">
            <div className="flex justify-between items-center">
              <TypographyH1 heading="Module" />
              <Badge variant={"outline"} className="text-primary">a</Badge>
            </div>
            <TypographyD heading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi rem facere maxime sapiente quo velit corrupti amet minus magnam beatae?" />
          </div>
          <ModuleForm />
        </div>
      </div>
    </div>
  )
}