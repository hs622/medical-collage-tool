"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Field, FieldLabel } from "@/components/ui/field";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { format } from "date-fns"
import { Popover as PopoverPrimitive } from "radix-ui"
import { cn } from "@/lib/utils";

export default function DatePicker({ className, ...props }: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {

  const [date, setDate] = useState<DateRange | undefined>(undefined)

  return (
    <Field>
      <FieldLabel htmlFor="date-range-input">Date</FieldLabel>
      <Popover>
        <PopoverTrigger {...props} data-slot="popover-trigger" data-size="default" className={cn("bg-input/20 h-9 text-muted-foreground transition-colors text-xs/relaxed px-2 py-1.5", className)} asChild>
          <Button variant={"outline"} className="justify-start" id="date-range-picker">
            <CalendarIcon
              size={2}
            />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date?.from, "LLL dd, y")} -{" "}
                  {format(date?.to, "LLL dd, y")}
                </>
              ) : (
                format(date?.from, "LLL dd, y")
              )
            ) : (
              <span>Start the range</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-fit">
          <Calendar
            mode="range"
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            className="p-0"
          />
        </PopoverContent>
      </Popover>
    </Field>
  )
}