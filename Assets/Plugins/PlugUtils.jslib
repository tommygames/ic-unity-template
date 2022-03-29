var WebGLFunctions = {    

    RequestPlugConnect: function(cbIndex) {
        dispatchReactUnityEvent("RequestPlugConnect", cbIndex);
    },
    
    CheckPlugConnection: function(cbIndex) {
        dispatchReactUnityEvent("CheckPlugConnection", cbIndex);
    },
    
    GetPlugNfts : function (cbIndex) 
    {
        dispatchReactUnityEvent("GetPlugNfts", cbIndex);
    }
    
};

mergeInto(LibraryManager.library, WebGLFunctions);