import {describe, expect, test} from '@jest/globals'
import {Summary} from '../../src/reports/Summary'
import exp from 'constants'

describe('Summary Tests', () => {
    test('Create summary with everything', () => {
        const summaryJson = {
            pass: '10',
            warn: '15',
            fail: '1'
        }

        const summaryObj = new Summary(summaryJson)
        expect(summaryObj.getPasses()).toBe(10)
        expect(summaryObj.getWarnings()).toBe(15)
        expect(summaryObj.getFailures()).toBe(1)
        expect(summaryObj.hasFailures()).toBe(true)
        expect(summaryObj.hasWarningsOrFailures()).toBe(true)
    })
    test('Create summary only with failures', () => {
        const summaryJson = {
            fail: '20'
        }

        const summaryObj = new Summary(summaryJson)
        expect(summaryObj.getPasses()).toBe(0)
        expect(summaryObj.getWarnings()).toBe(0)
        expect(summaryObj.getFailures()).toBe(20)
        expect(summaryObj.hasFailures()).toBe(true)
        expect(summaryObj.hasWarningsOrFailures()).toBe(true)
    })

    test('Create summary only with warnings', () => {
        const summaryJson = {
            warn: '10'
        }

        const summaryObj = new Summary(summaryJson)
        expect(summaryObj.getPasses()).toBe(0)
        expect(summaryObj.getWarnings()).toBe(10)
        expect(summaryObj.getFailures()).toBe(0)
        expect(summaryObj.hasFailures()).toBe(false)
        expect(summaryObj.hasWarningsOrFailures()).toBe(true)
    })

    test('Create summary only with passes', () => {
        const summaryJson = {
            pass: '42'
        }

        const summaryObj = new Summary(summaryJson)
        expect(summaryObj.getPasses()).toBe(42)
        expect(summaryObj.getWarnings()).toBe(0)
        expect(summaryObj.getFailures()).toBe(0)
    })

    test('Test Summary Equality', () => {
        const s1 = new Summary({pass: 1})
        const s2 = new Summary({pass: 1})

        expect(s1.isEqualTo(s2)).toBe(true)
    })

    test('Test Summary Inequality', () => {
        const s1 = new Summary({pass: 1})
        const s2 = new Summary({fail: 1})

        expect(s1.isEqualTo(s2)).toBe(false)
    })
})
