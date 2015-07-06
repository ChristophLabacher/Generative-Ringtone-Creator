$(document).ready(function()	{	
	
	try {
		window.AudioContext = window.AudioContext || window.webkitAudioContext;
		context = new AudioContext();
	} catch(e) {
		alert('Web Audio API is not supported in this browser');
	}	
	
	
	$("h1").click(function()	{
		var number = createRandomPhoneNumber();
		$("#phonenumber").val("");
		$("#phonenumber").val(number);
		$(".download").addClass("inactive");
	});
	
	gain = context.createGain();
	gain.gain.value = 1;
	gain.connect(context.destination);
	rec = new Recorder(gain);
	
	$(".buttons").on("click", ".download:not(.inactive)", function()	{
		download();
	});
	
	$(".buttons").on("click", ".play:not(.inactive)", function()	{
		play();
	});
	
	$(".info").click(function()	{
		$(this).text("");
		$(".description").css("height", "100px");
	});
	
});

function shouldPlay(e)	{
	if (e.keyCode == 13) {
		play();
		return false;
	}
}

function play()	{
	var number = $("main form #phonenumber").val();
	var soundfont = $("main form select option:selected").attr("sondFont");
		
	if (number)	{
		number = number.replace(/\s+/g, '');
		number = number.replace(/[^0-9\s]/gi, '')
	
		if (number.length >= 10)	{
			generateSoundFromPhoneNumber(number, soundfont);
			$("form .warning").remove();
		} else	{
			$("form .warning").remove();
			$("form").append("<div class=\"warning\"></div>");
			$("form .warning").text("Please enter a valid phone number with at least ten characters.");
		}
	} else	{
		$("form .warning").remove();
		$("form").append("<div class=\"warning\"></div>");
		$("form .warning").text("Please enter a valid phone number with at least ten characters.");
	}
}

function createRandomPhoneNumber()	{
	var phoneNumber = "01";
	
	for (var i = 0; i < 9; i++)	{
		phoneNumber += random(0,9);
		
		if (i == 1)	{
			phoneNumber += " ";
		}
	}
	
	return phoneNumber;
}
function generateSoundFromPhoneNumber(phoneNumber, soundFont)	{	
	var reversePhoneNumber = phoneNumber.split("").reverse().join("");
	var indentifier = reversePhoneNumber;
	
/*
	for (var i = 0; i < reversePhoneNumber.length && i < 10; i += 2)	{
		indentifier += reversePhoneNumber.charAt(i);
	}
*/
	
	// Convert indentifier to chord
	var scale = conversion[indentifier.charAt(0)].scale;
	var key = conversion[indentifier.charAt(2)].key;
	var secondTone = conversion[indentifier.charAt(4)].secondTone;
	var thirdTone = conversion[indentifier.charAt(6)].thirdTone;
	var seven = conversion[indentifier.charAt(8)].seven;
	var firstPause = conversion[indentifier.charAt(1)].firstPause;
	var secondPause = conversion[indentifier.charAt(5)].secondPause;
		
	var chord = conversion[indentifier.charAt(0)].scale + conversion[indentifier.charAt(1)].key;
	var text = "<div class=\"chord-info\">";
	
	if (scale == "Eb" || scale == "E" || scale == "F" || scale == "Ab" || scale == "A")	{
		text += "It’s an " + chord;
	} else	{
		text += "It’s a " + chord;
	}	
	
	if (seven == true)	{
		text += "<sup>7</sup>"
	}
	
	if (secondTone == "-")	{
		text += ", where the second tone is transposed down";
	} else if (secondTone == "+")	{
		text += ", where the second tone is transposed up";
	}
	
	if (secondTone == "-" || secondTone == "+")	{
		if (thirdTone == "-")	{
			text += " and the third tone is transposed down";
		} else if (thirdTone == "+")	{
			text += " and the third tone is transposed up";
		}
	} else if (thirdTone == "+")	{
		text += ", where the third tone is transposed up";
	} else if (thirdTone == "-")	{
		text += ", where the third tone is transposed down";
	}
	
	text += ".";
	
	if (firstPause)	{
		text += "There is a small pause beween the first and the second tone"
	} else if (secondPause)	{
		text += "There is a small pause beween the second and the third tone."
	}
	
	if (firstPause && secondPause)	{
		text += " and a small pause beween the second and the third tone."
	} else if (firstPause)	{
		text += ".</div>";		
	}
	
	
	$(".chord-description-container").empty().prepend(text);
	
	if (key == "maj")	{
		// Get major chord
		// First tone
		var first = scale;
				
		// Second tone
		var basetone = getToneNumber(scale);
		basetone = ((parseInt(basetone) + 4)%13);
		if (basetone == 0) { basetone = 1 };
		basetone = basetone.toString();
		var second = getToneName(basetone);
		
		// Third tone
		basetone = ((parseInt(basetone) + 3)%13);
		if (basetone == 0) { basetone = 1 };
		basetone = basetone.toString();
		var third = getToneName(basetone);		
	} else {
		// Get minor chord
		// First tone
		var first = scale;
				
		// Second Tone
		var basetone = getToneNumber(scale);
		basetone = ((parseInt(basetone) + 3)%13);
		if (basetone == 0) { basetone = 1 };
		basetone = basetone.toString();
		var second = getToneName(basetone);
		
		// Third tone
		basetone = ((parseInt(basetone) + 4)%13);
		if (basetone == 0) { basetone = 1 };
		basetone = basetone.toString();
		var third = getToneName(basetone);
	}	
	
	// Get pitch
	first += soundFonts[soundFont].pitch;
	
	if (secondTone == "0")	{
		second += soundFonts[soundFont].pitch;
	} else if (secondTone == "-")	{
		second += soundFonts[soundFont].pitch-1;
	} else if (secondTone == "+")	{
		second += soundFonts[soundFont].pitch+1;		
	}
	
	if (thirdTone == "0")	{
		third += soundFonts[soundFont].pitch;
	} else if (thirdTone == "-")	{
		third += soundFonts[soundFont].pitch-1;
	} else if (thirdTone == "+")	{
		third += soundFonts[soundFont].pitch+1;		
	}
	
	var chord = [first, second, third];
	
	if (seven == true)	{
		// Second Tone
		var basetone = getToneNumber(scale);
		basetone = ((parseInt(basetone) + 7)%13);
		if (basetone == 0) { basetone = 1 };
		basetone = basetone.toString();
		var seven = getToneName(basetone);
		seven += soundFonts[soundFont].pitch+1;
		chord.push(seven);
	}
	
	var firstTime = 0;
	var secondTime = 0;
	var thirdTime = 0;
	var forthTime = 0;
	
	if (firstPause)	{
		secondTime = firstTime + 200;
	} else	{
		secondTime = firstTime + 50;
	}
	
	if (secondPause)	{
		thirdTime = secondTime + 200;
	} else	{
		thirdTime = secondTime + 50;
	}
	
	forthTime = thirdTime + 50;
	
	times = [firstTime, secondTime, thirdTime, forthTime];
	
	var files = [];
	for (var i = 0; i < chord.length; i++)	{
		file = '../data/' + soundFonts[soundFont].title + '.stereo/' + soundFonts[soundFont].title + '.' + chord[i] + '.stereo.wav';
		files.push(file);
	}
	
	bufferLoader = new BufferLoader(
		context,
		files,
		playSounds
	);
	bufferLoader.load();
}

function playSounds(bufferList) {
	
	var sounds = [];
	
	for (var i = 0; i < bufferList.length; i++ )	{
		var sound = context.createBufferSource();
		sound.buffer = bufferList[i];
		sound.connect(gain);
		
		sounds.push(sound);
	}
	
	rec.clear();
	$(".download").addClass("inactive");
	rec.record();
	
	setTimeout(function() {
		rec.stop();
		$(".download").removeClass("inactive");
		clearInterval(fadeOut);
	}, 2000)

	gain.gain.value = 1;
	
	for (var i = 0; i < sounds.length; i++)	{
		setTimeout(function(sound)	{
			sound.start();
		}, times[i], sounds[i])
	}
	
	if (typeof fadeOut !== 'undefined')	{
		clearInterval(fadeOut);
	}
	
	fadeOut = setInterval(function() {
		gain.gain.value *= .7;
	},  100);
}

function download()	{
	rec.exportWAV(function(blob) {
		var number = $("main form #phonenumber").val();
		var soundFont = $("main form select option:selected").attr("sondFont");
		soundfont = soundFonts[soundFont].title;
		soundfont = soundfont.split(".")[0] + "-" + soundfont.split(".")[1];
		
		var title = number + "-" + soundfont;
		
		Recorder.forceDownload(blob, title);
	});
}



/////////////////////////////////////////////
// BufferLoader Prototype
/////////////////////////////////////////////

function BufferLoader(context, urlList, callback) {
  this.context = context;
  this.urlList = urlList;
  this.onload = callback;
  this.bufferList = new Array();
  this.loadCount = 0;
}

BufferLoader.prototype.loadBuffer = function(url, index) {
  // Load buffer asynchronously
  var request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.responseType = "arraybuffer";

  var loader = this;

  request.onload = function() {
    // Asynchronously decode the audio file data in request.response
    loader.context.decodeAudioData(
      request.response,
      function(buffer) {
        if (!buffer) {
          alert('error decoding file data: ' + url);
          return;
        }
        loader.bufferList[index] = buffer;
        if (++loader.loadCount == loader.urlList.length)
          loader.onload(loader.bufferList);
      },
      function(error) {
        console.error('decodeAudioData error', error);
      }
    );
  }

  request.onerror = function() {
    alert('BufferLoader: XHR error');
  }

  request.send();
}

BufferLoader.prototype.load = function() {
  for (var i = 0; i < this.urlList.length; ++i)
  this.loadBuffer(this.urlList[i], i);
}