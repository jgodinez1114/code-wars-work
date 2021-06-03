/*
 * Purpose: dtermine if a walk in the city can take exactly 10 minutes
 * you are at an origin and given directions at random.
 * you know it takes you 1 min to walk 1 block in the city.
 * each direction given to you is for exaxtly 1 block.
 * ex: 'n' means walk North 1 block, 'w' means walk West 1 block.
 * determine if you can start the walk and be back at your origin in exactly 10 mins
 *
 * Params: an array of directions
 * Returns: true if the walk takes exactly 10 mins, false otherwise
 * Example: ['n', 'n', 'e', 'e', 'e','w','w', 'w', 's','s'] reutrns true
 *          ['s', 's','s','n', 'w, 'e', 'e']
 */

function isValidWalk(walk) {
  // decalre, init move horiz
  let moveHoriz = 0;
  // declre, init move vertical
  let moveVert = 0;
  // declare, init time lapse
  const timeLapse = walk.length;
  // traverse the directions array
  for (let i = 0; i < walk.length; i += 1) {
    // switch on the given direction element
    switch (walk[i]) {
      // given an n, move vert increases
      case 'n':
        moveVert += 1;
        break;
      // given an s, move vert goes down
      case 's':
        moveVert -= 1;
        break;
      // given an e, move horiz goes up
      case 'e':
        moveHoriz += 1;
        break;
      // given a w, move horiz goes down
      case 'w':
        moveHoriz -= 1;
        break;

      default:
        return 0;
    }
  }
  // return true
  return timeLapse === 10 && moveHoriz === 0 && moveVert === 0;
} // end isValidWalk()

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
console.log(
  isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e'])
);
console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
