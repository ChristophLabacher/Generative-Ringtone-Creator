function getToneNumber(tone)	{
	switch(tone)	{
		case "C" : return "1"
		case "Db" : return "2"
		case "D" : return "3"
		case "Eb" : return "4"
		case "E" : return "5"
		case "F" : return "6"
		case "Gb" : return "7"
		case "G" : return "8"
		case "Ab" : return "9"
		case "A" : return "10"
		case "Bb" : return "11"
		case "B" : return "12"
	}
}

function getToneName(tone)	{
	switch(tone)	{
		case "1": return "C"
		case "2" : return "Db"
		case "3": return "D"
		case "4" : return "Eb"
		case "5": return "E"
		case "6": return "F"
		case "7" : return "Gb"
		case "8": return "G"
		case "9" : return "Ab"
		case "10": return "A"
		case "11" : return "Bb"
		case "12" : return "B"
	}
}

var conversion = [
	 {
		"number" : 0,
		"scale" : "C",
		"key" : "maj",
		"seven" : true,
		"secondTone" : "-",
		"thirdTone" : "+"
	},{
		"number" : 1,
		"scale" : "D",
		"key" : "min",
		"seven" : true,
		"secondTone" : "0",
		"thirdTone" : "0"
	},{
		"number" : 2,
		"scale" : "Eb",
		"key" : "maj",
		"seven" : false,
		"secondTone" : "+",
		"thirdTone" : "-"
	},{
		"number" : 3,
		"scale" : "E",
		"key" : "min",
		"seven" : false,
		"secondTone" : "-",
		"thirdTone" : "+"
	},{
		"number" : 4,
		"scale" : "F",
		"key" : "maj",
		"seven" : true,
		"secondTone" : "0",
		"thirdTone" : "0"
	},{
		"number" : 5,
		"scale" : "G",
		"key" : "min",
		"seven" : true,
		"secondTone" : "+",
		"thirdTone" : "-"
	},{
		"number" : 6,
		"scale" : "Ab",
		"key" : "maj",
		"seven" : false,
		"secondTone" : "-",
		"thirdTone" : "+"
	},{
		"number" : 7,
		"scale" : "A",
		"key" : "min",
		"seven" : false,
		"secondTone" : "0",
		"thirdTone" : "0"
	},{
		"number" : 8,
		"scale" : "Bb",
		"key" : "maj",
		"seven" : true,
		"secondTone" : "+",
		"thirdTone" : "-"
	},{
		"number" : 9,
		"scale" : "B",
		"key" : "min",
		"seven" : true,
		"secondTone" : "-",
		"thirdTone" : "+"
	}
]

var soundFonts = [
	 {
		"title" : "Marimba.rubber.ff",
		"pitch" : 4
	},{
		"title" : "Marimba.yarn.ff",
		"pitch" : 4
	},{
		"title" : "Vibraphone.dampen.ff",
		"pitch" : 4
	},
	{
		"title" : "Vibraphone.sustain.ff",
		"pitch" : 4
	},
	{
		"title" : "bells.plastic.ff",
		"pitch" : 6
	},
	{
		"title" : "bells.brass.ff",
		"pitch" : 6
	},
	{
		"title" : "Xylophone.hardrubber.ff",
		"pitch" : 5
	},
	{
		"title" : "Xylophone.rosewood.ff",
		"pitch" : 5
	}
]