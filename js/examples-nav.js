var charts = [];

$(document).ready(function () {

    // chart type as category
    var $navList = $('#left-chart-nav ul');
    var inDemoPage = location.pathname.match(/demo.html/);
    for (var type in CHART_TYPES) {
        $navList.append($('<li>').append(
            '<a class="left-chart-nav-link" id="left-chart-nav-' + type + '" '
            + 'href="' + (inDemoPage ? 'examples.html' : '' ) + '#chart-type-' + type + '">'
                + '<div class="chart-icon"></div>'
                + '<div class="chart-name">' + CHART_TYPES[type] + '</div>'
            + '</a>'));
    }

    function hoverNav(type) {
        var liString = '';
        for (var eid = 0, elen = EXAMPLES.length; eid < elen; ++eid) {
            if (EXAMPLES[eid].type === type) {
                liString += '<li>'
                +   '<a href="demo.html#' + EXAMPLES[eid].id + '">'
                +       '<img src="' + GALLERY_THUMB_PATH + EXAMPLES[eid].id + '.png">'
                +   '</a>'
                +'</li>';
            }
        }
        $('#nav-layer .chart-list').html(liString);
    }
    function getLayerTop(top, height) {
        var windowHeight = $(window).height();
        var maxTop = windowHeight - height;
        if (top >= maxTop) {
            top = maxTop;
        }
        return top;
    }
    var nav = $('#left-chart-nav');
    var layer = $('#nav-layer');
    var mask = $('#nav-mask');

    function toggle(isshow) {
        // There is scroll bar in nav-layer, which make use difficult to find target.
        // So experience nav without nav-layer for a while.
        // if (isshow) {
        //     layer.show();
        //     mask.show();
        // }
        // else {
        //     layer.hide();
        //     mask.hide();
        // }
    }

    nav
        .on('mouseover', function () {
            toggle(true);
        });
    layer
        .on('click', '.iconfont', function () {
            toggle(false);
        })
        .on('mouseover', function () {
            toggle(true);
            Ps.update(layer[0]);
        });
    mask.on('mouseover', function () {
        setTimeout(function () {
            toggle(false);
        }, 200);
    });

    Ps.initialize(nav[0]);
    // Ps.initialize(layer[0]);
});