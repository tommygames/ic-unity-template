using System.Runtime.InteropServices;

public static class PlugUtilsInternal
{
    [DllImport("__Internal")]
    public static extern void RequestPlugConnect(int cbIndex);
    
    [DllImport("__Internal")]
    public static extern void CheckPlugConnection(int cbIndex);

    [DllImport("__Internal")]
    public static extern void GetPlugNfts(int cbIndex);
}

public static class PlugUtils
{
    public static void RequestConnect(int cbIndex) {
#if UNITY_WEBGL && !UNITY_EDITOR
        PlugUtilsInternal.RequestPlugConnect(cbIndex);
#endif
    }
    
    public static void CheckConnection(int cbIndex) {
#if UNITY_WEBGL && !UNITY_EDITOR
        PlugUtilsInternal.CheckPlugConnection(cbIndex);
#endif
    }

    public static void GetPlugNfts(int cbIndex) {
#if UNITY_WEBGL && !UNITY_EDITOR
        PlugUtilsInternal.GetPlugNfts(cbIndex);
#endif
    }
}
