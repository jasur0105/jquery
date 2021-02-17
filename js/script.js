$(".ask").on("click", function (event) {
    $(this).toggleClass("active").next().stop().slideToggle(500).css("background", "lightgreen")
    $(".answer").not($(this).next()).slideUp(600)
    $(".ask").not(this).removeClass("active")
    event.preventDefault()
})

$("button[data-filter]").click(function () {
    $("div[data-filter]").stop().slideUp(500);
    let attr = $(this).attr("data-filter")
    $(`div[data-filter = ${attr}]`).stop().slideDown(500)
    if (attr == "all") {
        $("div[data-filter]").stop().slideDown(500);
    }
    $("button[data-filter]").removeClass("active");
    $(this).addClass('active');
})

function typing(element) {
    if (typeof element == "string") {
        let inner = $(element).html()
        let fullText = ""
        let count = 0
        let interval = setInterval(() => {
            fullText += inner[count]
            count++
            $(element).html(fullText)
            if (fullText == inner) {
                clearInterval(interval)
                /* setTimeout(() => {
                    typing(element)
                }, 1000); */
            }
        }, 100);
    }
}

typing("h1")

$(".js-modal-show").click(function (e) {
    e.preventDefault()
    $(".modal").fadeIn(500);
})

$(".close").click(function (e) {
    e.preventDefault()
    $(".modal").fadeOut(500);
})

$(".modal").click(function (e) {
    e.preventDefault()
    if (e.target == this) {
        $(this).fadeOut(500)
    }
})

$(".nav").css({
    position: "fixed",
    width: "100%",
    // bottom: 0,
    top: $(window).height() - $(".nav").outerHeight() + "px",
    zIndex: 999
})

$(window).on("scroll", function () {
    let editPosition = $(window).height() - $(".nav").outerHeight() - $(window).scrollTop()
    if (editPosition > 0) {
        $(".nav").css("top", editPosition + "px")
    } else {
        $(".nav").css("top", 0)
    }
})

// показ/скрытие текста
$(".read-more").click(function (e) {
    e.preventDefault
    $(".text-hidden").toggleClass("hidden")
    let text = $(".read-more").html()
    $(".read-more").html("Hidden")
    if (text == "Hidden") {
        $(".read-more").html("Read More")
    }
})
$(".js-sroll-to-id").click(function (e) {
    e.preventDefault()
    var attr = $(this).attr("href");
    var toEl = $(attr).offset().top;
    console.log(toEl);
    $("html").stop().animate({
        scrollTop: toEl - $(".nav").outerHeight()
    }, 500)
})

// появление стрелки
$(window).on("scroll", function () {
    // e.preventDefault()
    let arrowPx = $(window).scrollTop();
    if (arrowPx > 100) {
        $(".js-btn-top").addClass("show").attr("href", "#")
    } else if (arrowPx < 100) {
        $(".js-btn-top").removeClass("show").attr("href", "#!")
    }
    // console.log(arrowPx);
})
// нажатие на стрелку
$(".js-btn-top").click(function (e) {
    e.preventDefault()
    $("html").stop().animate({
        scrollTop: 0
    }, 500)
})