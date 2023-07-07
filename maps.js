/*
 * Reglas:
 * El final de cada nivel debe ser el inicio del siguiente
*/

const emojis = {
  '-': ' ',
  'O': '🚪',
  'X': '💣',
  'I': '🎁',
  'PLAYER': '💀',
  'BOMB_COLLISION': '🔥',
  'GAME_OVER': '👎',
  'WIN': '🏆',
  'HEART': '❤️'
};

const maps = [];



maps.push(`
  IXXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  OXXXXXXXXX
`);
maps.push(`
  O--XXXXXXX
  X--XXXXXXX
  XX----XXXX
  X--XX-XXXX
  X-XXX--XXX
  X-XXXX-XXX
  XX--XX--XX
  XX--XXX-XX
  XXXX---IXX
  XXXXXXXXXX
`);

// maps.push(`
//   XXXXX----X
//   XXXXX-XXIX
//   XXXX--XX--
//   XXXX-XXXX-
//   XXXX--XXX-
//   XXXXX-XXX-
//   XXXXX--XX-
//   XXXXXX---X
//   XXXXXXXOXX
//   XXXXXXXXXX
// `);

// maps.push(`
//   X-----XXXX
//   X-XXX-XXOX
//   X-XX--XX--
//   ---I-XXXX-
//   -X-X--XXX-
//   -X-XX-XXX-
//   -X-XX--XX-
//   -X--XXX---
//   -XX-XXX-XX
//   --------XX
// `);


// maps.push(`
//   I-----XXXX
//   XXXXX-XXXX
//   XX----XXXX
//   XX-XXXXXXX
//   XX-----XXX
//   XXXXXX-XXX
//   XX-----XXX
//   XX-XXXXXXX
//   XX-----OXX
//   XXXXXXXXXX
// `);

// maps.push(`
//   O-------XX
//   --XXX-X-XX
//   --XX--X-XX
//   ---X-XX---
//   -X-X--XXX-
//   -X-XX-XX--
//   -X-XX-XX-X
//   -X--X--X--
//   -X--XXX-X-
//   ----XI----
// `);

// maps.push(`
//   XX------XXX
//   ---X-XX-XX
//   -XXXX----X
//   ---XIXXX-X
//   XX-X-XX--X
//   ---X----XX
//   -XXXXXXXXX
//   -XX-----XX
//   -XX-XXX-XX
//   ----XO----
// `);

