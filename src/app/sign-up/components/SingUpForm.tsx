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

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email" }),

  password: z.string().min(1, { message: "Password is required" }),
  confirmPassword: z
    .string()
    .min(1, { message: "Confirm Password is required" }),
});

const SingUpForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
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
          Sign Up
        </h1>

        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary-white capitalize ">
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your Name"
                      {...field}
                      className="focus-visible:ring-1 focus-visible:ring-[#684B3C] focus-visible:ring-offset-0  rounded-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary-white capitalize ">
                    Password
                  </FormLabel>
                  <FormControl>
                    <div>
                      <Input
                        type="Enter your password"
                        placeholder="Password"
                        {...field}
                        className="focus-visible:ring-1 focus-visible:ring-[#684B3C] focus-visible:ring-offset-0   rounded-none"
                      />
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
                    <div>
                      <Input
                        type="Enter your password"
                        placeholder="Confirm Password"
                        {...field}
                        className="focus-visible:ring-1 focus-visible:ring-[#684B3C] focus-visible:ring-offset-0   rounded-none"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div>
              <Button
                type="submit"
                className="bg-[#FDFDFD] group overflow-hidden text-black w-full rounded-full hover:text-white mt-3"
              >
                Send Request
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SingUpForm;
