import mocha from 'mocha';
import {expect, assert} from 'chai';

import MathSet from '../src/index';

describe('mathset', () => {
  let mathset;
  beforeEach(() => {
    mathset = new MathSet([1, 2, 3, 5, 6]);
  });

  describe('equal', () => {
    it('mathset should exist', () => {
      expect(MathSet).to.exist;
    });

    it('should have a equal method', () => {
      expect(mathset.equal).to.exist;
    })

    it('should return true if two sets are equal', () => {
      expect(mathset.equal([1, 2, 3, 5, 6])).to.be.true;
    });

    it('should return false if the sets have different members', () => {
      expect(mathset.equal([1, 2, 5, 6, 8])).to.be.false;
    });

    it('should return true if the set has duplicate members', () => {
      expect(mathset.equal([1, 2, 3, 5, 6, 2, 5, 5])).to.be.true;
    });

    it('should return true regardless of order', () => {
      expect(mathset.equal([6, 2, 5, 2, 3, 1])).to.be.true;
    });
  });

  describe('isEmpty', () => {
    it('should exist', () => {
      expect(mathset.isEmpty).to.exist;
    });

    it('should return boolean', () => {
      expect(mathset.isEmpty()).to.be.a('boolean');
    });

    it('should return true if the set is empty', () => {
      const newMathSet = new MathSet();
      expect(newMathSet.isEmpty()).to.be.true;
    });

    it('should return false if the set is not empty', () => {
      expect(mathset.isEmpty()).to.be.false;
    });
  });

  describe('subset', () => {
    it('should exist', () => {
      expect(mathset.subset).to.exist;
    });

    it('should return boolean', () => {
      expect(mathset.subset([1, 2, 4])).to.be.a('boolean');
    });

    it('should return false if the local set has more elements that the parameter set', () => {
      expect(mathset.subset([1, 2])).to.be.false;
    })

    it('should return true if the local set is a subset', () => {
      expect(mathset.subset([1, 2, 3, 5, 6, 8, 9, 3, 5])).to.be.true;
    });

    it('should return false if the local set has different element from the param set', () => {
      expect(mathset.subset([1, 2, 3, 54, 6, 4, 32]));
    });

    it('should return true if the set is empty', () => {
      const newMathSet = new MathSet();
      expect(newMathSet.subset([1, 2, 3, 5])).to.be.true;
    });
  });

  describe('union', () => {
    it('should exist', () => {
      expect(mathset.union).to.exist;
      expect(mathset.union).to.be.a('function');
    });

    it('should return array', () => {
      expect(mathset.union([1, 2, 4])).to.be.a('array');
    });

    it('should concatenate two sets', () => {
      expect(mathset.union([1, 2, 3, 4, 5, 7, 8])).to.deep.equal([1, 2, 3, 5, 6, 4, 7, 8]);
    });

    it('should not have duplicates', () => {
      expect(mathset.union([1, 2, 3, 5, 6])).to.deep.equal([1, 2, 3, 5, 6]);
    });
  });
});