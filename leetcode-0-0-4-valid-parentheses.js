/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (str) => {
    const checker = [];
    const checkerMap = new Map;

    const isOpeningParentheses = (char) => char === "(" || char === "{" || char === "[";
    const isClosingParentheses = (char) => char === ")" || char === "}" || char === "]";


    const charMap = new Map();
    charMap.set("(", ")");
    charMap.set("{", "}");
    charMap.set("[", "]");

    const hasSame = (char) => {
        return checker.some(val => checkerMap.get(char) === val);
    }

    const lastSame = (char) => {
        return checker[checker.length - 1] === checkerMap.get(char);
    }

    for (let i = 0; i < str.length; i++) {
        if (isOpeningParentheses(str[i])) {
            checker.push(str[i]);
            checkerMap.set(charMap.get(str[i]), str[i]);
        }
      
        if (isClosingParentheses(str[i])) {
            if (!hasSame(str[i])) {
                return false
            };

            if (!lastSame(str[i])) {
                return false
            }

            checker.pop();
        }
    }

    return !checker.length
};

console.log(isValid("()")); // Output: true
console.log(isValid("()[]{}")); // Output: true
console.log(isValid("(]")); // Output: false
console.log(isValid("({[]})()[]")); // Output: true
console.log(isValid("({[}])")); // Output: false

