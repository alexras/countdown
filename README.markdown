# countdown.js #

countdown.js allows you to easily embed a countdown timer in a webpage that
disappears when the countdown expires. I wrote it to replace all the ad-hoc
whiteboard countdowns we had written all over the place in lab.

I haven't done much programming in Javascript so this is probably a lot less
pretty than it could be.

## Example Usage ##

```html

<html>
<head>
    <link rel="stylesheet" href="style.css" type="text/css" media="screen" />
	<title>Test Countdown</title>

    <script src="countdown.js"></script>
    <script type="text/javascript" charset="utf-8">
    window.onload=function() {
        Countdown("NSDI 2012", 2011, 10, 4, 17, 0, 0, 'countbox');
    };
    </script>
</head>
<body>
<p><div id="countbox"></div></p>
<div id="currenttime"></div>

</body>
</html>

```

## Known Issues ##

The current time (which is stored by default in the div with id `currenttime`)
can get out of sync by a little bit with the timers themselves. It doesn't
bother me enough to fix it currently but if you'd like to submit a patch, go
right ahead.
