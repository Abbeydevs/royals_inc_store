"use client";
import { useEffect, useState } from "react";

import PreviewModal from "@/components/preview-modal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <>
      <PreviewModal />
    </>
  );
};

export default ModalProvider;
