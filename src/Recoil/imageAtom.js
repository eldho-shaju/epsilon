import { atom } from "recoil";
import { generateUniqueId } from "../functions/generateUniqueId";

export const getPosition = atom({
  key: ` getPosition_${generateUniqueId()}`,
  default: false,
});

export const bannerImg = atom({
  key: ` banner_${generateUniqueId()}`,
  default: false,
});
