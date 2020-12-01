import { formatEventData } from '../utils'
import testEvent from './data'

describe('utils test', () => {
    test('utils returns an array', () => {
        expect(formatEventData([])).toEqual([])
    })
    test('returns an array with object with appropriate keys', () => {
        const testArr = [testEvent];
        const returnArray = formatEventData(testArr)
        expect(Object.keys(returnArray[0])).toEqual(expect.arrayContaining(['name', 'genre', 'dates', 'URL', 'picture', 'venue', 'promoter']))
    })
    test('does not mutate original input', () => {
        const testArr = [testEvent];
        const returnArray = formatEventData(testArr)
        expect(returnArray).not.toBe(testArr)
    })
})