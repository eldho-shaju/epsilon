import { atom } from "recoil";

export const bannerImg = atom({
  key: "banner_url", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
