const test = require("ava");
const PasteClient = require("../dist").default;

// todo: use TS instead of JS
// todo: add workflow for tests

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
