export const formatText = (subCollection) => {
  if (subCollection) return subCollection?.replace(/[-:/]/g, " ");
};
