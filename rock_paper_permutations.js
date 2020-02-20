const rps = (rounds) => {
    let results = [];
    let possibilities = ['r', 'p', 's'];

    const play = (playedSofar, rounds) => {
        console.log(`playsofar ${playedSofar}`)
        if (rounds === 0) {
            results.push(playedSofar);
            return;
        }
        possibilities.forEach(pos => {
            play(playedSofar + pos, rounds - 1);
        });
    }

    play('', rounds);

    return results;
}

const { log } = console;
let date = Date.now();
log(rps(0));
log(rps(1));
log(rps(2));
log(rps(3));
log(Date.now() - date); 