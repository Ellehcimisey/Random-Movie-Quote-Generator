var quotes = [ 
  '“Magic Mirror on the wall, who is the fairest one of all?" -Snow White and the Seven Dwarfs, 1937',
  '"They may take our lives, but they\'ll never take our freedom!" -Braveheart, 1995',
  '“Roads? Where we\'re going we don\'t need roads.” -Back to the Future, 1985',
  '“Fasten your seatbelts. It\'s going to be a bumpy night.” -All About Eve, 1950',
  '“You don\'t understand! I coulda had class. I coulda been a contender. I could\'ve been somebody, instead of a bum, which is what I am.” -On the Waterfront, 1954',
  '“Just keep swimming.” -Finding Nemo, 2003',
  '“I am your father.” -Star Wars Episode V: The Empire Strikes Back, 1980',
  '“Today, I consider myself the luckiest man on the face of the earth.” -The Pride of the Yankees, 1942',
  '“I\'m the king of the world!” -Titanic, 1997',
  '“May the Force be with you.” -Star Wars, 1977',
  'Carpe diem. Seize the day, boys. Make your lives extraordinary.” -Dead Poets Society, 1989',
  '“My mama always said life was like a box of chocolates. You never know what you\'re gonna get.” -Forrest Gump, 1994',
  '“My precious.” -The Lord of the Rings: Two Towers, 2002',
  '“Houston, we have a problem.” -Apollo 13, 1995',
  '“Life is a banquet, and most poor suckers are starving to death!” -Auntie Mame, 1958',
  '“Keep your friends close, but your enemies closer.” -The Godfather Part II, 1974',
  '“You is kind. You is smart. You is important.” -The Help, 2011',
  '“Hasta la vista, baby.” -Terminator 2: Judgment Day, 1991',
  'Bond. James Bond." -Dr. No, 1962',
  '“You talking to me?” -Taxi Driver, 1976',
  '“To infinity and beyond!” -Toy Story, 1995',
]


function random(){
  var randomQuote = Math.floor(Math.random() * (quotes.length));
  var quote = document.getElementById("quote").innerText = quotes[randomQuote];
}