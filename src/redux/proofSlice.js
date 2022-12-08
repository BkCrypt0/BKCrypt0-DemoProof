import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  proof: undefined,
};

export const addProof = (importProof) => (dispatch) => {
  dispatch(addProofSuccess(importProof));
};

const proofSlice = createSlice({
  name: "proofSlice",
  initialState: initialState,
  reducers: {
    addProofSuccess: (state, action) => {
      state.proof = action.payload;
    },
  },
});

export default proofSlice.reducer;
export const { addProofSuccess } = proofSlice.actions;
