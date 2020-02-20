// find common unique characters between str 1 and 2 in the order of str1.

const commonCharacters = (str1, str2) => {
    let str2Map = str2.split('').reduce((map, char) => {
        map.set(char, char);
        return map;
    }, new Map());

    const charSet = str1.split('').reduce((resultSet, char) => {
        if (str2Map.get(char) !== undefined) {
            resultSet.add(char);
        }
        return resultSet
    }, new Set());
    return [...charSet].join('');
};

console.log(commonCharacters('iecvnkakhfakhffhsadfadskjfhwu', 'ieckhffhsadfadskjfhwu'));