
/**
 * Generated using theia-plugin-generator
 */

import * as theia from '@theia/plugin';

export function start(context: theia.PluginContext) {
    const badExit = {
        id: 'bad-process-exit',
        label: "Bad: call exit()"
    };
    context.subscriptions.push(theia.commands.registerCommand(badExit, (...args: any[]) => {
        process.exit();
        setTimeout(()=>{
            theia.window.showInformationMessage('Plugins still working!');
        }, 1000);
    }));

    const badThrowError = {
        id: 'bad-throw-error',
        label: "Bad: Throw Error"
    };
    context.subscriptions.push(theia.commands.registerCommand(badThrowError, (...args: any[]) => {
        // process.exit();
        setTimeout(()=>{
            // theia.window.showInformationMessage('Plugins still working!');
            throw new Error('Unhandled error!');
        }, 1000);

    }));

    const badUnhandledRejection = {
        id: 'bad-Unhandled-rejection',
        label: "Bad: Reject Promise"
    };
    context.subscriptions.push(theia.commands.registerCommand(badUnhandledRejection, (...args: any[]) => {
        setTimeout(()=>{
            new Promise((resolve, reject)=>{
                reject('Rejecting promise!!!');
            }).then(()=>{
                console.log('Should never happened.');
            });
        }, 1000);

    }));

}

export function stop() {

}
