function create(words) {
   const divTemplate = document.createElement('div');
   const paragraphForDivTemplate = document.createElement('p');
   paragraphForDivTemplate.style.display = 'none';
   divTemplate.appendChild(paragraphForDivTemplate);
   // divTemplate.addEventListener('click', () => { //.cloneNode(true) doesn't clone the event listener.
   //    this.firstChild.style.display = 'block';
   // });

   const createDivWithParagraphText = (divTemplate, paragraphText) => {
      const result = divTemplate.cloneNode(true);
      result.firstChild.textContent = paragraphText;

      return result;
   };

   const contentDivElement = document.querySelector('div#content');

   for (const word of words) {
      const currentDiv = createDivWithParagraphText(divTemplate, word);
      contentDivElement.appendChild(currentDiv);
   }

   contentDivElement.addEventListener('click', ev => {
      if (ev.target.tagName === 'DIV') {
         ev.target.firstChild.style.display = 'block';
      }
   })
}