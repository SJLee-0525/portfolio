import { useState, lazy, Suspense } from "react";

import ProtectScroll from "@components/scroll/ProtectScroll";
import LoadingSpinner from "@components/spinner/LoadingSpinner";

import Modal from "@components/modal/Modal";
import PhotoModal from "@components/modal/PhotoModal";

const MainPage = lazy(() => import("@pages/pages/MainPage"));

const App = () => {
  const [animationReady, setAnimationReady] = useState(false);

  return (
    <>
      {!animationReady && <ProtectScroll />}

      <Suspense fallback={<LoadingSpinner />}>
        <MainPage animationReady={animationReady} setAnimationReady={setAnimationReady} />
      </Suspense>

      <Modal />
      <PhotoModal />
    </>
  );
};

export default App;
