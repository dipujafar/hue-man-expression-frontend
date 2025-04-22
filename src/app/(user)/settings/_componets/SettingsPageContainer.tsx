import CurrentPlan from "../../user-profile/_components/CurrentPlan";
import ChangePasswordForm from "./ChangePasswordForm";

const SettingsPageContainer = () => {
  return (
    <div className="space-y-14">
      {/* ================================== profile ============================ */}
      <div className="md:space-y-6 space-y-4 ">
        <h1 className="xl:text-5xl md:text-3xl text-2xl font-merienda font-semibold text-[#FFA21B]">
          My Profile
        </h1>
        <hr className="border-dotted border border-[#837959]" />
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-3">
          <div>
            <h3 className="font-medium">Full Name</h3>
            <p className="text-[#7E7E7E]">Istiak Ahmed</p>
          </div>
          <div>
            <h3 className="font-medium">Email</h3>
            <p className="text-[#7E7E7E]">istiakahmed@gmail.com</p>
          </div>
          <div>
            <h3 className="font-medium">ID</h3>
            <p className="text-[#7E7E7E]">WEBB-5265</p>
          </div>
        </div>
      </div>
      {/*  ================== change password ============================ */}
      <div className="md:space-y-6 space-y-4 ">
        <h1 className="xl:text-5xl md:text-3xl text-2xl font-merienda font-semibold text-[#FFA21B]">
          Change Password
        </h1>
        <hr className="border-dotted border border-[#837959]" />
        <div>
            <ChangePasswordForm></ChangePasswordForm>
        </div>
      </div>
      {/* ================== current plan ============================ */}
      <div className="md:space-y-6 space-y-4 ">
        <h1 className="xl:text-5xl md:text-3xl text-2xl font-merienda font-semibold text-[#FFA21B]">
          Current Plan
        </h1>
        <hr className="border-dotted border border-[#837959]" />
        <div>
          <CurrentPlan></CurrentPlan>
        </div>
      </div>
    </div>
  );
};

export default SettingsPageContainer;
