/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = (intervals) => {
    if (intervals.length <= 1) return intervals;

    intervals.sort((a, b) => a[0] - b[0]);

    let result = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        let last = result.at(-1);
        const current = intervals[i];

        if (current[0] <= last[1]) {
            last[1] = Math.max(last[1], current[1]);
        } else {
            result.push(current);
        }
    }

    return result;
};

merge([[1,3],[2,6],[8,10],[15,18]]);
// Шаги:
// 1. Сортировка: [[1,3],[2,6],[8,10],[15,18]]
// 2. Объединение:
//   [1,3] и [2,6] → [1,6]
//   [8,10] — не пересекается, добавляем
//   [15,18] — не пересекается, добавляем
// Результат: [[1,6],[8,10],[15,18]]