var mobile = window.matchMedia("(max-width:768px)");
var laptop = window.matchMedia("(min-width:769px)");
var switch_delay = true;
var menu_dropdown_list = document.getElementsByClassName("submenu"),
    dropdown1 = document.getElementById("menuNavbar_dropdown_1"),
    dropdown2 = document.getElementById("menuNavbar_dropdown_2");
var submenu_each = [];
var menuNavbar = document.getElementById("menuNavbar");


// Do //
if (laptop.matches && switch_delay == true) {

    dropdown1.setAttribute('onclick', "location.href = 'field_order.html'");
    dropdown2.setAttribute('onclick', "location.href = 'field.html'");
    switch_delay = false;

}
// then //
function matching_check() {

    if (laptop.matches && switch_delay == true) {

        dropdown1.setAttribute('onclick', "location.href = 'field_order.html'");
        dropdown2.setAttribute('onclick', "location.href = 'field.html'");
        // auto_close_dropdown 1 //

        dropdown1.getAttribute("aria-expanded") == "false";
        dropdown1.nextElementSibling.classList.remove("show");
        dropdown1.nextElementSibling.removeAttribute("data-bs-popper");
        // auto_close_dropdown 2//

        dropdown2.getAttribute("aria-expanded") == "false";
        dropdown2.nextElementSibling.classList.remove("show");
        dropdown2.nextElementSibling.removeAttribute("data-bs-popper");

        //  //
        switch_delay = false;

    } else if (mobile.matches && switch_delay == false) {
        dropdown1.removeAttribute('onclick', "location.href = 'field_order.html'");
        dropdown2.removeAttribute('onclick', "location.href = 'field.html'");

        switch_delay = true;
    }
}
setInterval(matching_check, 10);

// Check For Open and Close (Need to change) (This isn't even work)(the submenu cotains 2 elements but length of none)//

for (let i = 0; i < menu_dropdown_list.length; i++) {
    submenu_each.push(menu_dropdown_list[i]);
}

function Check_Open_Close() {
    if (laptop.matches) {



        if (submenu_each[0].matches(":hover") == false && dropdown1.matches(":hover") == false) {
            if (submenu_each[0].style.display == "block") {
                submenu_each[0].style.display = "none";
            }
        }
        if (submenu_each[1].matches(":hover") == false && dropdown2.matches(":hover") == false) {
            if (submenu_each[1].style.display == "block") {
                submenu_each[1].style.display = "none";
            }
        }
    }

}


setInterval(Check_Open_Close, 10);
// Click outside close dropdown nav //
function Click_Outside() {



    document.addEventListener("click", (event) => {
        const isClickInside = menuNavbar.contains(event.target);
        if (menuNavbar.classList.contains('show')) {
            if (mobile.matches) {
                if (!isClickInside) {
                    document.getElementById('navbar-toggler').click();
                }
            }
        }
    });


}
setInterval(Click_Outside, 10);
// Include "form-label" into label //

var labellist = document.querySelectorAll('label');
var eachlabel = null;

for (eachlabel of labellist) {
    eachlabel.classList.add('form-label');
}