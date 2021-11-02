export const makeUrlFactory = (path: string): string => {
  return `process.env.API_URL${path}`;
};
