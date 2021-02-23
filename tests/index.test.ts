import "dotenv/config";
import PasteClient from "../src";

const KEY = process.env["TEST_API_KEY"];

if (!KEY) {
  throw Error("No API key was provided for the test!");
}

const client = new PasteClient(KEY);

async function test() {
  const url = await client.createPaste({
    code: "const x = 'hello world!'",
    expireDate: "N",
    format: "typescript",
    name: "hello.ts",
    publicity: "1",
  });

  console.log(url);
}

test();
