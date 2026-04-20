"use client";

import { FetchCsrfToken } from "@/app/actions/csrf-actions";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useAppDispatch } from "@/store/hooks";
import { CSRFRequestSchema } from "@/types/actions.zod";
import { Pencil } from "lucide-react";
import { RefreshCcw } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { fetchModuleData } from '@/store/thunks/module.api';

export default function ModuleHeader() {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const FormRequest = async () => {
    const resp = await FetchCsrfToken()
    const parseData = CSRFRequestSchema.safeParse(resp)

    if (parseData.success) {
      router.push(`/d/modules/${parseData.data?.crsfToken}`)
      return
    }

    toast.error("Error!", {
      description: "Invalid error occurred",
      position: "bottom-right"
    })
  }

  return (
    <div className="flex justify-between gap-4 pb-4">
      <FieldGroup>
        <Input className="w-32" placeholder="Search" />
      </FieldGroup>
      <ButtonGroup>
        <Button type="button" variant={"outline"} onClick={() => dispatch(fetchModuleData())}>
          <RefreshCcw />
        </Button>
        <Button type="button" variant={"outline"} onClick={FormRequest}>
          <Pencil />
        </Button>
      </ButtonGroup>
    </div>
  )
}