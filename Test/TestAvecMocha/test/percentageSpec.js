var Percentage = require('../lib/Percentage')
var assert = require('assert')

describe('Percentage', function(){

	describe('#evolution', function(){

		it('should give an evolution', function(){

			assert.equal(Percentage.evolution(100, 200), 100)
			assert.equal(Percentage.evolution(100, 150), 50)
			assert.equal(Percentage.evolution(100, 50), -50)

		})

		it('should handle 0 evolution', function(){
			assert.equal(Percentage.evolution(0, 100), Infinity)
		})

		it('should round values', function(){
			assert.equal(Percentage.evolution(30, 100), 233.33)


		})


	})

})