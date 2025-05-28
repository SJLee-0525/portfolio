import ProfileImageCarousel from "@pages/profile/component/ProfileImageCarousel";
import ProfileInfo from "@pages/profile/component/ProfileInfo";

const Profile = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row justify-between items-center w-full h-full">
      <ProfileInfo />
      <ProfileImageCarousel />
    </section>
  );
};

export default Profile;
