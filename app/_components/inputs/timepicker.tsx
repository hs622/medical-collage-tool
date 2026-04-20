import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function TimePicker({ ...props }: React.ComponentProps<"input">) {

  return (
    <Field className="w-fit">
      <FieldLabel htmlFor="time-input">Time</FieldLabel>
      <Input {...props} id="time-input" type="time" step={1} className="bg-muted appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none" />
    </Field>
  )
}