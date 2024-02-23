import React, { useContext } from "react";
import { MyContext } from "../context/StoreProvider";

export const useStoreContext = () => {
  return useContext(MyContext);
};
