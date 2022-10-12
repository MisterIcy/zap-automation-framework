/* eslint-disable no-prototype-builtins */
import {RiskCode} from './RiskCode'
import {Confidence} from './Confidence'
import {AlertInterface} from './AlertInterface'
import {ConfidenceInterface} from './ConfidenceInterface'
import {RiskCodeInterface} from './RiskCodeInterface'

export class Alert implements AlertInterface {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(alertData: any) {
        this.pluginId = alertData.hasOwnProperty('pluginid') ? alertData['pluginid'] : ''
        this.alertRef = alertData.hasOwnProperty('alertref') ? alertData['alertref'] : ''
        this.alert = alertData.hasOwnProperty('alert') ? alertData['alert'] : ''
        this.name = alertData.hasOwnProperty('name') ? alertData['name'] : ''

        const riskCode = alertData.hasOwnProperty('riskcode') ? parseInt(alertData['riskcode']) : 0
        this.riskCode = new RiskCode(riskCode)

        const confidence = alertData.hasOwnProperty('confidence') ? parseInt(alertData['confidence']) : 0
        this.confidence = new Confidence(confidence)

        this.riskDesc = alertData.hasOwnProperty('riskdesc') ? alertData['riskdesc'] : ''
        this.description = alertData.hasOwnProperty('desc') ? alertData['desc'] : ''
        this.count = alertData.hasOwnProperty('count') ? parseInt(alertData['count']) : 0
        this.solution = alertData.hasOwnProperty('solution') ? alertData['solution'] : ''
        this.otherInfo = alertData.hasOwnProperty('otherinfo') ? alertData['otherinfo'] : ''
        this.reference = alertData.hasOwnProperty('reference') ? alertData['reference'] : ''
        this.cweId = alertData.hasOwnProperty('cweid') ? alertData['cweid'] : ''
        this.wascId = alertData.hasOwnProperty('wascid') ? alertData['wascid'] : ''
        this.sourceId = alertData.hasOwnProperty('sourceid') ? alertData['sourceid'] : ''
    }

    alert: string
    alertRef: string
    confidence: ConfidenceInterface
    count: number
    cweId: string
    description: string
    name: string
    otherInfo: string
    pluginId: string
    reference: string
    riskCode: RiskCodeInterface
    riskDesc: string
    solution: string
    sourceId: string
    wascId: string

    getAlert(): string {
        return this.alert
    }

    getAlertRef(): string {
        return this.alertRef
    }

    getCWEID(): string {
        return this.cweId
    }

    getConfidence(): ConfidenceInterface {
        return this.confidence
    }

    getCount(): number {
        return this.count
    }

    getDescription(): string {
        return this.description
    }

    getName(): string {
        return this.name
    }

    getOtherInfo(): string {
        return this.otherInfo
    }

    getPluginId(): string {
        return this.pluginId
    }

    getReference(): string {
        return this.reference
    }

    getRiskCode(): RiskCodeInterface {
        return this.riskCode
    }

    getRiskDescription(): string {
        return this.riskDesc
    }

    getSolution(): string {
        return this.solution
    }

    getSourceID(): string {
        return this.sourceId
    }

    getWASCID(): string {
        return this.wascId
    }
}
