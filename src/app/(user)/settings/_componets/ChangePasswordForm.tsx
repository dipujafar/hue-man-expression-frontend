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
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useChangePasswordMutation } from "@/redux/api/authApi";
import { Error_Modal } from "@/modals/modals";
import { toast } from "sonner";
import LoadingSpin from "@/components/ui/loading-spin";

// Define the form schema with Zod
const formSchema = z
  .object({
    currentPassword: z.string().min(1, { message: "Password is required" }),
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
  const [changePassword, { isLoading }] = useChangePasswordMutation();
  const [showPassword, setShowPassword] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // Initialize the form with useForm hook
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      currentPassword: "",
      password: "",
      confirmPassword: "",
    },
  });

  // Define the submit handler
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formattedData = {
      oldPassword: values?.currentPassword,
      newPassword: values?.password,
    };
    try {
      const res = await changePassword(formattedData).unwrap();
      if (res?.success) {
        toast.success("Password Updated Successfully");
      }
    } catch (error: any) {
      Error_Modal({ title: error?.data?.message });
    }
    // You would typically send this data to your API here
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="currentPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-medium mb-5">
                Current Password
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    placeholder="Enter Current Password"
                    type={showCurrentPassword ? "text" : "password"}
                    className="h-10 bg-gray-100 mt-1"
                    {...field}
                  />
                  <div className="absolute right-2 top-1/2 -translate-y-1/2">
                    {showCurrentPassword ? (
                      <div
                        onClick={() => setShowCurrentPassword(false)}
                        className="cursor-pointer"
                      >
                        <Eye color="#A5A7A9" />
                      </div>
                    ) : (
                      <div
                        onClick={() => setShowCurrentPassword(true)}
                        className="cursor-pointer"
                      >
                        <EyeOff color="#A5A7A9" />
                      </div>
                    )}
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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
                  <div className="relative">
                    <Input
                      placeholder="Enter New Password"
                      type={showPassword ? "text" : "password"}
                      className="h-10 bg-gray-100 mt-1"
                      {...field}
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2">
                      {showPassword ? (
                        <div
                          onClick={() => setShowPassword(false)}
                          className="cursor-pointer"
                        >
                          <Eye color="#A5A7A9" />
                        </div>
                      ) : (
                        <div
                          onClick={() => setShowPassword(true)}
                          className="cursor-pointer"
                        >
                          <EyeOff color="#A5A7A9" />
                        </div>
                      )}
                    </div>
                  </div>
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
                  <div className="relative">
                    <Input
                      placeholder="Enter confirm password"
                      type={showConfirmPassword ? "text" : "password"}
                      className="h-10 bg-gray-100 mt-1"
                      {...field}
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2">
                      {showConfirmPassword ? (
                        <div
                          onClick={() => setShowConfirmPassword(false)}
                          className="cursor-pointer"
                        >
                          <Eye color="#A5A7A9" />
                        </div>
                      ) : (
                        <div
                          onClick={() => setShowConfirmPassword(true)}
                          className="cursor-pointer"
                        >
                          <EyeOff color="#A5A7A9" />
                        </div>
                      )}
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div>
          <Button
            disabled={isLoading}
            type="submit"
            className="w-full h-10 bg-[#8B7B65] hover:bg-[#7A6C58] text-white rounded-full"
          >
            Save {isLoading && <LoadingSpin />}
          </Button>
        </div>
      </form>
    </Form>
  );
}
