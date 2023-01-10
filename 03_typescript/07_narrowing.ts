// Narrowing
function add(a: number, b: number | string): number {
  if (typeof b === "string") {
    return a + parseInt(b);
  }

  return a + b;
}