import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Check } from "lucide-react";
import React, { Dispatch } from "react";

const SuccessModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* @ts-ignore */}
      <DialogContent showCloseIcon={true} className="pb-16 md:pt-28 pt-20 ">
        <div className="grid gap-4  text-center">
          <h1 className="md:text-4xl text-2xl text-[#C37E19] font-medium">
            Thank you for applying!
          </h1>
          <p className="md:text-2xl text-lg text-[#684B3C]">
            We’ll review your application and get back to you soon.
          </p>
          <div className="md:size-40 size-32 bg-[#C37E19] absolute -top-20 left-1/4 translate-x-10 rounded-full flex  items-center justify-center">
            <Check color="white" size={100} className="rounded-none"></Check>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessModal;
