"use client";

import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { CreateModuleSchema, type TCreateModule } from '@/types/validations.zod';
import { Spinner } from "@/components/ui/spinner";
import { usePathname } from "next/navigation";

export default function ModuleForm() {
  const path = usePathname()

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<TCreateModule>({
    resolver: zodResolver(CreateModuleSchema)
  })

  async function HandleOnSubmit(data: TCreateModule) {
    console.log("Client-side(bofore): ", data)
    const resp = await fetch("/api/module", {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data)
    })

    console.log({ "client-side: ": resp })
    if (false) reset()
  }

  return (
    <form onSubmit={handleSubmit(HandleOnSubmit)}>
      <Input type="hidden" defaultValue={path.split("/").at(-1)} {...register("csrf_token")} />
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="module_title">Title</FieldLabel>
          <Input id="module_title" className="" type="text" {...register("title")} />
          {errors.title && <div className="text-red-400 text-xs">{errors.title.message}</div>}
        </Field>
        <Field>
          <FieldLabel htmlFor="module_description">Description</FieldLabel>
          <Textarea id="module_description" className="resize-none h-30" {...register("description")} />
          {errors.description && <div className="text-red-400 text-xs">{errors.description.message}</div>}
        </Field>
        <div className="grid grid-cols-2 gap-4 items-center">
          <Field orientation={"horizontal"} >
            <Switch id="module_visibility_switch" {...register("visibility")} checked={true} />
            <FieldLabel htmlFor="module_visibility_switch">Visibility</FieldLabel>
            <FieldDescription>By default it remain on; hide to other resources.</FieldDescription>
            {errors.visibility && <div className="text-red-400 text-xs">{errors.visibility.message}</div>}
          </Field>
          <Controller
            name="year"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Year</FieldLabel>
                <Select
                  name={field.name}
                  defaultValue={field.value}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger className="h-9!" aria-invalid={fieldState.invalid}>
                    <SelectValue placeholder={"Associated Year"} />
                  </SelectTrigger>
                  <SelectContent >
                    <SelectItem value="y1">Y1</SelectItem>
                    <SelectItem value="y2">Y2</SelectItem>
                    <SelectItem value="y3">Y3</SelectItem>
                    <SelectItem value="y4">Y4</SelectItem>
                    <SelectItem value="y5">Y5</SelectItem>
                  </SelectContent>
                </Select>
                {errors.year && <div className="text-red-400 text-xs">{errors.year.message}</div>}
              </Field>
            )}
          />
        </div>
      </FieldGroup>

      <FieldGroup className="pt-4">
        <Field>
          {isSubmitting ? (
            <Button disabled>
              <Spinner />
              Create
            </Button>
          ) : (
            <Button type="submit" >Create</Button>
          )}
        </Field>
      </FieldGroup>
    </form>
  )
}