import { createSlice, PayloadAction } from "@reduxjs/toolkit";

enum buyingStep{
        Browsing,
        Buying,
        Shipping,
        Confirmed,
}

interface buyingFunnelState{
        step: buyingStep;
}

const initialState = {
        step: Browsing
}

const BuyingFunnelSlice = createSlice({
        name: "buying_funnel",
        initialState,
        reducers: {
                fromBrownsingToBuying: () => {},
                fromBuyingToShipping: () => {},
                fromShippingtoConfirmed: () => {}
        }
})

export const{
        fromBrownsingToBuying,
        fromBuyingToShipping,
        fromShippingtoConfirmed
} = buyingFunnelState.action;

export default BuyingFunnelSlice.reducers
