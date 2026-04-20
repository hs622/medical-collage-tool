"use client";

import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CreateModuleSchema, type TCreateModule } from '@/types/validations.zod';
import { Spinner } from "@/components/ui/spinner";
import { Separator } from "@/components/ui/separator";
import DatePicker from "../inputs/datepicker";
import TimePicker from "../inputs/timepicker";

export default function SessionForm() {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    // reset
  } = useForm<TCreateModule>({
    resolver: zodResolver(CreateModuleSchema)
  })

  function HandleOnSubmit(data: TCreateModule) {
    console.log(data);
  }


  return (
    <form onSubmit={handleSubmit(HandleOnSubmit)}>
      <Input type="hidden" defaultValue={"token"} {...register("csrf_token")} />

      <FieldGroup>
        <Field>
          <FieldLabel>Module</FieldLabel>
          <Select>
            <SelectTrigger className="h-9!">
              <SelectValue placeholder={"Module"} />
            </SelectTrigger>
            <SelectContent aria-multiselectable {...register("year")}>
              <SelectItem value="blood">Blood</SelectItem>
              <SelectItem value="respitory">Respitory</SelectItem>
              <SelectItem value="inflammation-and-neoplasia">Inflammation and Neoplaisa</SelectItem>
            </SelectContent>
          </Select>
          {errors.year && <div className="text-red-400 text-xs">{errors.year.message}</div>}
        </Field>
      </FieldGroup>

      <Separator className="my-4" />

      <FieldGroup>
        <div className="grid grid-cols-3 gap-4">
          <Field className="col-span-2">
            <FieldLabel htmlFor="module_title">Title</FieldLabel>
            <Input id="module_title" className="bg-muted" type="text" {...register("title")} />
            {errors.title && <div className="text-red-400 text-xs">{errors.title.message}</div>}
          </Field>
          <Field>
            <div className="flex justify-between">
              <FieldLabel htmlFor="module_title">Code</FieldLabel>
              <FieldDescription>System generated ID</FieldDescription>
            </div>
            <Input id="module_title" className="bg-muted" type="text" disabled defaultValue={"MC01844"} />
            {errors.title && <div className="text-red-400 text-xs">{errors.title.message}</div>}
          </Field>

        </div>
        <Field>
          <FieldLabel htmlFor="module_description">Description</FieldLabel>
          <Textarea id="module_description" className="resize-none h-30 bg-muted" {...register("description")} />
          {errors.description && <div className="text-red-400 text-xs">{errors.description.message}</div>}
        </Field>

        <div className="grid grid-cols-2 gap-4">
          <Field orientation={"horizontal"}>
            <DatePicker {...register("year")} />
            <TimePicker />
          </Field>
          <Field>
            <FieldLabel htmlFor="module_description">Venue</FieldLabel>
            <Select>
              <SelectTrigger className="h-9!">
                <SelectValue placeholder={"Module"} />
              </SelectTrigger>
              <SelectContent {...register("year")}>
                <SelectItem value="blood">Blood</SelectItem>
                <SelectItem value="respitory">Respitory</SelectItem>
                <SelectItem value="inflammation-and-neoplasia">Inflammation and Neoplaisa</SelectItem>
              </SelectContent>
            </Select>
          </Field>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Field>
            <FieldLabel>Faculty</FieldLabel>
            <Select>
              <SelectTrigger className="h-9!">
                <SelectValue placeholder={"Associated Faculty"} />
              </SelectTrigger>
              <SelectContent aria-multiselectable {...register("year")}>
                <SelectItem value="y1">Y1</SelectItem>
                <SelectItem value="y2">Y2</SelectItem>
              </SelectContent>
            </Select>
            {errors.year && <div className="text-red-400 text-xs">{errors.year.message}</div>}
          </Field>
          <Field>
            <FieldLabel>Category</FieldLabel>
            <Select>
              <SelectTrigger className="h-9!">
                <SelectValue placeholder={"Associated Faculty"} />
              </SelectTrigger>
              <SelectContent aria-multiselectable {...register("year")}>
                <SelectItem value="y1">Y1</SelectItem>
                <SelectItem value="y2">Y2</SelectItem>
              </SelectContent>
            </Select>
            {errors.year && <div className="text-red-400 text-xs">{errors.year.message}</div>}
          </Field>
        </div>

        {/* <div className="grid grid-cols-2 gap-4 items-center"> */}
          <Field orientation={"horizontal"} >
            <Switch id="module_visibility_switch" {...register("visibility")} />
            <FieldLabel htmlFor="module_visibility_switch">Visibility</FieldLabel>
            <FieldDescription>By default it remain off; hide to other resources.</FieldDescription>
            {errors.visibility && <div className="text-red-400 text-xs">{errors.visibility.message}</div>}
          </Field>
        {/* </div> */}
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