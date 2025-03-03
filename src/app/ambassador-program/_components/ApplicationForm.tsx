"use client";
import { useForm, Controller } from "react-hook-form";
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
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import bgShadowImage from "@/assets/ambassador-program/sectionBgImage.png";
import Image from "next/image";
import SuccessModal from "./SuccessModal";
import { useState } from "react";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50),
  email: z.string().email({ message: "Please enter a valid email" }).min(1),
  about: z
    .string()
    .min(5, { message: "Message must be at least 5 characters" }),
  promotions: z.array(z.string()).optional(),
  payoutMethod: z.string().optional(),
  productUsage: z.string().optional(),
});

const ApplicationForm = () => {
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      about: "",
      promotions: [],
      payoutMethod: "",
      productUsage: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    setOpenSuccessModal(true);
  };

  const promotionOptions = [
    { label: "Social Media (Posts, Stories, Videos)", value: "social_media" },
    { label: "Blogs Or Newsletters", value: "blogs" },
    { label: "Professional Events Or Workshops", value: "events" },
    { label: "Other", value: "other" },
  ];

  const paymentsOptions = [
    { label: "PayPal", value: "paypal" },
    { label: "Bank Transfer", value: "bank_transfer" },
  ];

  const productUsageOptions = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
  ];

  return (
    <div className="max-w-lg lg:px-20 md:px-10 px-4 py-7 bg-gradient-to-t from-[#534533] to-[#746649] relative overflow-hidden z-0 w-full lg:min-w-[600px]">
      <div className="absolute inset-0 z-10">
        <Image
          src={bgShadowImage}
          alt="bgShadowImage"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="lg:space-y-10 space-y-6 relative z-20">
        <h1 className="lg:text-5xl text-2xl text-center text-[#FFA21B] font-merienda">
          Application Form
        </h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Field */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary-white capitalize font-outfit text-lg">
                    Your Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your name"
                      {...field}
                      className="rounded-none py-6"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary-white capitalize font-outfit text-lg">
                    Email Address
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      {...field}
                      className="rounded-none py-6"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* About Field */}
            <FormField
              control={form.control}
              name="about"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary-white capitalize font-outfit text-lg">
                    Tell Us About Yourself <br /> What inspires you to join this
                    mission?
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Your answer here..."
                      {...field}
                      rows={5}
                      className="rounded-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Promotions Section */}
            <FormField
              control={form.control}
              name="promotions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary-white capitalize font-outfit text-lg">
                    How Do You Plan to Promote Our Materials?
                  </FormLabel>
                  <FormControl>
                    <div className="space-y-2 font-outfit">
                      {promotionOptions.map((option) => (
                        <label
                          key={option.value}
                          className="flex items-center space-x-3"
                        >
                          <Controller
                            name="promotions"
                            control={form.control}
                            render={({ field }) => (
                              <Checkbox
                                className="border-primary-white data-[state=checked]:bg-[#534533] rounded-none"
                                checked={field.value?.includes(option.value)}
                                onCheckedChange={(checked) => {
                                  const newValue = checked
                                    ? [...(field.value || []), option.value]
                                    : field.value?.filter(
                                        (v) => v !== option.value
                                      );
                                  field.onChange(newValue);
                                }}
                              />
                            )}
                          />
                          <span className="text-white">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Payout Method (Radio) */}
            <FormField
              control={form.control}
              name="payoutMethod"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary-white capitalize font-outfit text-lg">
                    Preferred Payout Method For Earnings:
                  </FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} className=" ">
                      {paymentsOptions.map((option) => (
                        <label
                          key={option.value}
                          className="flex items-center space-x-3"
                        >
                          <RadioGroupItem
                            value={option.value}
                            className="border-primary-white"
                          />
                          <span className="text-white">{option.label}</span>
                        </label>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Product Usage (Radio) */}
            <FormField
              control={form.control}
              name="productUsage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary-white capitalize font-outfit text-lg">
                    Do You Currently Use Any Hue-Man Expressions Products?
                  </FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} className="">
                      {productUsageOptions.map((option) => (
                        <label
                          key={option.value}
                          className="flex items-center space-x-3"
                        >
                          <RadioGroupItem
                            value={option.value}
                            className="border-primary-white"
                          />
                          <span className="text-white">{option.label}</span>
                        </label>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              className="bg-primary-white rounded-full text-black hover:text-primary-white w-full hover:bg-gray-700 duration-500"
            >
              Send Request
            </Button>
          </form>
        </Form>
      </div>
      <SuccessModal
        open={openSuccessModal}
        setOpen={setOpenSuccessModal}
      ></SuccessModal>
    </div>
  );
};

export default ApplicationForm;
