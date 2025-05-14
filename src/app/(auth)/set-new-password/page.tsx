import waterMarkImage6 from "@/assets/our-purpose/waterMarkImage6.png";
import Image from "next/image";
import SetNewPasswordForm from "./_components/SetNewPasswordForm";


const SetNewPasswordPage = () => {
  return (
    <div className="relative !z-[99]">
      <div className="absolute bottom-0 right-0">
        <Image src={waterMarkImage6} alt="Watermark" className="opacity-80" />
      </div>
      <div className="absolute md:-top-10 -left-3 ">
        <Image src={waterMarkImage6} alt="Watermark" className="opacity-80" />
      </div>

      {/* main contents */}
      <div className="flex justify-center">
        <SetNewPasswordForm></SetNewPasswordForm>
      </div>
    </div>
  );
};

export default SetNewPasswordPage;
