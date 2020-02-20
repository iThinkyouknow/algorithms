/*
Start word = hit
end word = cog
approved list = [hot, dot, dog, lot, log, cog];

each time, the word can only transform by one letter.
Find the least transforms required from startword to end word.

answer: hit -> hot -> dot -> dog -> cog
*/

const numberOfTransformations = (startWord, approvedList, endWord) => {
    let counter = 0;
    let notFound = true;
    let answer = approvedList.length;

    const oneOff = (base, list = []) => {
        return list.filter((word) => {
            let counter = 0;
            word.split('').forEach((letter, i) => {
                if (letter !== base.charAt(i)) counter++;
            });
            return counter === 1;
        })
    };

    const inner = (base, list) => {
        counter++;
        if (base === endWord) {
            notFound = false;
            answer = Math.min(answer, counter);
            return;
        }

        let approvedList = oneOff(base, list);
        if (approvedList.length === 0) return;

        for (let i = 0; i < approvedList.length; i++) {
            const listWithoutCurr = list
                .slice(0, list.indexOf(approvedList[i]))
                .concat(list.slice(list.indexOf(approvedList[i]) + 1));
            inner(approvedList[i], listWithoutCurr);
            counter--;
        }
    };
    inner(startWord, approvedList);
    return notFound === true ? 0 : answer;
};

let count = numberOfTransformations('hit', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'], 'cog');

console.log(count);

const numberOfTransformations2 = (startWord, approvedList, endWord) => {
    let counter = 0;
    let notFound = true;
    let answer = approvedList.length;

    const oneOff = (base, approvedList) => {
        return approvedList.filter((word) => {
            let counter = 0;
            word.split('').forEach((char, i) => {
                if (char !== base.charAt(i)) counter++;
            });
            return counter === 1;
        })
    };

    const inner = (base, list) => {
        counter++;
        if (base === endWord) {
            notFound = false;
            answer = Math.min(counter, answer);
            return;
        }

        let approvedList = oneOff(base, list);
        if (approvedList.length === 0) {
            return;
        }

        for (let i = 0; i< approvedList.length; i++) {
            const currWordIndexInList = list.indexOf(approvedList[i]);
            const listWithoutCurr = list
                .slice(0, currWordIndexInList)
                .concat(list
                    .slice(currWordIndexInList + 1)
                );
            inner(approvedList[i], listWithoutCurr);
            counter--;
        }
    };
    inner(startWord, approvedList);
    return notFound === true ? 0 : answer;
};

let count2 = numberOfTransformations2('hit', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'], 'cog');

console.log(count2);

const numberOfTransformations3 = (startWord, approvedList, endWord) => {
    let counter = 0;
    let notFound = true;
    let answer = approvedList.length;

    const oneOff = (base, approvedList) => {
        return approvedList.filter(word => {
            let counter = 0;
            word.split('').forEach((char, index) => {
                if (char === base[index]) counter++;
            });
            return counter === 1;
        });
    };

    

    const inner = (base, list) => {
        counter++;
        if (base === endWord) {
            notFound = false;
            answer = Math.min(answer, counter);
            return;
        };

        const wordList = oneOff(startWord, approvedList);
        if (wordList.length === 0) {
            return;
        }

        wordList.forEach((word, i) => {
            const currentWordIndexInList = list.indexOf(word);
            const listWithoutCurr = list.slice(0, currentWordIndexInList).concat(list.slice(currentWordIndexInList + 1));

            inner(word, listWithoutCurr);
        });

        inner(startWord, approvedList);

        return notFound === true ? 0 : answer;

    }
};

let count3 = numberOfTransformations2('hit', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'], 'cog');

console.log(count3);
