import { atom } from "recoil";
import { generateUniqueId } from "../functions/generateUniqueId";

export const contactNoAtom = atom({
  key: `contactNoAtom_${generateUniqueId()}`,
  default: "",
});
