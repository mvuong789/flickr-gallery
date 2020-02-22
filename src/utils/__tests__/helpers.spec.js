import { parseDateHumanReadable } from '../helpers';

describe('Testing the utils file', () => {
  describe('Testing parseDateHumanReadable', () => {
    it('should return the correct human readable date from a UTC string', () => {
      expect(parseDateHumanReadable('2020-02-21T11:14:20-08:00')).toEqual('22/1/2020');
    })
  })
})
