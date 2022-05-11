function addingKaffe()
{
    var img = document.createElement('img');
    img.src = "../Images/Kaffe.jpg";
    img.alt = "Kaffe";
    for (var i = 1; i <= 8; i++)
    {
        document.getElementsByClassName("column")[0].appendChild(img);
    }


}
