import { atom } from "recoil";
import { generateUniqueId } from "@utils/generateUniqueId";

export const contactNoAtom = atom({
  key: `contactNoAtom_${generateUniqueId()}`,
  default: "",
});
