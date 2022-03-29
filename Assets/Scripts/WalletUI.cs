using Newtonsoft.Json;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class WalletUI : MonoBehaviour
{
    public Button checkConnectionBtn;
    public Button requestConnectionBtn;
    public Button getNftsBtn;
    public TextMeshProUGUI label;
    
    void Start()
    {
        checkConnectionBtn.onClick.AddListener(CheckConnection);
        requestConnectionBtn.onClick.AddListener(RequestConnection);
        getNftsBtn.onClick.AddListener(GetNfts);
    }

    void OnDestroy()
    {
        checkConnectionBtn.onClick.RemoveListener(CheckConnection);
        requestConnectionBtn.onClick.RemoveListener(RequestConnection);
        getNftsBtn.onClick.RemoveListener(GetNfts);    
    }

    void CheckConnection()
    {
        label.text = "Loading...";
        ReactApi.Instance.CheckPlugConnection(OnCheckConnection);
    }

    void OnCheckConnection(string jsonData)
    {
        var response = JsonConvert.DeserializeObject<CheckPlugConnectionResponse>(jsonData);
        if (response == null) 
        {
            Debug.LogError("Unable to parse CheckPlugConnectionResponse -- make sure you are running the project as a WebGL build in browser");
            return;
        }

        label.text = "Checked Plug Connection with response of: " + (response.result ? "Connected" : "Not Connected");
    }
    
    void RequestConnection()
    {
        label.text = "Loading...";
        ReactApi.Instance.RequestPlugConnect(OnRequestConnection);
    }
    
    void OnRequestConnection(string jsonData)
    {
        var response = JsonConvert.DeserializeObject<RequestPlugConnectResponse>(jsonData);
        if (response == null) 
        {
            Debug.LogError("Unable to parse RequestPlugConnectResponse -- make sure you are running the project as a WebGL build in browser");
            return;
        }

        label.text = "Requested Plug Connection with response of: " + response.result;
    }
    
    void GetNfts()
    {
        label.text = "Loading...";
        ReactApi.Instance.GetPlugNfts(OnGetNfts);
    }
    
    void OnGetNfts(string jsonData)
    {
        var response = JsonConvert.DeserializeObject<GetDabNftsResponse>(jsonData);
        if (response == null) 
        {
            Debug.LogError("Unable to parse GetDabNftsResponse -- make sure you are running the project as a WebGL build in browser");
            return;
        }

        label.text = "Fetched Plug NFTs with response of:\n";

        foreach (var collection in response.collections)
        {
            foreach (var token in collection.tokens)
            {
                label.text += token.collection + " #" + token.index + "\n";
            }
        }
    }
}
