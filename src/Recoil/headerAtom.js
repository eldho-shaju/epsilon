import { atom } from "recoil";

export const headerColor = atom({
  key: "content_color", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
