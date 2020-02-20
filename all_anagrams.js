/* 
code from `ChirpingmermaidCodes` at
https://www.youtube.com/watch?v=TQaIiNJIaYg 
*/

const word = 'abcdd';

(() => {
    const allAnagrams = (word, anagram = '', anagrams = new Set()) => {
        if (!word) {
            anagrams.add(anagram);
            return;
        }

        for (let i = 0; i < word.length; i++) {
            allAnagrams(
                word.slice(0, i) + word.slice(i + 1), 
                anagram + word[i], 
                anagrams
            );
        }
        return anagrams
    };

    console.log(allAnagrams(word).size);
})();

(() => {
    const allAnagrams = (word, anagram = '', anagrams = new Set()) => {
        if (!word) {
            anagrams.add(anagram);
            return anagrams;
        }
        for (let i = 0; i < word.length; i++) {
            allAnagrams(
                word.slice(0, i) + word.slice(i + 1),
                anagram + word[i],
                anagrams
            );
        }
        return anagrams;
    };

    console.log(allAnagrams(word));
})();

(() => {
    const allAnagrams = (word, anagram = '', anagrams = new Set()) => {
        if (!word) {
            anagrams.add(anagram);
        }

        for (let i = 0; i < word.length; i++) {
            allAnagrams(
                word.slice(0, i) + word.slice(i + 1),
                anagram + word[i],
                anagrams
            );
        }
        return anagrams;
    };

    console.log(allAnagrams(word));
})();
