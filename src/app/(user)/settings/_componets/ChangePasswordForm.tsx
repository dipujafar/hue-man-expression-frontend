"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Define the form schema with Zod
const formSchema = z
  .object({
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export default function ChangePasswordForm() {
  // Initialize the form with useForm hook
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  // Define the submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Handle form submission
    console.log(values);
    // You would typically send this data to your API here
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-medium mb-5">
                  New Password
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter Password"
                    type="password"
                    className="h-12 bg-gray-100 mt-5"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-medium">
                  Confirm Password
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter confirm password"
                    type="password"
                    className="h-12 bg-gray-100"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="lg:w-[70%] mx-auto">
          <Button
            type="submit"
            className="w-full h-12 bg-[#8B7B65] hover:bg-[#7A6C58] text-white rounded-full"
          >
            Save
          </Button>
        </div>
      </form>
    </Form>
  );
}
