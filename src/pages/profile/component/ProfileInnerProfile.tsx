import { InnerProfile } from "@/types/profileTypes";

const ProfileInnerProfile = ({ innerProfile }: { innerProfile: InnerProfile }) => {
  return (
    <section className="flex flex-col w-full lg:w-4/5 h-fit px-2">
      <header className="flex flex-col w-full h-full gap-2 px-4 text-start">
        <p className="text-content text-center font-pre-semi-bold lg:text-2xl lg:text-start">
          {innerProfile.introduction ? innerProfile.introduction : ""}
        </p>
        <h1 className="text-2xl text-center font-pre-bold lg:text-5xl lg:text-start">
          {innerProfile.title ? innerProfile.title : ""}
        </h1>
      </header>
    </section>
  );
};

export default ProfileInnerProfile;
