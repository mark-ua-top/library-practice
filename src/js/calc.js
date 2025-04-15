// іменований import - те що ми імпортуємо пишемо в фігурних дужках
import { plus } from "./plus";
import { friends } from "./plus"
import { minus } from "./minus";
import { test } from "./minus"
// дефолтний import - пишемо без фігурних дужок
import multiple from "./multiple"

const x = Number(prompt("введіть число"))
const y = Number(prompt("введіть число"));

const plusRes = plus(x, y)
console.log(plusRes);
console.log(friends);

const minusRes = minus(x, y);
console.log(minusRes)
console.log(test)

const multipleRes = multiple(x, y);
console.log(multipleRes);