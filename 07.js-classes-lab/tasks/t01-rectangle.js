class Rectangle {
    /**
     * @param width {Number}
     * @param height {Number}
     * @param color {String}
     */
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

     calcArea() {
        return this.height * this.width;
    }
}

// let rect = new Rectangle(4, 5, 'red');
// console.log(rect.width);
// console.log(rect.height);
// console.log(rect.color);
// console.log(rect.calcArea());
