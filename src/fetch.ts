import { request, Dispatcher } from "undici";

export async function fetch(
  url: string,
  options: Omit<Dispatcher.DispatchOptions, "path" | "origin">,
) {
  return request(url, options);
}
