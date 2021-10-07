# BigBlueButton-Control-Panel
The BigBlueButton Control Panel (BBBCP) provides a variety of directly accessible functions and extensions for the Distance Learning System BigBlueButton.

## How to use BBBCP

The use of BBBCP is simple. To use BBBCP with a running BigBlueButton instance, all you have to do is import the file `bbbcp.js` via the JavaScript console of your browser. After that the BBBCP is shown. To load the source code, it is sufficient to insert the following lines of code into the JavaScript console.

First we need to append jQuery to BigBlueButton.

```javascript
const script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.body.appendChild(script);
```

Finally we can create the BBBCP with the following line.

```javascript
$.getScript('https://piuswalter.github.io/BigBlueButton-Control-Panel/dist/bbbcp.js');
```

Afterwards all functions are available.

If you like to use the Dark Mode in BBBCP just click the big upper label with 'BigBlueButton Control Panel'.

To close BBBCP just click the '&times;' in the upper right corner.

## Error or bug found

Then open an issue or make a pull request. Thank you!
