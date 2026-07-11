import { buildIndex } from "./index";
import { retrieve } from "./search";

async function main() {
  await buildIndex("./sample-data");

 const results = await retrieve(
  "What document formats are supported?"
);

  console.log(results);
}

main();