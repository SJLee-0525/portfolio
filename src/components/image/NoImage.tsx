const NoImage = () => {
  return (
    <div className="w-full flex-shrink-0" style={{ width: "100%" }}>
      <div className="aspect-[16/9] bg-black/15 flex items-center justify-center">
        <p className="text-text font-pre-bold">이미지가 없습니다.</p>
      </div>
    </div>
  );
};

export default NoImage;
