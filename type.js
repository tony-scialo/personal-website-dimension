(function(){
    diminsionTypeTextStart();
})();

function diminsionTypeTextStart() {
    var element = $('#typewriteTitle');
    var toRotate = ["hello.", "my name is tony.", "i like to", "be creative.", "build things.", "innovate.", "let's build something, together."];
    var period = 1000;
    var isDeleting = false;
    var loopNum = 0;
    var txt = '';
    typeText(element, toRotate, period, isDeleting, loopNum, txt, diminsionTypeTextMiddle);
}

function diminsionTypeTextMiddle() {
    $('#typewriteTitle').hide();
    var element = $('#buildTitle');
    var toRotate = ["building the web"];
    var period = 1000;
    var isDeleting = false;
    var loopNum = 0;
    var txt = '';
    typeTextNoDeleting(element, toRotate, period, loopNum, txt, diminsionTypeTextEnd); 
}
function diminsionTypeTextEnd() {
    $('#buildTitle span').removeClass('wrap');
    $('#buildTitle').first('span').removeClass('wrap');
    var element = $('#diminsionTitle');
    var toRotate = ["from an alternate diminsion"];
    var period = 1000;
    var isDeleting = false;
    var loopNum = 0;
    var txt = '';
    typeTextNoDeleting(element, toRotate, period, loopNum, txt, null);  
}

function typeText(el, toRotate, period, isDeleting, loopNum, txt, callBack) {
    var i = loopNum % toRotate.length;
    var fullTxt = toRotate[i];

    if (isDeleting) {
        txt = fullTxt.substring(0, txt.length - 1);
    } else {
        txt = fullTxt.substring(0, txt.length + 1);
    }

    $(el).html('<span class="wrap">' + txt + '</span>');

    var delta = 200 - Math.random() * 100;

    if (isDeleting) {
        delta /= 2;
    }

    if (!isDeleting && txt === fullTxt) {
        delta = period;
        isDeleting = true;
    } else if (isDeleting && txt === '') {
        isDeleting = false;
        loopNum++;
        delta = 500;
    }

    if (loopNum < toRotate.length) {
        setTimeout(function () {
            typeText(el, toRotate, period, isDeleting, loopNum, txt, callBack);
        }, delta);
    } else if (callBack) {
        callBack();
    }
}

function typeTextNoDeleting(el, toRotate, period, loopNum, txt, callBack) {
    var i = loopNum % toRotate.length;
    var fullTxt = toRotate[i];

    txt = fullTxt.substring(0, txt.length + 1);

    $(el).html('<span class="wrap">' + txt + '</span>');

    var delta = 200 - Math.random() * 100;

    if (txt === fullTxt) {
        delta = period;
        loopNum++;
    }

    if (loopNum < toRotate.length) {
        setTimeout(function () {
            typeTextNoDeleting(el, toRotate, period, loopNum, txt, callBack);
        }, delta);
    } else if (callBack) {
        callBack();
    } 
}
