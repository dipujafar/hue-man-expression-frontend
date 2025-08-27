"use client";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import bgShadowImage from "@/assets/contact/bgShadow.png";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { Error_Modal } from "@/modals/modals";
import LoadingSpin from "@/components/ui/loading-spin";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useVerifyOtpMutation } from "@/redux/api/authApi";

const formSchema = z.object({
  otp: z
    .string()
    .min(6, "OTP must be 6 digits")
    .max(6, "OTP must be 6 digits")
    .regex(/^\d+$/, "OTP must contain only numbers"),
});

const VerifyOtpForm = () => {
  const router = useRouter();
  const [verifyOtp, { isLoading }] = useVerifyOtpMutation();

  const email = useSearchParams().get("email");
  const status = useSearchParams().get("status");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      otp: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      if (status === "forget") {
        const formattedData = {
          email,
          otp: data.otp,
        };
        const res = await verifyOtp(formattedData).unwrap();
        if (res?.success) {
          toast.success("OTP Verified Successfully");
          router.replace(`/set-new-password?email=${email}`);
        }
        return;
      }

      const formattedData = {
        email,
        otp: data.otp,
        verify_account: true,
      };
      const res = await verifyOtp(formattedData).unwrap();
      if (res?.success) {
        toast.success("Account Verified Successfully");
        router.replace("/login");
      }
    } catch (error: any) {
      Error_Modal({ title: error?.data?.message });
    }
  };
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
          Verify OTP
        </h1>

        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="otp"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputOTP
                      maxLength={6}
                      value={field.value}
                      onChange={field.onChange}
                    >
                      <InputOTPGroup className="gap-x-2 mx-auto ">
                        {Array(6)
                          .fill(null)
                          .map((_, index) => (
                            <InputOTPSlot
                              key={index}
                              index={index}
                              className="border lg:size-12 bg-[#F5F5F5]"
                            />
                          ))}
                      </InputOTPGroup>
                    </InputOTP>
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

export default VerifyOtpForm;
