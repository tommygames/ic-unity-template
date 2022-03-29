import * as PlugUtils from "./PlugUtils";

export function AddUnityListeners(unityContext) {
    unityContext.on("GetPlugNfts", async function (cbIndex) {
        await PlugUtils.GetPlugNfts(cbIndex, unityContext);
    });

    unityContext.on("RequestPlugConnect", async function (cbIndex) {
        await PlugUtils.RequestPlugConnect(cbIndex, unityContext);
    });

    unityContext.on("CheckPlugConnection", async function (cbIndex) {
        await PlugUtils.CheckPlugConnection(cbIndex, unityContext);
    });
}