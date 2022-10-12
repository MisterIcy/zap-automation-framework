import {describe, expect, test} from '@jest/globals'
import {Confidence} from '../../src/reports/Confidence'

describe('Confidence Tests', () => {
    test('Test Unknown Confidence', () => {
        const confidence = new Confidence(0)
        expect(confidence.getConfidence()).toBe(0)
        expect(confidence.getName()).toBe('Unknown')
    })
    test('Test Low Confidence', () => {
        const confidence = new Confidence(1)
        expect(confidence.getConfidence()).toBe(1)
        expect(confidence.getName()).toBe('Low')
    })
    test('Test Medium Confidence', () => {
        const confidence = new Confidence(2)
        expect(confidence.getConfidence()).toBe(2)
        expect(confidence.getName()).toBe('Medium')
    })
    test('Test High Confidence', () => {
        const confidence = new Confidence(3)
        expect(confidence.getConfidence()).toBe(3)
        expect(confidence.getName()).toBe('High')
    })
    test('Confidence Equality', () => {
        const lowConf = new Confidence(1)
        const tryToEqual = new Confidence(1)

        expect(lowConf.isEqualTo(tryToEqual)).toBe(true)
    })
    test('Confidence Inequality', () => {
        const lowConf = new Confidence(1)
        const mediumConf = new Confidence(2)
        expect(lowConf.isEqualTo(mediumConf)).toBe(false)
    })
})
