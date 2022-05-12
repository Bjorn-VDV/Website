/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function menuButton() 
{
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) 
{
    if (!event.target.matches('.dropbtn')) 
    {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) 
        {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) 
            {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function footerRepeat()
{
    let result = "";
    // <a href="https://sv-se.facebook.com/" class="positionSticker" target="_blank">
    //         <img src='../Images/fbLogo.png' alt='Facebook Logo' style='width: 12%; height: 12%;min-width: 25px;'>
    //         Facebook!</a>
    //     <a href="https://www.instagram.com/" class="positionSticker" target="_blank">
    //         <img src="../Images/instaLogo.jpg" alt="Instagram Logo" style="width: 12%; height: 12%;min-width: 25px;">
    //         Instagram!</a>
    result += "<div class='dropdown;positionSticker'><button onclick='menuButton()' class='dropbtn'>MENU</button><div id='myDropdown' class='dropdown-content'>" + 
        "<a href='../index.html'>HOME</a><a href='../html/About.html'>ABOUT</a>" + 
        "<a href='../html/Products.html'>PRODUCTS</a>" +
        "<a href='../html/Contact.html'>CONTACT</a>" +     
        "</div></div>"

    result += "<a href='https://sv-se.facebook.com/' class='positionSticker' target='_blank'>" + 
    "<img src='../Images/fbLogo.png' alt='Facebook Logo' style='width: 12%; height: 12%;min-width: 25px;'>Facebook!</a>";

    result += "<a href='https://www.instagram.com/' class='positionSticker' target='_blank'>" +
    "<img src='../Images/instaLogo.jpg' alt='Instagram Logo' style='width: 12%; height: 12%;min-width: 25px;'>Instagram!</a>";

    document.getElementsByTagName("footer")[0].innerHTML = result;
}
footerRepeat();
