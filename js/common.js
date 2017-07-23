$(function(){
	var keys = 0;
	var lvl = 0;
	var frags = 0;
	var positionGun = 0;
	var X;
	var Y;

	$('.wrapper').mousemove(function(e){
    X = e.pageX;
    Y = e.pageY;
    if(X < 650){
    	$('#gun').css('left', X+30 +'px');
    }
    $('#target').css('left', X-15 + 'px');
    $('#target').css('top', Y-15 + 'px');
  }); 

  $('.wrapper').mousedown(function(){
  	positionGun = 150;
  	var time = setTimeout(function run(){
  		if(keys === 1) return;
  		$('.sound').html('<audio src="sound/gun.mp3" loop autoplay></audio>');
  		$('#gun').css('background-position', positionGun + 'px');
  		if(positionGun == 150){
				positionGun = 300;
  		}else{
				positionGun = 150;
  		}
  		setTimeout(run, 220);
  	}, 0)
  	keys = 0;
  });

  $('.wrapper').mouseup(function(){
  	keys = 1;
  	positionGun = 0;
  	$('#gun').css('background-position', positionGun);
  	$('.sound').html('');
  });

  $('#targetKill').mouseover(function(){
  	if(positionGun != 0){
  	 	frags++;
  	 	if(frags == 80) alert('Победа');
			$('#frags').html(frags); 	
			$('#targetKill').css('display', 'none');	
			if(frags%2 === 0) {
				lvl++;
				$('#lvl').html('Уровень: '+lvl);
			}	
  	}
  });

  $('#targetKill').click(function(){
  	frags++;
  	if(frags == 80) alert('Победа');
		$('#frags').html(frags); 	
		$('#targetKill').css('display', 'none');
			if(frags%2 === 0) {
				lvl++;
				$('#lvl').html('Уровень: '+lvl);
			}			
  });

  function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }

  var showTarget = setTimeout(function targ(){
  	$('#targetKill').css('display', 'block');
  	$('#targetKill').css('left', randomInteger(1,650)+'px');
  	$('#targetKill').css('top', randomInteger(1,250)+'px');
  	setTimeout(targ, 3000-(lvl+'00'));
  },0);

	var positionBat = 25;
  var changeBat = setTimeout(function chngBat(){
  	$('#targetKill').css('background-position', '0 '+positionBat + 'px');
  	if(positionBat == 25){
  		positionBat = 50;
  	}else if(positionBat == 50){
			positionBat = 25;
  	}
  	setTimeout(chngBat, 200);
  },0);

});