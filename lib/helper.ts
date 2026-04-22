

export function safeInt(value: string | null, fallback: number, min: number, max: number ): number {
  if (value === null) return fallback;
  const parsed = parseInt(value, 10);
  if (isNaN(parsed)) return fallback;
  return Math.min(Math.max(parsed, min), max);
}

export function isValidId(value: string | null): boolean {
  return value !== null && /^\d+$/.test(value);
}

export function ToCapitalised(value: string): string {
  return value.at(0)?.toUpperCase() + value.slice(1).toLowerCase()
}