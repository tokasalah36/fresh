import React, { useState } from "react";
import { InfinitySpin } from "react-loader-spinner";

export default function LoadingScreen() {
  return (
    <>
      <InfinitySpin
       color="white"
        ariaLabel=""
        visible={true}
        width="1"
      />
    </>
  );
}
