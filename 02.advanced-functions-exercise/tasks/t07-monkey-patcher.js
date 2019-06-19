// let solution =
(function monkeyPatcher() {
    function callFunc(postObject, command) {
        switch (command) {
            case 'upvote':
                postObject.upvotes += 1;
                break;

            case 'downvote':
                postObject.downvotes += 1;
                break;

            case 'score':
                const totalVotes = postObject.upvotes + postObject.downvotes;
                let modifiedUpvotes = postObject.upvotes;
                let modifiedDownvotes = postObject.downvotes;

                if (totalVotes > 50) {
                    const greaterValue = Math.max(modifiedUpvotes, modifiedDownvotes);
                    modifiedUpvotes += Math.ceil(greaterValue * 0.25);
                    modifiedDownvotes += Math.ceil(greaterValue * 0.25);
                }
                const differenceUnmodified = postObject.upvotes - postObject.downvotes;
                let rating = '';

                if (totalVotes < 10) {
                    rating = 'new';
                } else if (differenceUnmodified < 0) {
                    rating = 'unpopular';
                } else if (postObject.upvotes / (postObject.upvotes + postObject.downvotes) > 0.66) {
                    rating = 'hot';
                } else if (differenceUnmodified >= 0 && (postObject.upvotes > 100 || postObject.downvotes > 100)) {
                    rating = 'controversial';
                } else {
                    rating = 'new';
                }

                return [modifiedUpvotes, modifiedDownvotes, modifiedUpvotes - modifiedDownvotes, rating];
        }
    }

    return {call: callFunc};
})()

// let post = {
//     id: '3',
//     author: 'emil',
//     content: 'wazaaaaa',
//     upvotes: 100,
//     downvotes: 100
// };
//
// solution.call(post, 'upvote');
// solution.call(post, 'downvote');
// let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
// console.log(score);
// for (let i = 0; i < 50; i += 1) {
//     solution.call(post, 'downvote');
// }
// score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']
// console.log(score);
