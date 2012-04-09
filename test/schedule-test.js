describe('Schedule', function() {
    "use strict";
    
    describe('#sanity()', function() {
        it('returns sane', function() {
            $.schedule.test.sanity().should.eql('sane');
        });
    });
});
