$(".read-more-text").each(function () {
    const limit = 200;

    const $p = $(this);
    const $span = $p.find(".more-content");
    const $button = $p.find(".more-link");

    // Get only the text before the span/button
    const text = $p.clone().children().remove().end().text().trim();

    if (text.length <= limit) {
        $button.hide();
        return;
    }

    const first = text.substring(0, limit);
    const second = text.substring(limit);

    $p.contents()
        .filter(function () {
            return this.nodeType === 3;
        })
        .first()
        .replaceWith(first + " ");

    $span.text(second).hide();
});

// $(document).on("click", ".more-link", function () {
//     const $btn = $(this);
//     const $content = $btn.siblings(".more-content");
//     $content.removeAttr("style");
//     $content.addClass("open");
// });

$(document).on("click", ".more-link", function () {
    const $btn = $(this);
    const $content = $btn.siblings(".more-content");
    if (!$content.hasClass("open")) {
        // Close
        $content.removeClass("open").removeAttr("style");
        $btn.removeClass("active");
    } else {
        // Open
        $content.removeAttr("style").addClass("open");
        $btn.addClass("active");
    }
});
