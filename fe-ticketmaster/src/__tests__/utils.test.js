import {formatEventData} from '../utils' 
import testEvent from './data'

describe('utils test', () => {
    test('utils returns an array', () => {
    expect(formatEventData([])).toEqual([])
    })
    test('utils returns an array', () => {
        expect(formatEventData([testEvent])).toHaveProperty('name')
        })
})