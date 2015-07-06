# Generative Ringtone Creator

![](screenshot1.png)

This is an experiment in **generative audio design** created by [Christoph Labacher](http://www.christophlabacher.com). It’s micro-project coded in a day.

Different digits of the phone number are used to create a chord, which can be played with various instruments. The idea is that in a messaging app close friends could get a personal ringtone which would become recognizable over time – so you already know who wrote a message. The ringtones are still supposed to sound consistent, though. The different instruments could be used to symbolize different groups.

The sounds were created by the [University of Iowa Electronic Music Studios](http://theremin.music.uiowa.edu/index.html).

## How many combinations are there?
Seven digits of the phone number are used to create the chord. There are however significantly less than 9,999,999 possible combinations: Every digit except for the first one is altering between two or three states instead of nine. Because of this there are 1440 different results.

Then again, who has 9,999,999 contacts?

## Which properties of the chords are altered?

The phone number is flipped around, then every second digit is taken into consideration. Each one alters the chord according to the following table:

| Digit | Scale | Key | Seven | Second Tone | Third Tone | First Pause | Second Pause |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| 0 | C | man | yes | down | up | no | yes |
| 1 | D | min | yes | - | - | yes | no |
| 2 | Eb | maj | no | up | down | no | yes |
| 3 | E | min | no | down | up | yes | no |
| 4 | F | maj | yes | - | - | no | yes |
| 5 | G | min | yes | up | down | yes | no |
| 6 | Ab | maj | no | down | up | no | yes |
| 7 | A | min | no | - | - | yes | no |
| 8 | Bb | maj | yes | up | down | no | yes |
| 9 | B | min | yes | down | up | yes | no |

## Will the same phone number always produce the same result?
Yes. There is no randomness involved – that’s kind of the point.