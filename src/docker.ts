import * as exec from '@actions/exec'
import * as core from '@actions/core'
/**
 * Pulls a docker image
 * @param {string} dockerImage The name of the image to be pulled
 */
export async function pullDockerImage(dockerImage: string): Promise<number>
{
    return exec.exec(`docker pull ${dockerImage}`)
}

/**
 * Creates and returns the docker command to be executed
 *
 * @param {string} dockerImage The docker image to be run.
 * @param {string} configDir The directory containing the configuration files of the automation framework.
 * @param {string} reportsDir The directory containing the reports created by the automation framework.
 * @param {string} autorunFile The actual automation framework configuration
 * @return {string} The docker command to be run
 */
export function getDockerCommand(dockerImage: string, configDir: string, reportsDir: string, autorunFile: string): string
{
    const workspace: string = process.env.GITHUB_WORKSPACE ?? ''
    const bashCmd = `/bin/bash -c "mkdir reports; /zap/zap.sh -cmd -autorun /zap/${configDir}/${autorunFile}"`

    let dockerCmd = `docker run --mount type=bind,source=${workspace}/${configDir},target=/zap/${configDir} `
    dockerCmd += `--mount type=bind,source=${reportsDir},target=/zap/reports `
    dockerCmd += `--network="host" -t ${dockerImage} ${bashCmd}`

    return dockerCmd
}

export async function copyFilesFromDocker(dockerImage: string, localDir: string): Promise<void>
{
    try {
        let containerId = ''

        const options = {listeners: {}}
        options.listeners = {
            stdout: (data: Buffer) => {
                containerId += data
            }
        }

        await exec.exec('docker' ,['ps', '-alq'], options)
        await exec.exec('docker', ['cp', `${containerId}:/zap/reports`, localDir])
        await exec.exec(`docker stop ${containerId}`)
    } catch (error)
    {
        if (error instanceof Error) {
            core.setFailed(error.message)
        }
    }
}
