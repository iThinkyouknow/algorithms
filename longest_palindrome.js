var longestPalindrome = function (s) {
    /* Preprocess s: insert '#' between characters, so we don't need to worry about even or odd length palindromes. */
    var newStr = "#";
    for (var i = 0; i < s.length; i++) newStr += s.charAt(i) + "#";
    var friendCenter = 0, friendRadius = 0, lpsCenter = 0, lpsRadius = 0;
    var j;
    for (var i = 0; i < newStr.length; i++) {
        /* Calculate dp[i] */
        if (friendCenter + friendRadius > i) {
            j = friendCenter - (i - friendCenter);
            dp[i] = Math.min(dp[j], (friendCenter + friendRadius) - i);
            // console.log(newStr[i], dp[i])
        }
        else {
            dp[i] = 1;
        }
        while (i + dp[i] < newStr.length && i - dp[i] >= 0 && newStr[i + dp[i]] == newStr[i - dp[i]]) dp[i]++;
        if (friendCenter + friendRadius < i + dp[i]) {
            friendCenter = i;
            friendRadius = dp[i];
        }
        if (lpsRadius < dp[i]) {
            lpsRadius = dp[i];
            lpsCenter = i;
        }
    }
    return s.substring((lpsCenter - lpsRadius + 1) / 2, (lpsCenter + lpsRadius - 1) / 2);
};

const longestPalindrome2 = (str) => {
    let newStr = '#';
    for ( let i = 0; i < str.length; i++ ) {
        newStr += str.charAt(i) + '#';
    }
    let dp = [];
    let center = 0;
    let radius = 0;
    let lpsCenter = 0;
    let lpsRadius = 0;
    let mirrored = 0;
    for (let i = 0; i < newStr.length; i++) {
        if (center + radius > i) {
            mirrored = center * 2 - i
            dp[i] = Math.min(dp[mirrored], (center + radius) - i);

        } else {
            dp[i] = 1;
        }

        while (i + dp[i] < newStr.length && i - dp[i] >= 0 && newStr[i + dp[i]] === newStr[i - dp[i]]) {
            dp[i]++;
        }

        if (center + radius < i + dp[i]) {
            center = i;
            radius = dp[i];
        }

        if (lpsRadius < dp[i]) {
            lpsRadius = dp[i];
            lpsCenter = i;
        }
    }
    console.log(lpsCenter, lpsRadius);
    return str.substring((lpsCenter -lpsRadius  + 1) / 2, (lpsCenter + lpsRadius - 1) / 2);
}

// let a = console.time();
// longestPalindrome2('ababac');
// console.timeEnd(a);

const longestPalindrome3 = (str) => {
    let newStr = '#';
    for (let s = 0; s < str.length; s++) {
        newStr += str.charAt(s) + '#';
    }
    let dp = [];
    let center = 0;
    let radius = 0;
    let lpsCenter = 0;
    let lpsRadius = 0;
    let mirrored = 0;

    for (let i = 0; i < newStr.length; i++) {
        if (center + radius > i) {
            mirrored = center * 2 - i;
            dp[i] = Math.min(dp[mirrored], (center + radius) - i);
        } else {
            dp[i] = 1;
        }

        while (i - dp[i] >= 0 && i + dp[i] < newStr.length && newStr[i - dp[i]] === newStr[i + dp[i]]) {
            dp[i]++;
        }
        if (center + radius < i + dp[i]) {
            center = i;
            radius = dp[i];
        }

        if (lpsRadius < dp[i]) {
            lpsRadius = dp[i];
            lpsCenter = i;
        }   
    }
    return str.substring((lpsCenter - lpsRadius + 1) / 2, (lpsCenter + lpsRadius - 1) / 2)
}
console.time('a')
longestPalindrome3('NIYONANOMHMATAMHMONANOYIN');
console.timeEnd('a');

const longestPalindrome4 = (str) => {
    let newStr = '#';
    for (const s of str) {
        newStr += s + '#';
    }
    let dp = [];
    let center = 0;
    let radius = 0;
    let lpsCenter = 0;
    let lpsRadius = 0;
    let mirrored = 0;

    for (let i = 0; i < newStr.length; i++) {
        if (center + radius > i) {
            mirrored = 2 * center - i;
            dp[i] = Math.min(center + radius - i, dp[mirrored]);
        } else {
            dp[i] = 1;
        }

        while (i - dp[i] >= 0 && i + dp[i] < newStr.length && newStr[i + dp[i]] === newStr[i - dp[i]]) {
            dp[i]++;
        }

        if (center + radius < i + dp[i]) {
            center = i;
            radius = dp[i];
        }

        if (dp[i] > lpsRadius) {
            lpsRadius = dp[i];
            lpsCenter = i;
        }
    }
    return str.substring((lpsCenter - lpsRadius + 1) / 2, (lpsCenter + lpsRadius -1) / 2);
}

console.time('b')
longestPalindrome4('NIYONANOMHMATAMHMONANOYIN');
console.timeEnd('b');

const longestPalindrome5 = (str) => {
    // preprocess str
    let newStr = '#';
    for (const s of str) {
        newStr += s + "#";
    }

    let dp = [];
    let center = 0;
    let radius = 0;
    let lpsCenter = 0;
    let lpsRadius = 0;
    let mirrored = 0;

    for (let i = 0; i < newStr.length; i++) {
        if (center + radius > i) {
            mirrored = 2 * center - i;
            // palindrome should be within the boundary of right edge - i or mirror
            dp[i] = Math.min(center + radius - i, dp[mirrored]);
        } else {
            dp[i] = 1;
        }

        while (i - dp[i] >= 0, i + dp[i] < newStr.length && newStr[i + dp[i]] === newStr[i - dp[i]]) {
            dp[i]++;
        }

        if (center + radius < i + dp[i]) {
            center = i;
            radius = dp[i];
        }

        if (dp[i] > lpsRadius) {
            lpsRadius = dp[i];
            lpsCenter = i
        }
    }

    return str.substring((lpsCenter - lpsRadius + 1) / 2, (lpsCenter + lpsRadius - 1) / 2);
};

console.log(longestPalindrome5('abccbaddeefffs'));

const longestPalindrome6 = (str) => {
    let newStr = '#';
    for (const s of str) {
        newStr += s + '#';
    };

    let dp = [];
    let center = 0;
    let radius = 0;
    let lpsCenter = 0;
    let lpsRadius = 0;
    

    for (let i = 0; i < newStr.length; i++) {
        if (center + radius > i) {
            let mirrored = 2 * center  - i;
            dp[i] = Math.min(center + radius - i, dp[mirrored]);
        } else {
            dp[i] = 1;
        }

        while (i - radius >= 0  && i + radius < newStr.length && newStr.charAt(i + dp[i]) === newStr.charAt(i - dp[i])) {
            dp[i]++;
        }

        if (center + radius < i + dp[i]) {
            center = i;
            radius = dp[i];
        }

        if (dp[i] > lpsRadius) {
            lpsCenter = i;
            lpsRadius = dp[i];
        }
    }
    return str.substr((lpsCenter - lpsRadius + 1) / 2, (lpsCenter + lpsRadius - 1) / 2)
};

console.log(longestPalindrome6('abccbaddeefffs'));

const longestPalindrome7 = (str) => {
    let newStr = '#';
    for (const s of str) {
        newStr += s + '#';
    }
    let dp = [];
    let center = 0;
    let radius = 0;
    let lpsCenter = 0;
    let lpsRadius = 0;


    for (let i = 0; i < newStr.length; i++ ) {
        if (radius + center > i) {
            let mirrored = 2 * center - i;
            dp[i] = Math.min(center + radius - i, dp[mirrored]);
        } else {
            dp[i] = 1;
        }

        while (
            i - dp[i] >= 0 && 
            i + dp[i] < newStr.length && 
            newStr.charAt(i - dp[i]) === newStr.charAt(i + dp[i])) {
            dp[i]++;
        }

        if (center + radius < i + dp[i]) {
            center = i;
            radius = dp[i];
        }

        if (dp[i] > lpsRadius) {
            lpsCenter = i;
            lpsRadius = dp[i];
        }
    }
    return str.substr((lpsCenter - lpsRadius + 1) / 2, (lpsCenter + lpsRadius - 1) / 2);
};

console.log(longestPalindrome7('abccbaddeefffs'));