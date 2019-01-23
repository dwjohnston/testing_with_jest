import { beta } from "./beta";

export function alpha(n) {
    return `${n}${beta(n)}${n}`;
}