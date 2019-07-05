function solve(selector){
    let biggestDepth = 0;

    const element = document.querySelector(selector);
    let deepestElement;

    function count(element, currentDepth = 0) {
        if (element.children.length > 0) {
            for (const child of element.children) {
                count(child, ++currentDepth);
            }
        } else {
            if (biggestDepth < currentDepth) {
                biggestDepth = currentDepth;
                deepestElement = element;
            }
        }
    }

    count(element);

    while (!deepestElement.isSameNode(element)) {
        deepestElement.classList.add('highlight');
        deepestElement = deepestElement.parentNode;
    }

    element.classList.add('highlight');
}

// solve('#content');