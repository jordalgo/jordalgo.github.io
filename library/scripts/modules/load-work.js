define([
    'jQuery',
    'lodash',
    'modules/work',
    'templates/compiled',
    'modules/highlight-nav'
], function(
    $,
    _,
    workCollection,
    templates,
    highlightNav
) {

    var WORK_TEMPLATE = templates['library/scripts/templates/work.html'];

    var loadMoreWork = function(el) {

        var workSet = '';

        for (var w=0; w < workCollection.length; w++) {
            workSet += WORK_TEMPLATE({site: workCollection[w]});
        }

        el.append(workSet);

        $("#more-work").unbind("click");
        $("#more-work").remove();

        highlightNav.reCalculateHeights();
    };

    return loadMoreWork;

});