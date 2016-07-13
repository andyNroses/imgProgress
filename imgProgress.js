(function( $ ) {

    var defaults = {
        img_url: "http://no.flyingtiger.com/Content/img/noPicture.png",
        size: 200,
        barSize: 15,
        backgroundColor: 'white'
    }

    $.fn.imgProgress = function(options) {

        //OPTIONS
        var img_url = options.img_url == null ? defaults.img_url : options.img_url;
        var size = options.size == null ? defaults.size : options.size;
        var barSize = options.barSize == null ? defaults.barSize : options.barSize;
        var backgroundColor = options.backgroundColor == null ? defaults.backgroundColor : options.backgroundColor;

        //CURRENT IMGPROGRESS
        var myClass = this[0];
        myClass.classList.add("imgProgress-round");
        myClass.classList.add("imgProgress-progress");
        myClass.style.background = backgroundColor;
        myClass.style.width = (size + getPercent(barSize, size)) + "px";
        myClass.style.height = (size + getPercent(barSize, size)) + "px";

        //DIV TO CENTER VERTICALLY
        var vertical = document.createElement("div");
        vertical.classList.add("imgProgress-vertical");

        //IMG
        var img = document.createElement("div");
        img.classList.add("imgProgress-round");
        img.classList.add("imgProgress-img");
        img.style.background = "url(" + img_url + ") 50% 50% no-repeat, white";
        img.style.backgroundSize = "cover";
        img.style.width =  options.size + "px";
        img.style.height =  options.size + "px";

        //PIE
        var pie = document.createElement("div");
        pie.classList.add("imgProgress-pie");
        pie.classList.add("imgProgress-round");
        pie.style.background = 'green';
        pie.style.width = (size + getPercent(barSize, size)) + "px";
        pie.style.height = (size + getPercent(barSize, size)) + "px";

        vertical.appendChild(img);
        myClass.appendChild(vertical);
    }

}( jQuery ));

function getPercent(percent, value) {
    return value * (percent / 100);
}

