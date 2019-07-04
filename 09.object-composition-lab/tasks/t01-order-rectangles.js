function orderRectangles(arrayOfRectangleSides) {
    const generateRectangle = (width, height) => {
        return {
            width,
            height,
            area: function() {
                return this.width * this.height;
            },
            compareTo: function(otherRectangle) {
                let comparisonResult = otherRectangle.area() - this.area();

                if (comparisonResult !== 0) {
                    return comparisonResult;
                }

                comparisonResult = otherRectangle.width - this.width;
                return comparisonResult;
            },
        }
    };

    let rectangles = arrayOfRectangleSides.map(rectInfo => {
        const width = Number(rectInfo[0]);
        const height = Number(rectInfo[1]);
        return generateRectangle(width, height);
    });

    rectangles = rectangles.sort((r1, r2) => r1.compareTo(r2));
    // console.log(rectangles);
    return rectangles;
}

// orderRectangles([[10,5], [3,20], [5,12]]);