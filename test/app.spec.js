'use strict';

var expect = require('chai').expect;
var app = require('../app/app');

describe('getDescendingNumbers', function (){
    it('should return string with numbers separated by spaces', function ()    {
        expect(app.getDescendingNumbers(15, 1)).to.eql('15 14 13 12 11 10 9 8 7 6 5 4 3 2 1');
    });

    it('should do something', function ()    {
        expect(app.getDescendingNumbers(20, 10)).to.eql('20 19 18 17 16 15 14 13 12 11 10');
        console.log('test is working');
    });
});


describe('isNegativeNumber', function (){
    it('should return true when the number is smaller than 0', function ()    {
        expect(app.isNegativeNumber(-5)).to.eql(true);
    });

    it('should return false when ...', function ()    {
        expect(app.isNegativeNumber(5)).to.eql(false);
    });

});
