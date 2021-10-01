import type { RequestInit } from "node-fetch";

export const fetch = async (url: string, init: RequestInit) => {
  const { default: fetch } = await import("node-fetch");
  return fetch(url, init);
};
