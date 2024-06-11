
/**
 * Créez une fonction asynchrone qui attend 2 seconde
 * 
 * utilisez new Promise
 */

const sleep = (ms) => new Promise(resolve => setTimeout(resolve,ms));

const asynchroneFunction = async () => {
    console.log("start");
    await sleep(2000);
    console.log("end");
}
asynchroneFunction();
module.exports = {sleep};