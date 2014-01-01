define([
    'jQuery',
    'lodash',
    'modules/work',
    'modules/event-listeners',
    'modules/adjust-padding-bottom',
    'modules/load-work'
], function(
    $,
    _,
    work,
    setEventListeners,
    adjustPaddingBottom,
    loadMoreWork
) {

    describe('My work', function() {

        it('has 12 web site examples', function() {
            // just checking that _ works
            expect(_.size(work)).toEqual(11);
        });

        it('loads the sites into the passed div', function() {

            var workEl = $('<div></div>');

            loadMoreWork(workEl);
            expect(workEl.children().length).toEqual(11);

        });

    });

    describe('Contact Padding', function() {

        it('has bottom padding greater than window inner height', function(){

            var contactEl = $('<div></div>'),
                WINDOW_HEIGHT = window.innerHeight;

            adjustPaddingBottom(contactEl);

            expect(parseInt(contactEl.css('padding-bottom'), 10)).toEqual(WINDOW_HEIGHT);

        });

    });

});