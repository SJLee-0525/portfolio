import { PROFILE_INFO } from "@data/ProfileInfo";

import ProfileInnerProfile from "@pages/profile/component/ProfileInnerProfile";
import ContactInfo from "@pages/profile/component/ProfileContactInfo";
import ProfileEducation from "@pages/profile/component/ProfileEducation";
import ProfileAwards from "@pages/profile/component/ProfileAwards";
import ProfileStacks from "@pages/profile/component/ProfileStacks";

const ProfileInfo = () => {
  if (!PROFILE_INFO) {
    return null;
  }

  return (
    <section className="flex-1 flex flex-col items-center w-full h-full gap-2 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      <section className="flex flex-col items-center justify-between w-full h-fit py-8 gap-16 lg:h-screen lg:py-20 flex-shrink-0">
        <ProfileInnerProfile innerProfile={PROFILE_INFO.innerProfile} />
        <ContactInfo contacts={PROFILE_INFO.contacts} />
      </section>
      <section className="flex flex-col items-center w-full h-fit gap-16">
        <ProfileEducation educations={PROFILE_INFO.educations} />
        <ProfileAwards awards={PROFILE_INFO.awards} />
        <ProfileStacks stacks={PROFILE_INFO.stacks} />
      </section>
    </section>
  );
};

export default ProfileInfo;
