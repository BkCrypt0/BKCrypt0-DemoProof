import { configureStore } from "@reduxjs/toolkit";
import proofSlice from "./proofSlice";

export default configureStore({
  reducer: {
    proofSlice: proofSlice,
  },
});
