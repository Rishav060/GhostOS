import { buildIndex } from "./index";
import { retrieve } from "./search";

async function main() {
  await buildIndex("./sample-data");

  const results = await retrieve(
    "Where is my internship offer?"
  );

  console.log(results);
}

main();