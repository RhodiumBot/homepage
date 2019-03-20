$(() => {
    const pages = e => {
        $(".page").css("display", "none");
        $(`#page-${e.target.id.split("-")[1]}`).css("display", "block");
    };

    $(".header-link").on("click", e => {
        pages(e);
    });

    $(".link").on("click", e => {
        pages(e);
    });

    $("#year").text(new Date().getYearUTC());
});