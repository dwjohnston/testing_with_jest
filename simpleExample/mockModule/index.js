export function alpha(n) {
    return `${n}${beta(n)}${n}`;
}

export function beta(n) {
    return new Array(n).fill(0).map(() => ".").join("");
}


