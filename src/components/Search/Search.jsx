import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { BedDoubleIcon, CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";

function Search() {
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      location: "",
      dates: {
        from: null,
        to: null,
      },
      adults: "",
      type: "",
      rooms: "",
    },
  });

  function onSubmit(values) {
    console.log(values);

    const checkin_monthday = values.dates.from ? values.dates.from.getDate().toString().padStart(2, '0') : null;
    const checkin_month = values.dates.from ? (values.dates.from.getMonth() + 1).toString().padStart(2, '0') : null;
    const checkin_year = values.dates.from ? values.dates.from.getFullYear().toString() : null;
    const checkout_monthday = values.dates.to ? values.dates.to.getDate().toString().padStart(2, '0') : null;
    const checkout_month = values.dates.to ? (values.dates.to.getMonth() + 1).toString().padStart(2, '0') : null;
    const checkout_year = values.dates.to ? values.dates.to.getFullYear().toString() : null;

    const checkin = checkin_year && checkin_month && checkin_monthday ? `${checkin_year}-${checkin_month}-${checkin_monthday}` : null;
    const checkout = checkout_year && checkout_month && checkout_monthday ? `${checkout_year}-${checkout_month}-${checkout_monthday}` : null;

    const url = new URL("/Search", window.location.origin);
    url.searchParams.set("city", values.location);
    url.searchParams.set("type", values.type);
    url.searchParams.set("num_rooms", values.rooms);
    if (checkin) url.searchParams.set("checkin", checkin);
    if (checkout) url.searchParams.set("checkout", checkout);
    url.searchParams.set("adults", values.adults);

    router.push(url.toString());

    
  }



  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col lg:flex-row lg:max-w-6xl lg:mx-auto items-center justify-center space-x-0 lg:space-x-2 space-y-4 lg:space-y-0 rounded-lg"
      >
        <div className="grid w-full lg:max-w-sm items-center gap-1.5">
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black flex">
                  Location
                  <BedDoubleIcon className="ml-2 h-4 w-4 text-black" />
                </FormLabel>

                <FormMessage />

                <FormControl>
                  <Input className="bg-white" placeholder="Enter Location" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className="grid w-full lg:max-w-sm flex-1 items-center gap-1.5">
          <FormField
            control={form.control}
            name="dates"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-black">Dates</FormLabel>
                <FormMessage />

                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        id="date"
                        name="dates"
                        variant={"outline"}
                        className={cn(
                          "w-full lg:w-[300px] bg-white hover:bg-white justify-start text-left font-normal",
                          !field.value.from && "text-muted-foreground hover:opacity-100"
                        )}
                      >
                        <CalendarIcon className="mr-3 h-4 w-4 opacity-50" />
                        {field.value?.from ? (
                          field.value?.to ? (
                            <>
                              {format(field.value?.from, "LLL dd, y")} -{" "}
                              {format(field.value?.to, "LLL dd, y")}
                            </>
                          ) : (
                            format(field.value?.from, "LLL dd, y")
                          )
                        ) : (
                          <span>Select your dates</span>
                        )}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      className="bg-white"
                      initialFocus
                      mode="range"
                      selected={field.value}
                      defaultMonth={field.value.from}
                      onSelect={field.onChange}
                      numberOfMonths={2}
                      disabled={(date) =>
                        date < new Date(new Date().setHours(0, 0, 0, 0))
                      }
                    />
                  </PopoverContent>
                </Popover>
              </FormItem>
            )}
          />
        </div>

        <div className="flex w-full items-center space-x-2">
          <div className="grid items-center flex-1">
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-black">Type</FormLabel>
                  <FormMessage />
                  <FormControl>
                    <Input className="bg-white" placeholder="Type" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="grid items-center flex-1">
            <FormField
              control={form.control}
              name="adults"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-black">Adults</FormLabel>
                  <FormMessage />
                  <FormControl>
                    <Input className="bg-white" type="number" placeholder="Adults" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="grid items-center flex-1">
            <FormField
              control={form.control}
              name="rooms"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-black">Rooms</FormLabel>
                  <FormMessage />
                  <FormControl>
                    <Input className="bg-white" type="number" placeholder="Rooms" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="mt-auto">
            <Button type="submit" className="bg-amber-600 text-base text-white hover:opacity-90">
              Search
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}

export default Search;
