$(function() {
    var $slider = $('.slider');
    var $next = $('.action-next');
    var $ul = $('ul');
    var $items = $('li');
    var $firstTwoItems = $items.slice(0, 2).clone();

    // Append the last two items.
    $ul.append($firstTwoItems);

    // Update items.
    $items = $ul.find('li');

    // Suppose all items have the same width.
    var itemWidth = $('li').outerWidth();

    $ul.width(itemWidth * $items.length);

    $slider.height($ul.height());

    $next.on('click', function(e) {
        var offsetDest = parseInt($ul.css('left'), 10) - itemWidth * 2;
        var currentOffset = parseInt($ul.css('left'), 10);
        var slideEffect = setInterval(function() {
            currentOffset = parseInt($ul.css('left'), 10);

            if (currentOffset === offsetDest ) {
                $next.prop('disabled', false);

                if (offsetDest === -(parseInt($ul.width(), 10) + -itemWidth * 2)) {
                    $ul.css('left', 0);
                }

                return clearInterval(slideEffect);
            }

            $ul.css('left', currentOffset - 2);
        }, 1);

        $next.prop('disabled', true);
    });
});
