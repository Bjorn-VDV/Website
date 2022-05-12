var imgstyle = "width:100%; height: 70%; object-fit: cover;border: 2px groove #7B5037; margin-bottom: 50%";
var stylePutter = "<h2 style='inline-size: 100%; height: 0%; line-height:125%;position:relative;bottom:40%'>";
var array = [
    "Coffee",
    "Espresso",
    "Latte or Mocha",
    "Chai Latte",
    "Capuccino",
    "Pumpkin Latte",
    "Soviet Coffee",
    "Irish Coffee"];
var arrayPrice = [
    "£2.50",
    "£3.00",
    "£2.50",
    "£3.50",
    "£3.00",
    "£3.70",
    "£5.20",
    "£5.20"]

var array2 = [
    "Muffin",
    "Blueberry Muffin",
    "Buttered Croissant",
    "Scone",
    "Salted Biscuit Mix",
    "Hearty Mix",
    "Gingerbead",
    "After Eight"];
var array2Price = [
    "£3.50",
    "£4.00",
    "£2.00",
    "£3.00",
    "£1.50",
    "£2.00",
    "£2.00",
    "£1.50"]
    
// let arrayProducts = [
//     {"Coffee": "£2.50"},
//     {"Espresso": "£3.00"},
// ]

// arrayProducts.forEach(product => {
//     let name = Object.keys(product)[0];
//     let price = product[name];
//     console.log(name + ": " + price);
// });





function addingImgs()
{
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
                arrayinputter = array[j] + "<br>" + arrayPrice[j];
                imgInputter = img0("../Images/Kaffe.jpg");
            }
            else if (i == 1)
            {
                arrayinputter = array[j + 4] + "<br>" + arrayPrice[j + 4];
                imgInputter = img0("../Images/IrlandskKaffe.jpg");
            }
            else if (i == 2)
            {
                arrayinputter = array2[j + 4] + "<br>" + array2Price[j + 4];
                imgInputter = img0("../Images/SaltedMix.jpg");
            }
            else
            {
                arrayinputter = array2[j] + "<br>" + array2Price[j];
                imgInputter = img0("../Images/Scones.jpg");
            }
            document.getElementsByClassName("column")[i].appendChild(imgInputter);
            document.getElementsByClassName("column")[i].innerHTML += stylePutter + arrayinputter + "</h2>";
        }
    }
}


function addingArray()
{
    for (var i = 0; i <= 1; i++)
    {
        for (var j = 0; j < array.length; j++)
        {
            if (i == 0)
            {
                arrayinputter = array[j];
                arrayprice = arrayPrice[j];
            }
            else
            {
                arrayinputter = array2[j];
                arrayprice = array2Price[j];
            }
            document.getElementsByClassName("columnColoured")[i].innerHTML += "<li>" + arrayinputter + "<span>" + arrayprice + "</span></li>";
        }

    }
}
try { addingImgs(); }
catch { addingArray(); }