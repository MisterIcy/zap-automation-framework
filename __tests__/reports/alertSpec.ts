import {describe, expect, test} from '@jest/globals'
import {Alert} from '../../src/reports/Alert'
import {RiskCode} from '../../src/reports/RiskCode'
import {Confidence} from '../../src/reports/Confidence'

describe('Alert Tests', () => {
    test('Alert Creation Test With Full Data', () => {
        const alertJson = {
            pluginid: 100,
            alertref: 101,
            alert: 'Test Case',
            name: 'Test Case',
            riskcode: '1',
            confidence: '3',
            riskdesc: 'Low (High)',
            desc: 'Test Description',
            count: 42,
            solution: 'No solution',
            otherinfo: 'No info',
            reference: 'No ref',
            cweid: 0,
            wascid: 0,
            sourceid: 0
        }

        const alertObj = new Alert(alertJson)
        const testRiskCode = new RiskCode(parseInt(alertJson.riskcode))
        const testConfidence = new Confidence(parseInt(alertJson.confidence))

        expect(alertObj.getPluginId()).toBe(alertJson.pluginid)
        expect(alertObj.getAlertRef()).toBe(alertJson.alertref)
        expect(alertObj.getAlert()).toBe(alertJson.alert)
        expect(alertObj.getName()).toBe(alertJson.name)
        expect(alertObj.getRiskCode()).toStrictEqual(testRiskCode)
        expect(alertObj.getConfidence()).toStrictEqual(testConfidence)
        expect(alertObj.getRiskDescription()).toBe(alertJson.riskdesc)
        expect(alertObj.getDescription()).toBe(alertJson.desc)
        expect(alertObj.getCount()).toBe(alertJson.count)
        expect(alertObj.getSolution()).toBe(alertJson.solution)
        expect(alertObj.getOtherInfo()).toBe(alertJson.otherinfo)
        expect(alertObj.getReference()).toBe(alertJson.reference)
        expect(alertObj.getCWEID()).toBe(alertJson.cweid)
        expect(alertObj.getWASCID()).toBe(alertJson.wascid)
        expect(alertObj.getSourceID()).toBe(alertJson.sourceid)
    })
    test('Alert Creation Test With Minimal', () => {
        const alertJson = {        }

        const alertObj = new Alert(alertJson)
        const testRiskCode = new RiskCode(0)
        const testConfidence = new Confidence(0)

        expect(alertObj.getPluginId()).toBe('')
        expect(alertObj.getAlertRef()).toBe('')
        expect(alertObj.getAlert()).toBe('')
        expect(alertObj.getName()).toBe('')
        expect(alertObj.getRiskCode()).toStrictEqual(testRiskCode)
        expect(alertObj.getConfidence()).toStrictEqual(testConfidence)
        expect(alertObj.getRiskDescription()).toBe('')
        expect(alertObj.getDescription()).toBe('')
        expect(alertObj.getCount()).toBe(0)
        expect(alertObj.getSolution()).toBe('')
        expect(alertObj.getOtherInfo()).toBe('')
        expect(alertObj.getReference()).toBe('')
        expect(alertObj.getCWEID()).toBe('')
        expect(alertObj.getWASCID()).toBe('')
        expect(alertObj.getSourceID()).toBe('')
    })
})
