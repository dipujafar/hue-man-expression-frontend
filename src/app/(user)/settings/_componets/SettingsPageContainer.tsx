import CurrentPlan from "../../user-profile/_components/CurrentPlan";
import ChangePasswordForm from "./ChangePasswordForm";
import UserProfileForm from "./UserProfileForm";

const SettingsPageContainer = () => {
  return (
    <div className="space-y-14">
      {/* ================================== profile ============================ */}
      <div className="md:space-y-6 space-y-4 ">
        <h1 className="xl:text-5xl md:text-3xl text-2xl font-merienda font-semibold text-[#FFA21B]">
          My Profile
        </h1>
        <hr className="border-dotted border border-[#837959]" />
        <UserProfileForm/>
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
          Purchased Plan
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
