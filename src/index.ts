// import axios from "axios";
import fetch, { BodyInit } from "node-fetch";
import { Options } from "./interfaces";

class HasteClient {
  private apiKey: string;
  private createNewPasteUrl = "https://pastebin.com/api/api_post.php";

  constructor(apiKey: string) {
    if (typeof apiKey !== "string") {
      throw Error("`apiKey` must be a string!");
    }

    this.apiKey = apiKey;
  }

  /**
   * Creates the paste
   * @param {Options} options The options for the paste
   * @returns {Promise<string>} The URL of the created paste
   */
  async createPaste(options: Options): Promise<string> {
    const res = await fetch(this.createNewPasteUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({
        api_dev_key: this.apiKey,
        api_option: "paste",
        api_paste_code: options.code,
        api_paste_format: options.format ?? "javascript",
        api_paste_private: options.publicity ?? "0",
        api_paste_expire_date: options.expireDate ?? "N",
        api_user_key: options.api_user_key ?? "",
      }),
    });

    const url = await res.text();

    if (url.toLowerCase().startsWith("bad request")) {
      return Promise.reject({ status: "error", error: url });
    }

    return url;
  }

  /**
   * Encodes data to valid URI
   * @param data The data you want to encode
   */
  private encode(data: { [key: string]: unknown }): BodyInit {
    let string = "";

    for (const [key, value] of Object.entries(data)) {
      if (!value) continue;
      string += `&${encodeURIComponent(key)}=${encodeURIComponent(`${value}`)}`;
    }

    return string.substring(1);
  }
}

export default HasteClient;
