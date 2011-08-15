# countdown.js #

countdown.js allows you to easily embed a countdown timer in a webpage that
disappears when the countdown expires. I wrote it to replace all the ad-hoc
whiteboard countdowns we had written all over the place in lab.

I haven't done much programming in Javascript so this is probably a lot less
pretty than it could be.

## Example Usage ##

```html

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN"
   "http://www.w3.org/TR/html4/strict.dtd">

<html lang="en">
<head>
    <link rel="stylesheet" href="style.css" type="text/css" media="screen" />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>Test Countdown</title>
	<meta name="generator" content="TextMate http://macromates.com/">
	<meta name="author" content="Alexander Rasmussen">
	<!-- Date: 2010-08-02 -->

    <script src="countdown.js"></script>
    <script type="text/javascript" charset="utf-8">
    window.onload=function() {
        Countdown("NSDI 2012", 2011, 10, 4, 17, 0, 0, 'countbox');
    };
    </script>
</head>
<body>
<p><div id="countbox">
</div></p>
<p><div id="countbox2">
</div></p>

<div id="currenttime"></div>

</body>
</html>

```
