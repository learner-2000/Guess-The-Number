var systemGuess = Math.floor(Math.random()*100)+1;
var guess = 0;
function guessNumber()
{
    var num = document.getElementById('in').value;
    if(num == '' || num > 100 || num < 1)
    {
        var error = 'Input is invalid'
        console.log(error);
        document.getElementById('out').innerHTML = `<i>${error}</i>` 
    }
    else
    {
        guess++;
        var num = parseInt(num);
        if(num == systemGuess)
        {
            var result = 'Correct answer! in ' + guess + ' guesses';
            console.log(result);
            document.getElementById('out').innerHTML = '<i>'+result+'</i>';
        }
        else if(num > systemGuess)
        {
            var small = 'Guess a smaller number';
            console.log(small);
            document.getElementById('out').innerHTML = '<i>'+small+'</i>';
        }
        else
        {
            var great = 'Guess a greater number';
            console.log(great);
            document.getElementById('out').innerHTML = '<i>'+great+'</i>'
        }
    }
}