import "dotenv/config";
import test from "ava";
import PasteClient, { CreateOptions } from "../dist";

// todo: add workflow for tests

const TEST_DEV_KEY = process.env["TEST_DEV_KEY"] as string;
const TEST_USER_NAME = process.env["TEST_USER_NAME"] as string;
const TEST_USER_PASSWORD = process.env["TEST_USER_PASSWORD"] as string;

let LOGIN_TOKEN: string | null = null;

const TEST_PASTE_DATA: CreateOptions = {
  code: `const str = 'Hello World!' + ${Math.random() * 1000};`,
  name: "Test Paste",
  format: "javascript",
  expireDate: "10M",
};

const client = new PasteClient(TEST_DEV_KEY);

test("Test should pass with an error '`apiKey` must be a string'", (t) => {
  try {
    new PasteClient("");
    t.fail("No API_KEY was provided but the Client instantiated successfully");
  } catch (e) {
    if (e.message === "`apiKey` must be a string!") {
      t.pass();
    }
  }
});

test("It should create a new paste with a non-authenticated user", async (t) => {
  try {
    const pasteUrl = await client.createPaste(TEST_PASTE_DATA);

    if (pasteUrl.startsWith("https")) {
      return t.pass(`Paste URL: ${pasteUrl}`);
    }

    return t.fail(`An error has occurred: ${pasteUrl}`);
  } catch (e) {
    t.fail(e.message);
  }
});

test("It should login with user credentials", async (t) => {
  try {
    const token = await client.login(TEST_USER_NAME, TEST_USER_PASSWORD);
    LOGIN_TOKEN = token;

    if (token) {
      return t.pass();
    }

    return t.fail("An error has occurred");
  } catch (e) {
    t.fail(e.message);
  }
});

test("It should get up too 1000 pastes of the authenticated user", async (t) => {
  console.log("Waiting to make sure that we have a LOGIN_TOKEN..");

  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  if (!LOGIN_TOKEN) {
    return t.fail("LOGIN_TOKEN was null");
  }

  try {
    const pastes = await client.getPastesByUser({ userKey: LOGIN_TOKEN });

    if (!pastes) {
      return t.fail("Somehow there were no pastes");
    }

    if (pastes?.length <= 1000) {
      return t.pass();
    }

    t.fail("Somehow there were more than 1000 pastes.");
  } catch (e) {
    t.fail(e.message);
  }
});
