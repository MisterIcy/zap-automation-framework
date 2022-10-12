import {describe, expect, test} from '@jest/globals'
import {RiskCode} from '../../src/reports/RiskCode'
import exp from 'constants'

describe('Testing Risk Codes', () => {
    test('Test Information Risk Code', () => {
        const riskCode = new RiskCode(0)
        expect(riskCode.getCode()).toBe(0)
        expect(riskCode.getName()).toBe('Informational')
        expect(riskCode.getEmoji()).toBe(':information_source:')
    })
    test('Test Low Risk Code', () => {
        const riskCode = new RiskCode(1)
        expect(riskCode.getCode()).toBe(1)
        expect(riskCode.getName()).toBe('Low')
        expect(riskCode.getEmoji()).toBe(':large_blue_diamond:')
    })
    test('Test Medium Risk Code', () => {
        const riskCode = new RiskCode(2)
        expect(riskCode.getCode()).toBe(2)
        expect(riskCode.getName()).toBe('Medium')
        expect(riskCode.getEmoji()).toBe(':large_orange_diamond:')
    })
    test( 'Test High Risk Code', () => {
        const riskCode = new RiskCode(3)
        expect(riskCode.getCode()).toBe(3)
        expect(riskCode.getName()).toBe('High')
        expect(riskCode.getEmoji()).toBe(':bangbang:')
    })
    test( 'Test Other Risk Code', () => {
        const riskCode = new RiskCode(42)
        expect(riskCode.getCode()).toBe(42)
        expect(riskCode.getName()).toBe('Unknown')
        expect(riskCode.getEmoji()).toBe(':white_check_mark:')
    })
    test('Risk Code Equality', () => {
        const r1 = new RiskCode(1)
        const r2 = new RiskCode(1)
        expect(r1.isEqualTo(r2)).toBe(true)
    })
    test('Risk Code Inequality', () => {
        const r1 = new RiskCode(1)
        const r2 = new RiskCode(2)
        expect(r1.isEqualTo(r2)).toBe(false)
    })
})
