import dotenv from "dotenv";
import { PasteClient } from "../dist/index";

dotenv.config();

const KEY = process.env["TEST_API_KEY"];
const USER_NAME = process.env["TEST_USER_NAME"];
const USER_PASSWORD = process.env["TEST_USER_PASSWORD"];

if (!KEY) {
  throw Error("No API key was provided for the test!");
}

if (!USER_NAME || !USER_PASSWORD) {
  throw Error("No user credentials were provided for the test");
}

const client = new PasteClient({ apiKey: KEY });

async function test() {
  const token = await client.login({ name: USER_NAME!, password: USER_PASSWORD! });

  // const deleted = await client.deletePasteByKey({
  //   pasteKey: "XawZVJdA",
  //   userKey: token,
  // });

  // console.log(deleted);

  const pastes = await client.getPastesByUser({
    userKey: token,
  });

  console.log(pastes);

  const data = await client.getRawPasteByKey({
    pasteKey: "CwLWsp26",
    userKey: token,
  });

  console.log(JSON.stringify(data, null, 4));

  // const url = await client.createPaste({
  //   code: "const x = 'hello world!'",
  //   expireDate: ExpireDate.Never,
  //   format: "typescript",
  //   name: "hello.ts",
  //   publicity: Publicity.Private,
  //   apiUserKey: token,
  // });

  // console.log(url);
}

test();
