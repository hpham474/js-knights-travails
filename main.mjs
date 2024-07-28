function knightMoves(coorA, coorB) {
  const queue = [];
  const visited = [];
  const path = new Map();
  queue.push(coorA);
  path.set(coorA.toString(), null);

  while (queue.length !== 0) {
    const coor = queue.shift();
    visited.push(coor);

    if (coor[0] === coorB[0] && coor[1] === coorB[1]) {
      break;
    }

    const possibleMoves = [];
    possibleMoves.push([coor[0] - 2, coor[1] - 1]);
    possibleMoves.push([coor[0] - 1, coor[1] - 2]);
    possibleMoves.push([coor[0] + 1, coor[1] - 2]);
    possibleMoves.push([coor[0] + 2, coor[1] - 1]);
    possibleMoves.push([coor[0] - 2, coor[1] + 1]);
    possibleMoves.push([coor[0] - 1, coor[1] + 2]);
    possibleMoves.push([coor[0] + 1, coor[1] + 2]);
    possibleMoves.push([coor[0] + 2, coor[1] + 1]);

    for (const move of possibleMoves) {
      if (
        move[0] >= 0 &&
        move[0] < 8 &&
        move[1] >= 0 &&
        move[1] < 8 &&
        !contains(move, visited)
      ) {
        queue.push(move);
        path.set(move.toString(), coor);
      }
    }
  }
  return path;
}

function contains(coor, array) {
  for (const coorArray of array) {
    if (coor[0] === coorArray[0] && coor[1] === coorArray[1]) {
      return true;
    }
  }
  return false;
}

function printPath(path, dest) {
  let knightPath = [];
  let current = dest;
  let level = 0;
  while (current !== null) {
    level++;
    knightPath.unshift(current);
    current = path.get(current.toString());
  }

  console.log(`You made it in ${level - 1} moves! Here's your path:`);
  for (const move of knightPath) {
    console.log(move);
  }
}

const coorA = [0, 0];
const coorB = [7, 7];

const pathTravelled = knightMoves(coorA, coorB);

printPath(pathTravelled, coorB);
