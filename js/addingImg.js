function addingImgs()
{
    var imgstyle = "width:100%; height: 70%; object-fit: cover;border: 2px groove #7B5037; margin-bottom: 50%";
    var stylePutter = "<h2 style='inline-size: 100%; height: 0%; line-height:125%;position:relative;bottom:40%'>";
    var array = [
        "Coffee <br>£2.50",
        "Espresso <br>£3.00",
        "Latte or Mocha <br>£2.50",
        "Chai Latte <br>£3.50",
        "Capuccino <br>£3.00",
        "Pumpkin Latte <br>£3.70",
        "Soviet Coffee <br>£5.20",
        "Irish Coffee <br>£5.20"];
    var array2 = [
        "Muffin <br>£3.50",
        "Blueberry Muffin <br>£4.00",
        "Buttered Croissant <br>£2.00",
        "Scone <br>£3.00",
        "Salted Biscuit Mix <br>£1.50",
        "Hearty Mix <br>£2.00",
        "Gingerbead <br>£2.00",
        "After Eight <br>£1.50"];


    for (var i = 0; i <= 3; i++) 
    {
        var img0 = (source) =>
        {
            var img = document.createElement("img");
            img.src = source;
            img.style = imgstyle;
            return img;
        }

        for (var j = 0; j <= 3; j++)
        {
            if (i == 0)
            {
                arrayinputter = array[j];
                imgInputter = img0("../Images/Kaffe.jpg");
            }
            else if (i == 1)
            {
                arrayinputter = array[j + 4];
                imgInputter = img0("../Images/IrlandskKaffe.jpg");
            }
            else if (i == 2)
            {
                arrayinputter = array2[j + 4];
                imgInputter = img0("../Images/SaltedMix.jpg");
            }
            else
            {
                arrayinputter = array2[j];
                imgInputter = img0("../Images/Scones.jpg");
            }
            document.getElementsByClassName("column")[i].appendChild(imgInputter);
            document.getElementsByClassName("column")[i].innerHTML += stylePutter + arrayinputter + "</h2>";


        }
    }
}
addingImgs()