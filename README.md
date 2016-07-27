# imgProgress

imgProgress is a jQuery plugin to create progress bar aroung images with multiple options to customize the way you want it, like this:

![](http://imagizer.imageshack.us/v2/320x240q90/924/B4RUJT.png)

Usage
-----

```html
<link rel="stylesheet" type="text/css" href="path/to/imgProgress.css">

<div class="myImgProgress"></div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script src="path/to/imgProgress.js"></script>

<script>
    $(".myImgProgress").imgProgress(
        {
            img_url: "https://i.kinja-img.com/gawker-media/image/upload/s--de3ts4jU--/18efmtxt7i5nvjpg.jpg",
            size: 200,
            backgroundColor: '#222222',
            foregroundColor: '#63e3ff',
            percent: 23
        }
    );
</script>
```


Methods
-------

Method | Params | Description | Return
------ | ------ | ----------- | -------
imgProgress | [Options](#options) | Initialize imgProgress | None
imgProgressTo | `value` (integer) | Set progression to given value | New progression value, `-1` if invalid
imgProgressUpdateOf | `value` (integer) | Increase or decrease progression by given value | New progression, `-1` if invalid 
imgProgressGet | None | Returns progression current value | Current progression value

Options
-------

Option  | Description                | Default
------- | -------------------------- | -----------------------------------------------------------
img_url | URL or path to image file. | `http://no.flyingtiger.com/Content/img/noPicture.png`
size    | Size of the circle      | `200px`
barSize | Size of the progression bar in percent of the size (`0 to 100`) | `12%`
backgroundColor | Background color of the progression bar | `white`
foregroundColor | Front color of the progression bar | `red`
backgroundSize | Size of image in circle (see [background-size](http://www.w3schools.com/cssref/css3_pr_background-size.asp) property) | `cover`
percent | Value of progression (`0 to 100`) | `0`

