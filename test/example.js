import {should, expect} from 'chai'
import Entries from '../app/components/enterdata/entries'
import TestUtils from 'react-addons-test-utils'
import React from 'react'
describe('Array', function () {

  describe('render into document and assert', () => {
    it('render component and assert', ()=> {
      const wrapper = TestUtils.renderIntoDocument(<Entries />)
      expect(1).to.eql(1)
    })

  })
  describe('#indexOf()', function () {

    it('should return -1 when the value is not present', function () {
      console.log('invoke one assert');
      assert.equal(-1, [1, 2, 3].indexOf(5));
      assert.equal(-1, [1, 2, 3].indexOf(0));

    });
  });

  describe('#indexOf()', function () {

    it('should return -1 when the value is not present', function () {
      console.log('invoke second should');
      [1, 2, 3].indexOf(5).should.equal(-1);
      [1, 2, 3].indexOf(0).should.equal(-1);
    });
  });
});