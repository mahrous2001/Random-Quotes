var button = document.getElementById('button');
var Quote = document.getElementById('newQuote');
var Quotes = [
    '“Be yourself; everyone else is already taken.”',
    '“Im selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell dont deserve me at my best.”',
    '“So many books, so little time.”',
    '“Two things are infinite: the universe and human stupidity; and Im not sure about the universe.”',
    '“A room without books is like a body without a soul.”',
    '“Be who you are and say what you feel, because those who mind dont matter, and those who matter dont mind.”',
    '“You know you are in love when you cant fall asleep because reality is finally better than your dreams.”',
    '“You only live once, but if you do it right, once is enough.”',
    '“Be the change that you wish to see in the world.”',
    '“In three words I can sum up everything Ive learned about life: it goes on.”',
    '“If you tell the truth, you dont have to remember anything.”',
    '“Ive learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”',
    '“A friend is someone who knows all about you and still loves you.”',
    '“To live is the rarest thing in the world. Most people exist, that is all.”',
    '“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”',
    '“We accept the love we think we deserve.”',
    '“Without music, life would be a mistake.”',
    '“I am so clever that sometimes I dont understand a single word of what I am saying.”',
    '“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”',
    '“Heres to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. Theyre not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you cant do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.”'
];
var previousNumber = -1;
button.addEventListener('click', function(){
    var randomNumber = Math.floor(Math.random()* Quotes.length);
        if(randomNumber === previousNumber){
            randomNumber = Math.floor(Math.random()* Quotes.length);
        }
        Quote.innerHTML= Quotes[randomNumber];
        previousNumber = randomNumber;
});