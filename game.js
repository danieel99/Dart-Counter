const INPUT1 = document.getElementById("input1");
const INPUT2 = document.getElementById("input2");
const bogeyNumbers = [159, 162, 163, 165, 166, 168, 169, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180];
var allLegs = 0;

var prevPlayer1 = {
    points: 0,
    score: 501,
    mean: 0,
    legMean: 0,
    throws: 0,
    throwsPerLeg: 0,
    sum: 0,
    legs: 0,
    highest: 0,
    highestOut: 0
}
var prevPlayer2 = {
    points: 0,
    score: 501,
    mean: 0,
    legMean: 0,
    throws: 0,
    throwsPerLeg: 0,
    sum: 0,
    legs: 0,
    highest: 0,
    highestOut: 0
}

enterEvent(INPUT1, "input1-button");
enterEvent(INPUT2, "input2-button");

function mainPlayer1(){
    current = currentPlayer("input1", prevPlayer1);
    let archive = prevPlayer1;

    if (0 <= current['points'] && current['points'] <= 180 && current['score'] >= 0 && current['score'] != 1){
        if (current['score'] == 0 && !bogeyNumbers.includes(current['points'])){
            checkoutModal().then(function(result) {
                noThrows = result;
                current = currentPlayer("input1", prevPlayer1, noThrows);
                let end = endLeg(current, prevPlayer2, 'legs1', INPUT1, INPUT2);
                current = end[0];
                prevPlayer2 = end[1];
                prevPlayer1 = current;
                document.getElementById('score1').textContent = current['score'];
                document.getElementById('mean1').textContent = (3*current['mean']).toFixed(2);
                document.getElementById('throwsPerLeg1').textContent = 0;
                document.getElementById('legMean1').textContent = 0;
                document.getElementById('throwsPerLeg2').textContent = 0;
                document.getElementById('legMean2').textContent = 0;
                // document.getElementById('highestOut').textContent = current['points'];
            });
        }
        else if (current['score'] == 0 && bogeyNumbers.includes(current['points'])){
            return;
        }
        else{
            if (between(current['points'], 40, 60)) {plusRanges('40-plus1')}
            else if (between(current['points'], 60, 80)) {plusRanges('60-plus1')}
            else if (between(current['points'], 80, 100)) {plusRanges('80-plus1')}
            else if (between(current['points'], 100, 120)) {plusRanges('100-plus1')}
            else if (between(current['points'], 120, 140)) {plusRanges('120-plus1')}
            else if (between(current['points'], 140, 181)) {plusRanges('140-plus1')}

            document.getElementById('score1').textContent = current['score'];
            document.getElementById('mean1').textContent = (3*current['mean']).toFixed(2);
            document.getElementById('legMean1').textContent = (3*current['legMean']).toFixed(2);
            document.getElementById('throwsPerLeg1').textContent = current['throwsPerLeg'];
            document.getElementById('highest1').textContent = current['highest'];
            
            secondPlayerActive();

            prevPlayer1 = current;
        }
    }
    else{
        return;
    }
    document.getElementById('return').onclick = function(){
        if (between(current['points'], 40, 60)) {repeatRanges('40-plus1')}
        else if (between(current['points'], 60, 80)) {repeatRanges('60-plus1')}
        else if (between(current['points'], 80, 100)) {repeatRanges('80-plus1')}
        else if (between(current['points'], 100, 120)) {repeatRanges('100-plus1')}
        else if (between(current['points'], 120, 140)) {repeatRanges('120-plus1')}
        else if (between(current['points'], 140, 180)) {repeatRanges('140-plus1')}
        let _repeat = repeat(archive, prevPlayer1, 'player1', 'score1', 'mean1', 'input1', 'highest1', 'throwsPerLeg1', 'legMean1');
        prevPlayer1 = _repeat[0];
        archive = _repeat[1];
        INPUT1.value = '';
        INPUT1.focus();
        
    }
}

function mainPlayer2(){
    current = currentPlayer("input2", prevPlayer2);
    let archive = prevPlayer2

    if (0 <= current['points'] && current['points'] <= 180 && current['score'] >= 0 && current['score'] != 1){
        if (current['score'] == 0 && !bogeyNumbers.includes(current['points'])){
            checkoutModal().then(function(result) {
                noThrows = result;
                current = currentPlayer("input2", prevPlayer2, noThrows);
                let end = endLeg(current, prevPlayer2, 'legs2', INPUT2, INPUT1);
                current = end[0];
                prevPlayer1 = end[1];
                prevPlayer2 = current;
                document.getElementById('score2').textContent = current['score'];
                document.getElementById('mean2').textContent = (3*current['mean']).toFixed(2);
                document.getElementById('throwsPerLeg2').textContent = 0;
                document.getElementById('legMean2').textContent = 0;
                document.getElementById('throwsPerLeg1').textContent = 0;
                document.getElementById('legMean1').textContent = 0;
                // document.getElementById('highestOut').textContent = current['points'];
            });
        }
        else if (current['score'] == 0 && bogeyNumbers.includes(current['points'])){
            return;
        }
        else {
            if (between(current['points'], 40, 60)) {plusRanges('40-plus2')}
            else if (between(current['points'], 60, 80)) {plusRanges('60-plus2')}
            else if (between(current['points'], 80, 100)) {plusRanges('80-plus2')}
            else if (between(current['points'], 100, 120)) {plusRanges('100-plus2')}
            else if (between(current['points'], 120, 140)) {plusRanges('120-plus2')}
            else if (between(current['points'], 140, 180)) {plusRanges('140-plus2')}

            document.getElementById('score2').textContent = current['score'];
            document.getElementById('mean2').textContent = (3*current['mean']).toFixed(2);
            document.getElementById('legMean2').textContent = (3*current['legMean']).toFixed(2);
            document.getElementById('throwsPerLeg2').textContent = current['throwsPerLeg'];
            document.getElementById('highest2').textContent = current['highest'];

            firstPlayerActive();
            prevPlayer2 = current;
        }
    }
    else{
        return;
    }
    document.getElementById('return2').onclick = function(){
        if (between(current['points'], 40, 60)) {repeatRanges('40-plus2')}
        else if (between(current['points'], 60, 80)) {repeatRanges('60-plus2')}
        else if (between(current['points'], 80, 100)) {repeatRanges('80-plus2')}
        else if (between(current['points'], 100, 120)) {repeatRanges('100-plus2')}
        else if (between(current['points'], 120, 140)) {repeatRanges('120-plus2')}
        else if (between(current['points'], 140, 180)) {repeatRanges('140-plus2')}
        let _repeat = repeat(archive, prevPlayer1, 'player2', 'score2', 'mean2', 'input2', 'highest2', 'throwsPerLeg2', 'legMean2');
        prevPlayer2 = _repeat[0];
        archive = _repeat[1];
        INPUT2.value = '';
        INPUT2.focus();
    }
}

function currentPlayer(input, prevPlayer, noThrows=3){
    let points = parseInt(document.getElementById(input).value);
    let currentStats = statsPlayer(points, prevPlayer['throws'], prevPlayer['throwsPerLeg'], prevPlayer['sum'], noThrows);
    if (points > prevPlayer['highest']){
        var highest = points;
    }
    else{
        highest = prevPlayer['highest']
    }

    let currentPlayer1 = {
        points: points,
        score: prevPlayer['score'] - points,
        mean: currentStats[0],
        legMean: currentStats[0],
        throws: currentStats[2],
        throwsPerLeg: currentStats[3],
        sum: currentStats[1],
        legs: prevPlayer['legs'],
        highest: highest,
        highestOut: 0
    }
    
    return currentPlayer1
}

function statsPlayer(points, prevThrows, prevThrowsPerLeg, prevSum, noThrows=3){
    let throws = prevThrows + noThrows;
    let throwsPerLeg = prevThrowsPerLeg + noThrows
    let sum = prevSum + points;
    var _mean = sum/throws;

    return [_mean, sum, throws, throwsPerLeg]
}

function enterEvent(input, button){
    input.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
          event.preventDefault();
          document.getElementById(button).click();
      }
    });
  }

function repeat(archive, prevPlayer, player, score, mean, input, highest, throwsPerLeg, legMean){
    if (player == 'player1'){
        firstPlayerActive();
    }
    else{
        secondPlayerActive();
    }
    document.getElementById(score).textContent = archive['score'];
    document.getElementById(mean).textContent = (3*archive['mean']).toFixed(2);
    document.getElementById(highest).textContent = archive['highest'];
    document.getElementById(throwsPerLeg).textContent = archive['throwsPerLeg'];
    document.getElementById(legMean).textContent = archive['legMean'];
    current = currentPlayer(input, archive);
    prevPlayer = archive;

    return [prevPlayer, archive]
  }

function endLeg(current, prevPlayer2, legs, INPUT1, INPUT2 ){
    let _current = {
        points: 0,
        score: 501,
        mean: current['mean'],
        legMean: 0,
        throws: current['throws'],
        throwsPerLeg: 0,
        sum: current['sum'],
        legs: current['legs'] + 1,
        highest: current['highest']
    }
    prevPlayer2 = {
        points: 0,
        score: 501,
        mean: prevPlayer2['mean'],
        legMean: 0,
        throws: prevPlayer2['throws'],
        throwsPerLeg: 0,
        sum: prevPlayer2['sum'],
        legs: prevPlayer2['legs'],
        highest: prevPlayer2['highest']
    }

    if (_current['legs'] == 3){
        alert('Wygrana')
    }

    document.getElementById('score1').textContent = 501;
    document.getElementById('score2').textContent = 501;
    document.getElementById(legs).textContent = _current['legs'];
    
    allLegs += 1;

    if (allLegs%2==0){
        firstPlayerActive();
        INPUT1.value = '';
        INPUT2.value = '';
        INPUT1.focus();
    }
    else{
        secondPlayerActive();
        INPUT1.value = '';
        INPUT2.value = '';
        INPUT2.focus();
    }
    return [_current, prevPlayer2];
  }

function checkoutModal() {
    return new Promise((resolve) => {
      var modal = document.getElementById("myModal");
      var modalContent = document.getElementById("myModalContent");
      modal.style.display = "inline";

      var oneButton = document.getElementById("one");
      oneButton.innerHTML = "1 DART";
      oneButton.addEventListener("click", function() {
        resolve(1);
        modal.style.display = "none";
      });
      modalContent.appendChild(oneButton);
  
      var twoButton = document.getElementById("two");
      twoButton.innerHTML = "2 DART";
      twoButton.addEventListener("click", function() {
        resolve(2);
        modal.style.display = "none";
      });

      modalContent.appendChild(twoButton);
      document.body.appendChild(modal);

      var threeButton = document.getElementById("three");
      threeButton.innerHTML = "3 DART";
      threeButton.addEventListener("click", function() {
        resolve(3);
        modal.style.display = "none";
      });

      modalContent.appendChild(threeButton);
      document.body.appendChild(modal);
    });
  }
  
function firstPlayerActive(){
    document.getElementById("score1").className = "score-active";
    document.getElementById("overlay1").className = "card__overlay__active";
    document.getElementById("header1").className = "card__header__active";
    document.getElementById("card1").style.boxShadow = "0 8px 15px #a5a5a5";
    document.getElementById("input1-div").style.padding = "20px";
    document.getElementById("input1-div").style.display = "inline";
    document.getElementById("return1-div").style.display = "none";

    document.getElementById("score2").className = "score";
    document.getElementById("overlay2").className = "card__overlay";
    document.getElementById("header2").className = "card__header";
    document.getElementById("card2").style.boxShadow = "none";
    document.getElementById("input2-div").style.display = "none";
    document.getElementById("return2-div").style.display = "inline";

    INPUT2.value = '';
    INPUT1.focus();
}

function secondPlayerActive(){
    document.getElementById("score2").className = "score-active";
    document.getElementById("overlay2").className = "card__overlay__active";
    document.getElementById("header2").className = "card__header__active";
    document.getElementById("card2").style.boxShadow = "0 8px 15px #a5a5a5";
    document.getElementById("input2-div").style.padding = "20px";
    document.getElementById("input2-div").style.display = "inline";
    document.getElementById("return2-div").style.display = "none";

    document.getElementById("score1").className = "score";
    document.getElementById("overlay1").className = "card__overlay";
    document.getElementById("header1").className = "card__header";
    document.getElementById("card1").style.boxShadow = "none";
    document.getElementById("input1-div").style.display = "none";
    document.getElementById("return1-div").style.display = "inline";
    
    INPUT1.value = '';
    INPUT2.focus();
}

function between(points, minimum, maximum){
    return points >= minimum && points < maximum;
  }

function plusRanges(id){
    let elem = parseInt(document.getElementById(id).innerHTML)
    elem +=1;
    document.getElementById(id).innerHTML = elem;
}

function repeatRanges(id){
    let elem = parseInt(document.getElementById(id).innerHTML)
    elem -=1;
    document.getElementById(id).innerHTML = elem;
}
