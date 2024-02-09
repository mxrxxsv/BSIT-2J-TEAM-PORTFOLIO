let modeRelax = false;
let movement = 0;
let stopwatch;
let Cardgroup = [ 
     ["🦄","🍦"], 
     ["🌈","👽"], 
     ["🐈‍⬛","🐈", "🐕","🐩"],
     ["🦓","🦒", "🐆","🐅"],
     ["🦖","🫏", "🏇","🦝"]
];

let levelActual = 0;
let levels = [
    {
        cards: Cardgroup[0],
        movementMax: 4
    },
    {
        cards: Cardgroup[0].concat(Cardgroup[1]),
        movementMax: 10
    },
    {
        cards: Cardgroup[0].concat(Cardgroup[1], Cardgroup[2]),
        movementMax: 14
    },
    {
        cards: Cardgroup[0].concat(Cardgroup[1], Cardgroup[2], Cardgroup[3]),
        movementMax: 25
    },
    {
        cards: Cardgroup[0].concat(Cardgroup[1], Cardgroup[2], Cardgroup[3], Cardgroup[4]),
        movementMax: 60
    }

];


//    ["👾","🤖"] 
// [  ["🐈‍⬛","🐈", "🐕","🐩"], ["🦓","🦒" ,"🐆","🐅"]  ];
// ["👹","👺"]

// 🐈‍⬛🐈🐕🐩🦒🦓🦍🐅🐆

// var groupCard1 = 
// [
//     "🐈","🐂","🐍",
//     "🐕","🦖","🫏",
//     "🏇","🦝"
// ]

// let groupCard2 =
// [
//     "🦖","🐩","🐯",
//     "🐕‍🦺","🐏","🦨",
//     "👾","🤖"
// ]