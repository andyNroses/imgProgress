# imgProgress

imgProgress is a jQuery plugin to create progress bar aroung images with multiple options to customize the way you want it, like this:

![](http://imagizer.imageshack.us/v2/320x240q90/924/B4RUJT.png)

Usage
-----

```html
<link rel="stylesheet" type="text/css" href="path/to/imgProgress.css">

<div class="myImgProgress"></div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script src="../imgProgress.js"></script>

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
