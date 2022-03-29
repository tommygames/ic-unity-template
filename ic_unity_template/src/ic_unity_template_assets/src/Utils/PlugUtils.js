import {getAllUserNFTs} from "@psychedelic/dab-js";
import {Principal} from "@dfinity/principal";

export async function RequestPlugConnect(cbIndex, unityContext) { // unused
    let data = {};
    data.cbIndex = cbIndex;

    try {
        if (typeof window.ic === 'undefined' || typeof window.ic.plug === 'undefined') {
            throw new Error("We cannot detect a Plug Wallet in your browser extensions");
        }

        const host = "https://mainnet.dfinity.network";

        const result = await window.ic.plug.requestConnect({
            host,
        });

        data.result = result ? "allowed" : "denied";
        unityContext.send("ReactApi", "HandleCallback", JSON.stringify(data));
    } catch (e) {
        console.error(e);
        data.error = e.message;
        unityContext.send("ReactApi", "HandleCallback", JSON.stringify(data));
    }
}

export async function CheckPlugConnection(cbIndex, unityContext) {
    let data = {};
    data.cbIndex = cbIndex;

    try {
        if (typeof window.ic === 'undefined' || typeof window.ic.plug === 'undefined') {
            throw new Error("We cannot detect a Plug Wallet in your browser extensions");
        }

        let result = await window.ic.plug.isConnected();
        data.result = result ? 1 : 0;
        unityContext.send("ReactApi", "HandleCallback", JSON.stringify(data));
    } catch (e) {
        console.error(e);
        data.error = e.message;
        unityContext.send("ReactApi", "HandleCallback", JSON.stringify(data));
    }
}

export async function GetPlugNfts(cbIndex, unityContext) {
    let data = {};
    data.cbIndex = cbIndex;

    try {
        let collections = await _fetchAllNfts();

        data.collections = collections;

        let json = JSON.stringify(data, (key, value) =>
            typeof value === 'bigint' // DAB uses bigint for NFT index field -- convert it to string because bigint can't be sent in a message
                ? value.toString()
                : value // return everything else unchanged
        );

        unityContext.send("ReactApi", "HandleCallback", json);

    } catch (e) {
        console.error(e);
        data.error = e.message;
        unityContext.send("ReactApi", "HandleCallback", JSON.stringify(data));
    }
}

async function _fetchAllNfts() {

    if (typeof window.ic === 'undefined' || typeof window.ic.plug === 'undefined') {
        throw new Error("We cannot detect a Plug Wallet in your browser extensions");
    }

    const whitelist = [
        'qoctq-giaaa-aaaaa-aaaea-cai', // Doesn't have to be any specific canister id
    ];

    const host = "https://mainnet.dfinity.network";

    await window.ic.plug.requestConnect({
        whitelist,
        host,
    });

    const principal = await window.ic.plug.agent.getPrincipal();
    const collections = await getAllUserNFTs(
        {user: Principal.fromText(`${principal}`)}
    );

    return collections;
}