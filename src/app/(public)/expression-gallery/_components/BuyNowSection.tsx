"use client";
import SectionBg from "@/assets/expression-gallery/bgImage.png";
import Image from "next/image";
import CommonButton from "@/components/ui/common-button";
import { useCreatePaymentMutation } from "@/redux/api/paymentApi";
import { useState } from "react";
import { PaymentDialog } from "@/components/shared/PaymentDialog";
import { Error_Modal } from "@/modals/modals";
import { LoginDialog } from "@/components/shared/LoginDialog";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import LoadingSpin from "@/components/ui/loading-spin";

const BuyNowSection = () => {
  const [openPaymentDialog, setOpenPaymentDialog] = useState(false);
  const [createPayment, { isLoading }] = useCreatePaymentMutation();
  const [openLoginDialog, setOpenLoginDialog] = useState(false);
  const user = useAppSelector((state) => state.auth.user);
  const router = useRouter();

  const handleOpenPaymentDialog = async () => {
    setOpenPaymentDialog(true);
  };

  const handlePayment = async () => {
    if (!user) {
      setOpenLoginDialog(true);
      return;
    }

    const data = {
      package_name: "combo",
      price: 100,
      web: true,
    };

    try {
      const res = await createPayment(data).unwrap();
      if (res?.data?.url) {
        router.push(res?.data?.url);
      }
    } catch (error: any) {
      Error_Modal({ title: error?.data?.message });
    }
  };
  return (
    <>
      <div className="relative ">
        <Image
          src={SectionBg}
          alt="sectionBgImage"
          className="w-full min-h-[150px]"
        ></Image>
        <div className="absolute inset-0 ">
          <div className="flex flex-col justify-center items-center w-full h-full px-4 py-4 text-primary-white lg:gap-y-8 md:gap-y-2">
            <div className="flex flex-col justify-center items-center lg:gap-y-4 md:gap-y-2 gap-y-1">
              <p className="text-center text-primary-white xl:text-2xl  md:text-sm text-[12px]  xl:max-w-6xl md:max-w-3xl max-w-xl">
                Ready to Transform Your Sessions? Purchase the All-Inclusive
                Deck today for just $100 and unlock a world of representation
                and learning!
              </p>

              <CommonButton
                disable={isLoading}
                submitHandler={handleOpenPaymentDialog}
              >
                Buy Now
                {isLoading && <LoadingSpin></LoadingSpin>}
              </CommonButton>
            </div>
          </div>
        </div>
      </div>
      <PaymentDialog
        open={openPaymentDialog}
        setOpen={setOpenPaymentDialog}
        handleSubmit={handlePayment}
      />

      <LoginDialog open={openLoginDialog} setOpen={setOpenLoginDialog} />
    </>
  );
};

export default BuyNowSection;
