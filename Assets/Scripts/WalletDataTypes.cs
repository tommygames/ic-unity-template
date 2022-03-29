using System.Collections.Generic;
using UnityEngine.Scripting;

[Preserve]
public class CallbackResponse
{
    [Preserve] public int cbIndex;
    [Preserve] public string error;
}

[Preserve]
public class RequestPlugConnectResponse
{
    [Preserve] public string result;
}

[Preserve]
public class CheckPlugConnectionResponse
{
    [Preserve] public bool result;
}

[Preserve]
public class GetDabNftsResponse
{
    [Preserve] public List<DabNftCollection> collections = new List<DabNftCollection>();
}

[Preserve]
public class DabNftCollection
{
    [Preserve] public string name;
    [Preserve] public string canisterId;
    [Preserve] public string standard;
    [Preserve] public string icon;
    [Preserve] public string description;
    [Preserve] public List<DabNftDetails> tokens = new List<DabNftDetails>();
}

[Preserve]
public class DabNftDetails
{
    [Preserve] public long index;
    [Preserve] public string canister;
    [Preserve] public string id;
    [Preserve] public string name;
    [Preserve] public string url;
    [Preserve] public object metadata;
    [Preserve] public string standard;
    [Preserve] public string collection;
}
