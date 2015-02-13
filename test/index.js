var dateUtils = require("../index"),
	expect = require('chai').expect;

describe("getDayString", function() {
	
	it('no param should return undefined', function() {
		expect(dateUtils.getDayString()).to.be.undefined;
	});

	it('empty string should return undefined', function() {
		expect(dateUtils.getDayString("")).to.be.undefined;
	});

	it('null should return undefined', function() {
		expect(dateUtils.getDayString(null)).to.be.undefined;
	});

	it('mon should return Monday', function() {
		expect(dateUtils.getDayString("mon")).to.equal("Monday");
	});

	it('tues should return Tuesday', function() {
		expect(dateUtils.getDayString("tues")).to.equal("Tuesday");
	});

	it('wed should return Wednesday', function() {
		expect(dateUtils.getDayString("wed")).to.equal("Wednesday");
	});

	it('thurs should return Thursday', function() {
		expect(dateUtils.getDayString("thurs")).to.equal("Thursday");
	});

	it('fri should return Friday', function() {
		expect(dateUtils.getDayString("fri")).to.equal("Friday");
	});

	it('sat should return Saturday', function() {
		expect(dateUtils.getDayString("sat")).to.equal("Saturday");
	});

	it('sun should return Sunday', function() {
		expect(dateUtils.getDayString("sun")).to.equal("Sunday");
	});

	it('0 should return Monday', function() {
		expect(dateUtils.getDayString(0)).to.equal("Monday");
	});

	it('50 should return undefined', function() {
		expect(dateUtils.getDayString(50)).to.be.undefined;
	});

});

describe("getMonthString", function () {
	
	it('no param should return undefined', function() {
		expect(dateUtils.getMonthString()).to.be.undefined;
	});

	it('empty string should return undefined', function() {
		expect(dateUtils.getMonthString("")).to.be.undefined;
	});

	it('null should return undefined', function() {
		expect(dateUtils.getMonthString(null)).to.be.undefined;
	});

	it('jan should return January', function() {
		expect(dateUtils.getMonthString("jan")).to.equal("January");
	});

	it('feb should return February', function() {
		expect(dateUtils.getMonthString("feb")).to.equal("February");
	});

	it('mar should return March', function() {
		expect(dateUtils.getMonthString("mar")).to.equal("March");
	});

	it('apr should return April', function() {
		expect(dateUtils.getMonthString("apr")).to.equal("April");
	});

	it('may should return May', function() {
		expect(dateUtils.getMonthString("may")).to.equal("May");
	});

	it('jun should return June', function() {
		expect(dateUtils.getMonthString("jun")).to.equal("June");
	});

	it('jul should return July', function() {
		expect(dateUtils.getMonthString("jul")).to.equal("July");
	});

	it('aug should return August', function() {
		expect(dateUtils.getMonthString("aug")).to.equal("August");
	});

	it('sep should return September', function() {
		expect(dateUtils.getMonthString("sep")).to.equal("September");
	});

	it('oct should return October', function() {
		expect(dateUtils.getMonthString("oct")).to.equal("October");
	});

	it('nov should return November', function() {
		expect(dateUtils.getMonthString("nov")).to.equal("November");
	});

	it('dec should return December', function() {
		expect(dateUtils.getMonthString("dec")).to.equal("December");
	});

	it('0 should return January', function() {
		expect(dateUtils.getMonthString(0)).to.equal("January");
	});

	it('50 should return January', function() {
		expect(dateUtils.getMonthString(50)).to.be.undefined;
	});

});
