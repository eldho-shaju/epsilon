import { atom } from "recoil";
import { generateUniqueId } from "../functions/generateUniqueId";

export const productTypes = atom({
  key: ` productTypes_${generateUniqueId()}`,
  default: [],
});
