"use client";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import bgShadowImage from "@/assets/contact/bgShadow.png";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { Error_Modal } from "@/modals/modals";
import LoadingSpin from "@/components/ui/loading-spin";
import {
  useForgetPasswordMutation,
  useReSetPasswordMutation,
} from "@/redux/api/authApi";
import { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const formSchema = z.object({
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .regex(/^(?=.*[A-Z])(?=.*[!@#$%^&*])/, {
      message: "Password must contain an uppercase letter and a symbol",
    }),
  confirmPassword: z
    .string()
    .min(1, { message: "Confirm Password is required" }),
});

const SetNewPasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();
  const [reSetPassword, { isLoading }] = useReSetPasswordMutation();
  const email = useSearchParams().get("email");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    if (data.password !== data.confirmPassword) {
      toast.error("Passwords don't match with confirm password");
      return;
    }
    const formattedData = { email, ...data, confirmPassword: undefined };
    try {
      const res = await reSetPassword(formattedData).unwrap();
      if (res?.success) {
        toast.success("Password Updated Successfully");
        router.push(`/login`);
      }
    } catch (error: any) {
      Error_Modal({ title: error?.data?.message });
    }
  };


  useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      if (name === "confirmPassword" || name === "password") {
        if (value.confirmPassword && value.password !== value.confirmPassword) {
          form.setError("confirmPassword", {
            type: "manual",
            message: "Passwords do not match",
          });
        } else {
          form.clearErrors("confirmPassword");
        }
      }
    });
    return () => subscription.unsubscribe();
  }, [form]);



  return (
    <div className="2xl:w-[30%] xl:w-[40%] md:w-[50%] w-[90%]  border lg:px-16 md:px-10 lg:py-20 py-12 px-4 bg-gradient-to-t from-[#685947] to-[#6d644f] relative overflow-hidden z-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-10">
        <Image
          src={bgShadowImage}
          alt="bgShadowImage"
          className=" w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="space-y-4 relative z-20">
        <h1 className=" text-center lg:mb-10 mb-5 font-merienda text-[#FFA21B] md:text-5xl text-3xl">
          Forget Password
        </h1>

        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary-white capitalize ">
                    Password
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        {...field}
                        className="focus-visible:ring-1 focus-visible:ring-[#684B3C] focus-visible:ring-offset-0   rounded-none"
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
                  <FormLabel className="text-primary-white capitalize ">
                    Confirm Password
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm Password"
                        {...field}
                        className="focus-visible:ring-1 focus-visible:ring-[#684B3C] focus-visible:ring-offset-0   rounded-none"
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

            <div>
              <Button
                disabled={isLoading}
                type="submit"
                className="bg-[#FDFDFD] group overflow-hidden text-black w-full rounded-full hover:text-white mt-3"
              >
                Submit
                {isLoading && <LoadingSpin />}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SetNewPasswordForm;
