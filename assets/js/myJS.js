// DINAMICKO ISPISIVANJE

// Navigacioni meni
function ispisNav () {
    var nameNav = new Array("HOME", "ABOUT US", "MENU", "RESERVATION", "GALLERY", "OUR CHEFS", "CONTACT");
    var linkNav = new Array("#mu-slider", "#mu-about-us", "#mu-restaurant-menu", "#mu-reservation", "#mu-gallery", "#mu-chef", "#mu-contact");
    var navP;
    navP = '<ul id="top-menu" class="nav navbar-nav navbar-right mu-main-nav">';
    for(var i = 0; i < nameNav.length; i++) {
        navP += '<li><a href="' + linkNav[i] + '">' + nameNav[i] + '</a></li>';
    }
    navP += '</ul>';
    return navP;
}
document.querySelector("#navbar").innerHTML = ispisNav();

// Counter sekcija
function ispisCounter () {
    var counterSpan = new Array("Fresh", "Delicious", "Hot", "Satisfied");
    var counterCount = new Array("150", "60", "45", "6560");
    var counterTagP = new Array("Breakfast Items", "Desserts Items", "Drink Items", "Customers");
    var counterP;
    counterP = '<ul class="mu-counter-nav">';
    for(var i = 0; i < counterSpan.length; i++) {
        counterP += '<li class="col-md-3 col-sm-3 col-xs-12"><div class="mu-single-counter"><span>' + counterSpan[i] + 
        '</span><h3><span class="counter-value" data-count="' + counterCount[i] + '">0</span><sup>+</sup></h3><p>' +
        counterTagP[i] + '</p></div></li>';
    }
    counterP += '</ul>';
    return counterP;
}
document.querySelector(".mu-counter-area").innerHTML = ispisCounter();

// Galerija
function ispisGalerija () {
    var imgSource = new Array("mygalleryimg1.jpg", "mygalleryimg2.jpg", "mygalleryimg3.jpg", "mygalleryimg4.jpg", 
    "mygalleryimg5.jpg", "mygalleryimg6.jpg", "mygalleryimg7.jpg", "mygalleryimg8.jpg", "mygalleryimg9.jpg");
    var imgAlt = new Array("Pizza", "Food on the tree", "Skewer", "Salad", "Dish in a pan", 
    "Meat on a plate", "Meal", "Onion", "Spice");
    var galerijaP;
    galerijaP = '<div class="mu-gallery-body">';
    for(var i=0; i < imgSource.length; i++) {
        galerijaP += '<div class="mu-single-gallery col-md-4"><div class="mu-single-gallery-item"><figure class="mu-single-gallery-img"><a class="mu-imglink" href="assets/img/gallery/'
         + imgSource[i] + '"><img alt="' + imgAlt[i] + '" src="assets/img/gallery/' + imgSource[i] +
        '"><div class="mu-single-gallery-info"><img class="mu-view-btn" src="assets/img/plus.png" alt="plus icon img"></div> </a></figure></div></div>';
    }
    galerijaP += '</div>';
    return galerijaP;
}
document.querySelector(".mu-gallery-content").innerHTML = ispisGalerija();

// Chef(kuvari)
function ispisChef () {
    var imgChefSource = new Array("myimgchef1.jpg", "myimgchef2.jpg", "myimgchef3.jpg", "myimgchef4.jpg", "myimgchef5.jpg",
    "myimgchef6.jpg", "myimgchef7.jpg", "myimgchef8.jpg");
    var chefName = new Array("Simon Jonson", "Darin Fields", "Kelly Wenzel", "Ian Malone", "Elvis Travis",
    "Dalton Reeves", "Greg Hong", "Marty Fukuda");
    var chefP;
    chefP = '<ul class="mu-chef-nav">';
    for(var i = 0; i < imgChefSource.length; i++) {
        chefP += '<li><div class="mu-single-chef"><figure class="mu-single-chef-img"><img src="assets/img/chef/'
        + imgChefSource[i] + '" alt="chef ' + chefName[i] + '"></figure><div class="mu-single-chef-info"><h4>'
        + chefName[i] + '</h4></div></div></li>';
    }
    chefP += '</ul>';
    return chefP;
}
document.querySelector(".mu-chef-content").innerHTML = ispisChef();

// Rezervacija (select)
function ispisSelect () {
    var selectP;
    selectP = '<select class="form-control"><option value="0">How Many?</option>';
    for(var i=1; i < 11; i++) {
        selectP += '<option value="' + i + ' Person">' + i + ' Person</option>';
    }
    selectP += '</select>';
    return selectP;
}
document.querySelector(".selectIspis").innerHTML = ispisSelect();

