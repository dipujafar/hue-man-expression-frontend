"use client";
import CustomAvatar from "@/components/shared/CustomAvatar";
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
import LoadingSpin from "@/components/ui/loading-spin";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { Error_Modal } from "@/modals/modals";
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from "@/redux/api/profileApi";
import { previewImage } from "@/utils/previewImage";
import { ImageUp, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type FormData = {
  name: string;
  email: string;
  image?: FileList; // React Hook Form uses FileList for file inputs
};

export default function UserProfileForm() {
  const { data: userData, isLoading: isUserDataLoading } =
    useGetProfileQuery(undefined);
  const [updateProfile, { isLoading }] = useUpdateProfileMutation();

  console.log(userData);

  const form = useForm<FormData>({
    defaultValues: {
      name: userData?.data?.name,
      email: userData?.data?.email,
    },
  });

  useEffect(() => {
    form.setValue("name", userData?.data?.name);
    form.setValue("email", userData?.data?.email);
  }, [userData]);

  const [imagePreview, setImagePreview] = useState<string | null>(null);

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
    if (!data?.image && data?.name === userData?.data?.name) {
      return;
    }
    const formattedData = {
      name: data?.name,
    };

    const formData = new FormData();
    formData.append("data", JSON.stringify(formattedData));
    formData.append("image", data.image?.[0] ?? "");

    try {
      updateProfile(formData).unwrap();
      toast.success("Profile Updated Successfully");
      setImagePreview(null);
      form.reset();
    } catch (error: any) {
      Error_Modal({ title: error?.data?.message });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-5"
        noValidate
      >
        {/* Image upload field */}
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Profile Image</FormLabel>
              <div className="relative size-48 mx-auto ">
                {isUserDataLoading ? (
                  <Skeleton className="size-48 object-cover mx-auto rounded-full" />
                ) : (
                  <CustomAvatar
                    className="size-48 object-cover mx-auto"
                    img={imagePreview || previewImage(userData?.data?.image)}
                    name={userData?.data?.name}
                    fallbackClass="lg:text-5xl"
                  ></CustomAvatar>
                )}

                <input
                  id="avatarInput"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    field.onChange(e.target.files);
                    handleImageChange(e.target.files);
                  }}
                />
                <label
                  htmlFor="avatarInput"
                  className={cn(
                    "absolute bottom-5 right-3 bg-[#AA9880] text-white size-[29px] flex-center rounded-full cursor-pointer hover:bg-slate-500",
                    imagePreview && "hidden"
                  )}
                >
                  <ImageUp size={20} />
                </label>
                {imagePreview && (
                  <button
                    type="button"
                    onClick={() => {
                      setImagePreview(null);
                      field.onChange(null);
                    }}
                    className="absolute top-2 right-5 bg-red-500 text-white p-1 rounded-full"
                  >
                    <Trash2 size={16} />
                  </button>
                )}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-5 gap-3">
          <FormField
            control={form.control}
            name="name"
            rules={{ required: "Full Name is required" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  {isUserDataLoading ? (
                    <Skeleton className="h-10" />
                  ) : (
                    <Input
                      placeholder="Full Name"
                      {...field}
                      className="bg-gray-100"
                    />
                  )}
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
                  {isUserDataLoading ? (
                    <Skeleton className="h-10" />
                  ) : (
                    <Input
                      type="email"
                      disabled
                      placeholder="Email"
                      {...field}
                      className="bg-gray-100"
                    />
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="md:col-span-2">
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full h-10 bg-[#8B7B65] hover:bg-[#7A6C58] text-white rounded-full"
          >
            Save
            {isLoading && <LoadingSpin className="ml-2 animate-spin" />}
          </Button>
        </div>
      </form>
    </Form>
  );
}
