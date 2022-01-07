// @ts-ignore
//import createLogger from 'logging';

//export const logger = createLogger("SlimeFinder");

export function sleep(ms: number)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}