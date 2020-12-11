// DINAMICKO ISPISIVANJE

// Navigacioni meni
function ispisNav() {
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
function ispisCounter() {
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
function ispisGalerija() {
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

// Testimonials
function ispisTestimonial() {
    var testName = new Array("Natalia Dunlop", "Kendra Peters", "Sabina Neale");
    var testText = new Array("Last Friday I came for restaurant week. It was FABULOUS! The portions were overly generous. Everything was so yummy – what a bargain. I will be back soon.",
    "Thank you for dinner last night. It was amazing!! I have to say it’s the best meal I have had in quite some time. You will definitely be seeing more of me eating at your establishment. My husband was very impressed and we can’t wait for our parents to come visit so that we can share our new favorite place with them.",
    "Thank you both for helping us celebrate Dad’s 90th birthday last night. The good family memories will last forever. Dad had a great time, the staff were all excellent and the food delicious. My husband is ready to try preparing duck confit now! I”m sure it won’t be as good as yours.");
    var testP;
    testP = '<ul class="mu-testimonial-slider">';
    for(var i=0; i < testName.length; i++) {
        testP += '<li><div class="mu-testimonial-single"><div class="mu-testimonial-info"><p>' + testText[i] +
        '</p></div><div class="mu-testimonial-bio"><p>- ' + testName[i] + '</p></div></div></li>'
    }
    testP += '</ul>';
    return testP;
}
document.querySelector(".mu-testimonial-content").innerHTML = ispisTestimonial();

// Chef(kuvari)
function ispisChef() {
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
function ispisSelect() {
    var selectP;
    selectP = '<select class="form-control"><option disabled="disabled" value="">How Many?</option>';
    for(var i=1; i < 11; i++) {
        selectP += '<option value="' + i + ' Person">' + i + ' Person</option>';
    }
    selectP += '</select>';
    return selectP;
}
document.querySelector(".selectIspis").innerHTML = ispisSelect();

// REZERVACIJA - FORMA

let formResData = [];
let submitR = $('#sendIt');
submitR.click(function() {
let name = $('#resName');
let mail = $('#resMail');
let number = $('#resNumber');
let date = $('.resDate');
let msg = $('#resMsg');
let nameRe = /^[A-Z][a-z]{3,20}(\s[A-Z][a-z]{3,20})*$/;
let mailRe = /^\w([\.-]?\w+\d*)*@\w+\.\w{2,6}$/;
if(name.val() == '') {
    name.css({
        'border': '3px solid #dc3545',
        });        
    name.val('')
    name.attr('placeholder', 'First name can not be empty');
} 
else if(!nameRe.test(name.val())) {
    name.css({
    'border': '2px solid #dc3545',
    });
    name.val('')
    name.attr('placeholder', 'Enter a valid name (eg. Lazar)');
}
else {
formResData.push(name.val());
name.css({
    'border': '',
    });
    name.val('');
    name.attr('placeholder', 'Name');
}
if(mail.val() == '') {
    mail.css({
        'border': '3px solid #dc3545',
        });
    mail.val('')
    mail.attr('placeholder', 'Email can not be empty');
}
else if(!mailRe.test(mail.val())) {
    mail.css({
    'border': '3px solid #dc3545',
    });
    mail.val('')
    mail.attr('placeholder', 'Enter a valid mail (eg. lazar@gmail.com)');
}    
else {
    mail.css({
        'border': '',
        });
    formResData.push(mail.val());
    mail.val("");
    mail.attr('placeholder', 'Email');
}
if(date.val() == '') {
    date.css({
        'border': '3px solid #dc3545',
    });
    date.val('')
    date.attr('placeholder', 'Date need to be selected');
}
else {
    formResData.push(date.val());
    date.css({
        'border': '',
    });
    date.val('');
    date.attr('placeholder', 'Date');
}
if(msg.val() == '' || msg.val() == "Type Your message") {
    msg.css({
        'border': '3px solid #dc3545',
        });
    msg.val('')
    msg.attr('placeholder', 'Type Your message');
} 
else {
    msg.css({
        'border': ''
        });  
    formResData.push(msg.val());
    msg.val('');
    msg.attr('placeholder', 'Your message');
}
});

// CONTACT - FORMA

let formContactData = [];
let submit = $('#sendItContact');
submit.click(function() {
let name = $('#contactName');
let mail = $('#contactMail');
let subject = $('#contactSub');
let msg = $('#contactMsg');
let nameRe = /^[A-Z][a-z]{3,20}(\s[A-Z][a-z]{3,20})*$/;
let mailRe = /^\w([\.-]?\w+\d*)*@\w+\.\w{2,6}$/;
if(name.val() == '') {
    name.css({
        'border': '3px solid #dc3545',
        });        
    name.val('')
    name.attr('placeholder', 'First name can not be empty');
}
else if(!nameRe.test(name.val())) {
    name.css({
    'border': '2px solid #dc3545',
    });
    name.val('')
    name.attr('placeholder', 'Enter a valid name (eg. Lazar)');
}
else {
formResData.push(name.val());
name.css({
    'border': '',
    });
    name.val('');
    name.attr('placeholder', 'Name');
}
if(mail.val() == '') {
    mail.css({
        'border': '3px solid #dc3545',
        });
    mail.val('')
    mail.attr('placeholder', 'Email can not be empty');
}
else if(!mailRe.test(mail.val())) {
    mail.css({
    'border': '3px solid #dc3545',
    });
    mail.val('')
    mail.attr('placeholder', 'Enter a valid mail (eg. lazar@gmail.com)');
}    
else {
    mail.css({
        'border': '',
        });
    formResData.push(mail.val());
    mail.val("");
    mail.attr('placeholder', 'Email');
}
if(subject.val() == '') {
    subject.css({
        'border': '3px solid #dc3545',
    });
    subject.val('')
    subject.attr('placeholder', 'Type Your Subject Name');
}
else {
    formContactData.push(subject.val());
    subject.css({
        'border': '',
    });
    subject.val('');
    subject.attr('placeholder', 'Subject');
}
if(msg.val() == '' || msg.val() == "Type Your message") {
    msg.css({
        'border': '3px solid #dc3545',
        });
    msg.val('')
    msg.attr('placeholder', 'Type Your message');
} 
else {
    msg.css({
        'border': ''
        });  
    formResData.push(msg.val());
    msg.val('');
    msg.attr('placeholder', 'Your message');
}
});