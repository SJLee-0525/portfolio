import { Stacks } from "@/types/profileTypes";

import ProfileStack from "@pages/profile/component/ProfileStack";

const ProfileStacks = ({ stacks }: { stacks: Stacks }) => {
  return (
    <section className="flex flex-col w-5/6 lg:w-3/4 h-fit p-4 gap-2">
      <h1 className="text-3xl text-start font-pre-bold">Stacks</h1>

      <div className="flex flex-col w-full h-full gap-5 mt-6">
        {stacks &&
          Object.entries(stacks).map(([stackType, stackItems], index) => {
            return (
              <div key={index} className="flex flex-col w-full h-full gap-4">
                <ProfileStack stackType={stackType} stackItems={stackItems} />
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default ProfileStacks;
