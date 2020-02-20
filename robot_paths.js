const { log } = console;

const makeGrid = (n) => {
    let grid = Array.from({length: n}, () => {
            return Array.from({length: n}, () => false)
    });
    
    const toggle = (i, j) => {
        grid[i][j] = !grid[i][j];
    }

    const visited = (i, j) => {
        return grid[i][j];
    }

    return {
        grid,
        toggle,
        visited
    }
};



const pathsCounter = (n) => {
    let paths = 0;
    const { grid, toggle, visited } = makeGrid(n);

    const findPaths = (i, j) => {
        if (i === n - 1 && j === n - 1) { // destination
            paths++;
            return;
        }

        if (i < 0 || i >= n || j < 0 || j >=  n) { // out of grid
            return;
        }

        if (visited(i, j)) {
            return;
        } else {
            toggle(i, j);
            findPaths(i, j + 1); // move right
            findPaths(i + 1, j); // down
            findPaths(i, j - 1); // left
            findPaths(i - 1, j); // up
            toggle(i, j); // reset the start
        }
    }

    findPaths(0, 0);
    return paths;
}

Array.from({length: 8}, (x, index) => index)
    .forEach((i) => {
        log(`(${i}, ${pathsCounter(i)})`);
    });
