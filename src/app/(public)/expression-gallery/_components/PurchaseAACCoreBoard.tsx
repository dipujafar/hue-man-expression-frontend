"use client";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import CommonButton from "@/components/ui/common-button";
import { useState } from "react";
import { useCreatePaymentMutation } from "@/redux/api/paymentApi";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { LoginDialog } from "@/components/shared/LoginDialog";
import { Error_Modal } from "@/modals/modals";
import LoadingSpin from "@/components/ui/loading-spin";

const FormSchema = z.object({
  type: z.enum(["single", "bundle"], {
    required_error: "You need to select a package type.",
  }),
});

const PurchaseAACCoreBoard = () => {
  const [createPayment, { isLoading }] = useCreatePaymentMutation();
  const [openLoginDialog, setOpenLoginDialog] = useState(false);
  const user = useAppSelector((state) => state.auth.user);
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    if (!user) {
      setOpenLoginDialog(true);
      return;
    }
    const submitData = {
      package_name: data.type,
      price: data.type === "single" ? 25 : 45,
      web: true,
    };

    try {
      const res = await createPayment(submitData).unwrap();
      if (res?.data?.url) {
        router.push(res?.data?.url);
      }
    } catch (error: any) {
      Error_Modal({ title: error?.data?.message });
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex gap-x-6 gap-y-2 justify-center flex-wrap md:text-2xl text-xl font-merienda text-[#684B3C]"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="single" />
                      </FormControl>
                      <FormLabel id="single" className="font-normal md:text-2xl text-xl" >
                        Price: $25 eac
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="bundle" />
                      </FormControl>
                      <FormLabel id="bundle" className="font-normal md:text-2xl text-xl">
                        Bundle (Boy & Girl): $45
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage className="text-center" />
              </FormItem>
            )}
          />
          <div className=" flex justify-center">
            <CommonButton disable={isLoading}>
              Buy Now {isLoading && <LoadingSpin />}
            </CommonButton>
          </div>
        </form>
      </Form>
      <LoginDialog
        open={openLoginDialog}
        setOpen={setOpenLoginDialog}
      ></LoginDialog>
    </>
  );
};

export default PurchaseAACCoreBoard;
