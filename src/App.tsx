import { useState } from "react";

import ProtectScroll from "@components/scroll/ProtectScroll";

import MainPage from "@pages/pages/MainPage";

import Modal from "@components/modal/Modal";

const App = () => {
  const [animationReady, setAnimationReady] = useState(false);

  return (
    <>
      {!animationReady && <ProtectScroll />}

      <MainPage animationReady={animationReady} setAnimationReady={setAnimationReady} />

      <Modal />
    </>
  );
};

export default App;
