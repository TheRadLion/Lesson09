// This code starts to run after the HTML page is loaded.
// Here is our array of board games in order
let boardGames = ['Catan', 'Seven Wonders', 'Alhambra', 'Scotland Yard', 'Bandu', 'Machi Koro', 'Careers', 'Heroica', 'Masterpiece', 'Monopoly'];

// Something wrong here, it needs fixing.
for (let count = 0; count < boardGames.length; count++) {  
    // console.log only shows up in the Dev Tools, so use it to figure out what is wrong.
    console.log(boardGames[count]);
    console.log(document.getElementById(count.toString()).innerHTML);
    document.getElementById(count.toString()).innerHTML = boardGames[count];
};
