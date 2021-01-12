import { createSlice, PayloadAction } from "@reduxjs/toolkit";

enum buyingStep {
  Browsing,
  Buying,
  Shipping,
  Paying,
  Confirmed,
}

interface buyingFunnelState {
  step: buyingStep;
}

const initialState = {
  step: buyingStep.Browsing,
} as buyingFunnelState;

const BuyingFunnelSlice = createSlice({
  name: "buying_funnel",
  initialState,
  reducers: {
    fromBrownsingToBuying: () => {},
    fromBuyingToShipping: () => {},
    fromShippingtoConfirmed: () => {},
  },
});

export const {
  fromBrownsingToBuying,
  fromBuyingToShipping,
  fromShippingtoConfirmed,
} = BuyingFunnelSlice.actions;

export default BuyingFunnelSlice.reducer;
