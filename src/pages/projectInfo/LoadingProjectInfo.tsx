const LoadingProjectInfo = () => {
  return (
    <section className="flex flex-col items-center justify-start w-full h-fit bg-white">
      <section className="relative w-full h-fit overflow-hidden">
        <figure className="flex transition-transform duration-500 ease-in-out">
          <div className="w-full flex-shrink-0" style={{ width: "100%" }}>
            <div className="aspect-[16/9] bg-black/15 flex items-center justify-center" />
          </div>
        </figure>
      </section>

      <section className="relative flex flex-1 flex-col items-start justify-start w-full h-full px-8 pb-4" />
    </section>
  );
};

export default LoadingProjectInfo;
