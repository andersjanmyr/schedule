describe('Schedule', function() {
    "use strict";
    var test =$('#schedule').schedule().test;

    describe('#sanity()', function() {
        it('returns sane', function() {
            test.sanity().should.equal('sane');
        });
    });
});
