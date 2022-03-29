import React, { useState, useEffect } from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import LoadingScreen from './Components/LoadingScreen';
import * as UnityContextUtils from './Utils/UnityContextUtils';

const unityContext = new UnityContext({
  loaderUrl: "Build/unity_build.loader.js",
  dataUrl: "Build/unity_build.data",
  frameworkUrl: "Build/unity_build.framework.js",
  codeUrl: "Build/unity_build.wasm",
  streamingAssetsUrl: "StreamingAssets",
  productName: "IC Unity Template",
  productVersion: "0.1.0",
  companyName: "IC Unity Template",
});


function App() {
  const [progression, setProgression] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(function () {
    unityContext.on("progress", function (progression) {
      setProgression(progression);
    });
  }, []);

  useEffect(function () {
    unityContext.on("loaded", function () {
      setIsLoaded(true);
    });
  }, []);

  UnityContextUtils.AddUnityListeners(unityContext);

  return(
  <div>
    {!isLoaded && <LoadingScreen value={progression * 100} />}
    <Unity unityContext={unityContext} devicePixelRatio={1}
           style={{
      height: "100%",
      width: "100%",
      position: "absolute" }}
    />
  </div>
  );
}

export default App;