function mySolution() {
    const divQuestionTemplate = document.createElement('div');

    const imgAvatar = document.createElement('img');
    imgAvatar.setAttribute('src', './images/user.png');
    imgAvatar.setAttribute('width', '32');
    imgAvatar.setAttribute('height', '32');

    const spanUserName = document.createElement('span');

    const paragraphQuestionHolder = document.createElement('p');

    const divActions = document.createElement('div');
    divActions.classList.add('actions');

    divQuestionTemplate.appendChild(imgAvatar);
    divQuestionTemplate.appendChild(spanUserName);
    divQuestionTemplate.appendChild(paragraphQuestionHolder);
    divQuestionTemplate.appendChild(divActions);


    const divPendingQuestionTemplate = divQuestionTemplate.cloneNode(true);
    divPendingQuestionTemplate.classList.add('pendingQuestion');

    const buttonArchive = document.createElement('button');
    buttonArchive.classList.add('archive');
    buttonArchive.textContent = 'Archive';

    const buttonOpen = document.createElement('button');
    buttonOpen.classList.add('open');
    buttonOpen.textContent = 'Open';

    divPendingQuestionTemplate.querySelector('div.actions').appendChild(buttonArchive);
    divPendingQuestionTemplate.querySelector('div.actions').appendChild(buttonOpen);


    const divOpenQuestionTemplate = divQuestionTemplate.cloneNode(true);
    divOpenQuestionTemplate.classList.add('openQuestion');

    const buttonReplyBack = document.createElement('button');
    buttonReplyBack.classList.add('reply');
    buttonReplyBack.textContent = 'Reply';
    divOpenQuestionTemplate.querySelector('div.actions').appendChild(buttonReplyBack);

    const divReplySection = document.createElement('div');
    divReplySection.classList.add('replySection');
    divReplySection.style.display = 'none';

    const inputReply = document.createElement('input');
    inputReply.classList.add('replyInput');
    inputReply.setAttribute('type', 'text');
    inputReply.setAttribute('placeholder', 'Reply to this question here...');

    const buttonSendReplyMessage = document.createElement('button');
    buttonSendReplyMessage.classList.add('replyButton');
    buttonSendReplyMessage.textContent = 'Send';

    const olElement = document.createElement('ol');
    olElement.classList.add('reply');
    olElement.setAttribute('type', '1');

    divReplySection.appendChild(inputReply);
    divReplySection.appendChild(buttonSendReplyMessage);
    divReplySection.appendChild(olElement);

    divOpenQuestionTemplate.appendChild(divReplySection);

    const createQuestion = (username, question, template) => {
        const resultElement = template.cloneNode(true);
        resultElement.querySelector('span').textContent = username;
        resultElement.querySelector('p').textContent = question;

        return resultElement;
    };

    const divOpenQuestions = document.querySelector('#openQuestions');

    const divPendingQuestions = document.querySelector('#pendingQuestions');
    divPendingQuestions.addEventListener('click', ev => {
        if (ev.target.tagName.toLowerCase() !== 'button') {
            return;
        }

        if (ev.target.classList.contains('archive')) {
            ev.target.parentNode.parentNode.remove();
        } else if (ev.target.classList.contains('open')) {
            const username = ev.target.parentNode.parentNode.querySelector('span').textContent;
            const question = ev.target.parentNode.parentNode.querySelector('p').textContent;
            const openQuestion = createQuestion(username, question, divOpenQuestionTemplate);
            divOpenQuestions.appendChild(openQuestion);
            ev.target.parentNode.parentNode.remove();
        }
    });

    const liBasicElement = document.createElement('li');
    divOpenQuestions.addEventListener('click', ev => {
            if (ev.target.tagName.toLowerCase() !== 'button') {
                return;
            }

            if (ev.target.classList.contains('reply')) {
                if (ev.target.textContent === 'Reply') {
                    ev.target.parentNode.parentNode.querySelector('div.replySection').style.display = 'block';
                    ev.target.textContent = 'Back'
                } else if (ev.target.textContent === 'Back') {
                    ev.target.parentNode.parentNode.querySelector('div.replySection').style.display = 'none';
                    ev.target.textContent = 'Reply';
                }
            } else if (ev.target.classList.contains('replyButton')) {
                const inputReply = ev.target.parentNode.querySelector('input.replyInput');
                if (inputReply.value === '') {
                    return;
                }

                const replyMessage = inputReply.value;
                inputReply.value = '';

                const currentLiElement = liBasicElement.cloneNode(true);
                currentLiElement.textContent = replyMessage;

                ev.target.parentNode.querySelector('ol.reply').appendChild(currentLiElement);
            }

        });

    const textAreaQuestion = document.querySelector('#inputSection textarea');
    const inputUsername = document.querySelector('#inputSection input[type="username"]');
    const buttonSendQuestion = document.querySelector('#inputSection div button');

    buttonSendQuestion.addEventListener('click', () => {
        let username = inputUsername.value;
        if (username === '') {
            username = 'Anonymous';
        }

        inputUsername.value = '';
        const question = textAreaQuestion.value;
        textAreaQuestion.value = '';

        const pendingQuestion = createQuestion(username, question, divPendingQuestionTemplate);
        divPendingQuestions.appendChild(pendingQuestion);
    });
}
