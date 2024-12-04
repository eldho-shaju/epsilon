export function generateUniqueId() {
  const array = new Uint32Array(4);
  crypto.getRandomValues(array);
  return (
    array[0].toString(36) +
    "-" +
    array[1].toString(36) +
    "-" +
    array[2].toString(36) +
    "-" +
    array[3].toString(36)
  );
}
