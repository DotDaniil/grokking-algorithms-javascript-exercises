/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompare = (s, t) => {
    const processBackspaceText = (text) => {
        const result = [];

        for (let i = 0; i < text.length; i++) {
            if (text[i] === '#') {
                result.pop();
            } else {
                result.push(text[i])
            }
        }

        return result.join("");
    };

    return processBackspaceText(s) === processBackspaceText(t);
};

console.log(backspaceCompare("xy##z", "x#y#z")); // Output: true
console.log(backspaceCompare("###abc", "##abc")); // Output: true
console.log(backspaceCompare("bxj##tw", "bxo#j##tw")); // Output: true
console.log(backspaceCompare("a#c", "b")); // Output: false

