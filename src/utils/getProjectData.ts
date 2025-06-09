export function getOpenState(AreOpen: Record<string, boolean>) {
  const values = Object.values(AreOpen);

  if (values.length === 0) return "none";
  if (values.every((v) => v)) return "all-open";
  if (values.every((v) => !v)) return "all-closed";

  return "partial";
}
