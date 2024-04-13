import { atom } from "recoil";
import { generateUniqueId } from "../functions/generateUniqueId";

export const bannerImgUrl = atom({
  key: ` banner_${generateUniqueId()}`,
  default: "",
});

export const bannerImg = atom({
  key: ` banner_${generateUniqueId()}`,
  default: "",
});
