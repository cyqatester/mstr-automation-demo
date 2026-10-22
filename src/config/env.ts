export type TestEnvironment = 'dev' | 'test' | 'prod';

export function getEnvironment(): TestEnvironment {
  const value = (process.env.TEST_ENV ?? 'dev').toLowerCase();
  if (value === 'dev' || value === 'test' || value === 'prod') return value;
  throw new Error(`Unsupported TEST_ENV "${value}". Use dev, test, or prod.`);
}