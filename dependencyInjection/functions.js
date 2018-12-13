export const _a = function (_b, ...numbers) {
    return numbers.map(n => _b(n));
};

export const b = function (n) {
    return n + 1;
}

export const a = _a.bind(null, b); 
