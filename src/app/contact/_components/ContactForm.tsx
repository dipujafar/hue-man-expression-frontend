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
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import bgShadowImage from "@/assets/contact/bgShadow.png";
import { MoveRight } from "lucide-react";
import Image from "next/image";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50, { message: "Name must be at most 50 characters" }),
  email: z
    .string()
    .email({ message: "Please enter a valid email" })
    .min(1, { message: "Email is required" }),
  message: z
    .string()
    .min(5, { message: "Message must be at least 5 characters" }),

  subject: z
    .string()
    .min(2, { message: "Message must be at least 2 characters" }),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: "",
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };
  return (
    <div className="max-w-lg md:px-10 px-4 py-7 bg-gradient-to-t from-[#80715D] to-[#b3aa98] relative overflow-hidden z-0">
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
        <h1 className="text-[#684B3C] lg:text-[26px] text-xl capitalize font-madimi">
          A simple form for inquiries related to partnerships, advocacy, or
          Customize Business Packages.
        </h1>

        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Your Name"
                      {...field}
                      className="focus-visible:ring-1 focus-visible:ring-[#684B3C] focus-visible:ring-offset-0 md:py-6 rounded-none"
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
                  <FormControl>
                    <Input
                      placeholder="Your Email"
                      {...field}
                      className="focus-visible:ring-1 focus-visible:ring-[#684B3C] focus-visible:ring-offset-0 md:py-6 rounded-none"
                    />
                  </FormControl>
                  <FormMessage className="space-y-0" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Subject"
                      {...field}
                      className="focus-visible:ring-1 focus-visible:ring-[#684B3C] focus-visible:ring-offset-0 md:py-6 rounded-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Your Message...."
                      {...field}
                      rows={5}
                      className="focus-visible:ring-1 focus-visible:ring-[#684B3C] focus-visible:ring-offset-0 rounded-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="bg-[#684B3C] rounded-none group overflow-hidden"
            >
              Send Message{" "}
              <MoveRight
                size={30}
                className="group-hover:translate-x-4 duration-300 font-bold"
              />
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
