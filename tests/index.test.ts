import dotenv from "dotenv";
import PasteClient from "../dist/index.js";

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

const client = new PasteClient(KEY);

async function test() {
  const token = await client.login(USER_NAME, USER_PASSWORD);

  // const deleted = await client.deletePasteByKey({
  //   pasteKey: "XawZVJdA",
  //   userKey: token,
  // });

  // console.log(deleted);

  const pastes = await client.getPastesByUser({
    userKey: token,
  });

  console.log(pastes);

  // const url = await client.createPaste({
  //   code: "const x = 'hello world!'",
  //   expireDate: "N",
  //   format: "typescript",
  //   name: "hello.ts",
  //   publicity: 0,
  //   apiUserKey: token,
  // });

  // console.log(url);
}

test();
