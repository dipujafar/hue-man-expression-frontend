"use client";
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
import * as React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  fullName: string;
  email: string;
  image?: FileList; // React Hook Form uses FileList for file inputs
};

export default function UserProfileForm() {
  const form = useForm<FormData>({
    defaultValues: {
      fullName: "Istiak Ahmed",
      email: "istiakahmed@gmail.com",
    },
    mode: "onTouched",
  });

  const [imagePreview, setImagePreview] = React.useState<string | null>(null);

  // Handle preview update when file changes
  const handleImageChange = (files: FileList | null) => {
    if (files && files.length > 0) {
      const file = files[0];
      const url = URL.createObjectURL(file);
      setImagePreview(url);
    } else {
      setImagePreview(null);
    }
  };

  const onSubmit = (data: FormData) => {
    console.log("Submitted data:", data);
    // Do something with data.image (FileList)
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-3"
        noValidate
      >
        <FormField
          control={form.control}
          name="fullName"
          rules={{ required: "Full Name is required" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Full Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Image upload field */}
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem className="md:col-span-2">
              <FormLabel>Profile Image</FormLabel>
              <FormControl>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    field.onChange(e.target.files);
                    handleImageChange(e.target.files);
                  }}
                  className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4
                    file:rounded file:border-0 file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </FormControl>
              <FormMessage />
              {/* Preview */}
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Image Preview"
                  className="mt-2 h-32 w-32 object-cover rounded-md border"
                />
              )}
            </FormItem>
          )}
        />

        <div className="md:col-span-2">
          <Button
            type="submit"
            className="w-full h-10 bg-[#8B7B65] hover:bg-[#7A6C58] text-white rounded-full"
          >
            Save
          </Button>
        </div>
      </form>
    </Form>
  );
}
