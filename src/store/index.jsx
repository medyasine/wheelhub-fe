import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import UserSlice from "./UserSlice";
import VehicleSlice from "./VehicleSlice";
import OfferSlice from "./OfferSlice";
import PaymentSlice from "./PaymentSlice";
import DealershipSelice from "./DealershipSelice";
import AppointementSlice from "./AppointementSlice";
import ReviewSlice from "./ReviewSlice";
import InquirySlice from "./InquirySlice";
import NewsArticle from "./NewsArticle";
import PriceDropSlice from "./PriceDropSlice";
import DealershipInventorySlice from "./DealershipInventorySlice";
import VehicleFeatureSlice from "./VehicleFeatureSlice";

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    user: UserSlice,
    vehicle: VehicleSlice,
    offer: OfferSlice,
    payment: PaymentSlice,
    dealership: DealershipSelice,
    appointement: AppointementSlice,
    review: ReviewSlice,
    inquiry: InquirySlice,
    newsArticle: NewsArticle,
    priceDrop: PriceDropSlice,
    dealershipInventory: DealershipInventorySlice,
    vehicleFeature: VehicleFeatureSlice,
  },
});

export default store;
