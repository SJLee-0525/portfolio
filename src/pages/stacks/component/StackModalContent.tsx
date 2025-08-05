import clsx from "clsx";

import { StackItem } from "@/types/profileTypes";

import StarIcon from "@assets/icon/StarIcon";

const StackModalContent = ({ stack }: { stack: StackItem }) => {
  const imageClass = clsx("flex items-center justify-center cursor-pointer", {
    "w-[100%] h-[100%]": stack.scale === "100%",
    "w-[90%] h-[90%]": stack.scale === "90%",
    "w-[80%] h-[80%]": stack.scale === "80%",
    "w-[70%] h-[70%]": stack.scale === "70%",
  });

  return (
    <>
      <header className="flex items-start justify-between w-full h-fit p-6 gap-4 sm:gap-8">
        <figure className="flex w-1/4 aspect-[1/1] items-center justify-center">
          <div className="flex items-center justify-center w-full aspect-[1/1] rounded-2xl overflow-hidden">
            <div className={imageClass}>
              <img src={stack.icon} alt={`${stack.name} icon`} className="w-full h-full" />
            </div>
          </div>
        </figure>

        <section className="flex flex-col items-start justify-start w-3/4 h-fit gap-4">
          <span className="flex flex-col items-start justify-start w-4/5 h-fit gap-1">
            <h2 className="text-xl font-bold w-full font-pre-bold">{stack.name}</h2>

            {/* 스택 레벨 표시 */}
            <figure className="flex items-center justify-start w-fit h-4">
              {stack.level ? (
                Array(5)
                  .fill(null)
                  .map((_, index) => (
                    <span className="flex items-center justify-center w-1/5 h-full" key={index}>
                      <StarIcon
                        width={14}
                        height={14}
                        strokeColor={stack.level && index < stack.level ? "#E6B50D" : "#d9d9d9"}
                      />
                    </span>
                  ))
              ) : (
                <span className="text-sm text-content font-pre-regular">레벨 정보 없음</span>
              )}
            </figure>
          </span>

          {/* 스택 설명 */}
          <article className="hidden sm:flex flex-col items-start justify-start w-full h-fit gap-2.5">
            {stack.description &&
              stack.description.map((line, index) => {
                return (
                  <p key={index} className="text-sm font-pre-regular text-text">
                    {line}
                  </p>
                );
              })}
          </article>
        </section>
      </header>

      {/* 스택 설명 */}
      {stack.description &&
        stack.description.map((line, index) => {
          return (
            <article
              className="flex flex-col items-start justify-start w-full h-fit px-6 pb-6 gap-2.5 sm:hidden"
              key={index}
            >
              <p className="text-sm font-pre-regular text-text">{line}</p>
            </article>
          );
        })}
    </>
  );
};

export default StackModalContent;
