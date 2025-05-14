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
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Error_Modal } from "@/modals/modals";
import LoadingSpin from "@/components/ui/loading-spin";
import { useForgetPasswordMutation } from "@/redux/api/authApi";

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email" }),
});

const ForgetPasswordForm = () => {
  const router = useRouter();
  const [sendOtp, { isLoading }] = useForgetPasswordMutation();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const res = await sendOtp(data).unwrap();
      if (res.data) {
        toast.success("OTP Sent Successfully");
        router.push(`/verify-otp?email=${data?.email}&status=forget`  );
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
          Forget Password
        </h1>

        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary-white capitalize ">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Your Email"
                      {...field}
                      className="focus-visible:ring-1 focus-visible:ring-[#684B3C] focus-visible:ring-offset-0  rounded-none"
                    />
                  </FormControl>
                  <FormMessage className="space-y-0" />
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

export default ForgetPasswordForm;
