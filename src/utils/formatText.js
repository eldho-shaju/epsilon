export const formatText = (subCollection, capitalize) => {
  let text;
  if (subCollection) {
    text = subCollection?.replace(/[-:/]/g, " ");
    if (capitalize && text) {
      return text?.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    } else {
      return text;
    }
  }
};
