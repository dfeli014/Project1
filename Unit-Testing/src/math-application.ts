import { add, multiply } from "./calculator";

export function doMath(one, two, three) {
    return add(multiply(one, two), three);
};