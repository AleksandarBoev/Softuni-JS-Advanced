class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * @param point1 {Point}
     * @param point2 {Point}
     * @return distance between the two points
     */
    static distance(point1, point2) {
        const sideA = Math.abs(point1.x - point2.x);
        const sideB = Math.abs(point1.y - point2.y);

        return Math.sqrt((sideA * sideA) + (sideB * sideB));
    }
}
//
// let p1 = new Point(5, 5);
// let p2 = new Point(9, 8);
// console.log(Point.distance(p1, p2));
