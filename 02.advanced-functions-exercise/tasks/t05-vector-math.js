/*let result = */
(function solve() {
    return {
        add: (vector1, vector2) => [
            vector1[0] + vector2[0],
            vector1[1] + vector2[1]
        ],
        multiply: (vector, multiplier) => [
            vector[0] * multiplier,
            vector[1] * multiplier
        ],
        length: vector => Math.sqrt(vector[0] ** 2 + vector[1] ** 2),
        dot: (vector1, vector2) => vector1[0] * vector2[0] + vector1[1] * vector2[1],
        cross: (vector1, vector2) => vector1[0] * vector2[1] - vector1[1] * vector2[0]
    }
})()

// console.log(result.length([3, -4]));
// console.log(result.cross([3, 7], [1, 0]));