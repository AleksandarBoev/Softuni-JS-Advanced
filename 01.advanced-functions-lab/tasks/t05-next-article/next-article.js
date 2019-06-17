function getArticleGenerator(input){   
	const divContentElement = document.querySelector('#content');

	return () => {
	    if (input.length === 0)
	        return;

        divContentElement.innerHTML += input.shift();
    }
}