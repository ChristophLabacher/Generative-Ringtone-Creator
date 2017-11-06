# Generative Ringtone Creator

This is an experiment in **generative audio design** created by [Christoph Labacher](http://www.christophlabacher.com). It’s micro-project coded in a day.

Different digits of the phone number are used to create a chord, which can be played with various instruments. The idea is that in a messaging app close friends could get a personal ringtone which would become recognizable over time – so you already know who wrote a message. The ringtones are still supposed to sound consistent, though. The different instruments could be used to symbolize different groups.

> [**Try it yourself!**](http://christophlabacher.com/Generative-Ringtone-Creator) (Supports Google Chrome and Mozilla Firefox)

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

## License 
The MIT License (MIT)
Copyright (c) 2014 Christoph Labacher

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
