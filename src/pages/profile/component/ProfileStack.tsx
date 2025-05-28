import clsx from "clsx";

import { StackItem } from "@/types/profileTypes";

import StarIcon from "@assets/icon/StarIcon";

const ProfileStack = ({ stackType, stackItems }: { stackType: string; stackItems: StackItem[] }) => {
  function getStackType(stackType: string): string {
    switch (stackType) {
      case "Languages":
        return "언어";
      case "Libraries":
        return "라이브러리 / 프레임워크";
      case "Tools":
        return "도구";
      default:
        return stackType;
    }
  }

  const stackTypeKor = getStackType(stackType);

  return (
    <div className="mb-6">
      <h1 className="text-xl text-start font-pre-bold mb-4">{stackTypeKor}</h1>
      <div className="flex flex-wrap items-center justify-start gap-x-4 gap-y-6">
        {stackItems &&
          stackItems.map((stack, i) => {
            const imageClass = clsx("flex items-center justify-center", {
              "w-[100%] h-[100%]": stack.scale === "100%",
              "w-[90%] h-[90%]": stack.scale === "90%",
              "w-[80%] h-[80%]": stack.scale === "80%",
              "w-[70%] h-[70%]": stack.scale === "70%",
            });

            return (
              <figure
                key={i}
                className="flex flex-col items-center justify-center w-fit h-fit gap-1 transform-all duration-300 ease-in-out hover:scale-110"
              >
                <div className="flex items-center justify-center w-20 h-20 rounded-3xl bg-[#fff] aspect-[1] overflow-hidden">
                  <div className={imageClass}>
                    <img src={stack.icon} alt={stack.name} className="w-full h-full object-contain" />
                  </div>
                </div>
                <figcaption className="text-sm text-text text-center font-pre-semi-bold">{stack.name}</figcaption>
                <figure className="flex items-center justify-center w-full h-4 p-1">
                  {stack.level &&
                    Array(stack.level)
                      .fill(null)
                      .map((_, index) => (
                        <span className="flex items-center justify-center w-1/5 h-full" key={index}>
                          <StarIcon width={14} height={14} strokeColor="#E6B50D" />
                        </span>
                      ))}
                </figure>
              </figure>
            );
          })}
      </div>
    </div>
  );
};

export default ProfileStack;
