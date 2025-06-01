const ProtectScroll = () => {
  return (
    <div
      className="fixed inset-0 w-full h-full bg-transparent z-[9999] pointer-events-auto"
      style={{ overscrollBehavior: "none", touchAction: "none" }}
    />
  );
};

export default ProtectScroll;
