document.getElementById("radio_tab").addEventListener("change",radio_change);
document.getElementById("radio_window").addEventListener("change",radio_change);


var radio_state = "tab";
chrome.storage.local.get("radio_state", function(item){
    radio_state = item.radio_state;
});

setTimeout(() => {
    if(radio_state == "tab"){
        document.getElementById("radio_tab").checked = true;
        document.getElementById("radio_window").checked = false;
    }else{
        document.getElementById("radio_window").checked = true;
        document.getElementById("radio_tab").checked = false;
    }
}, 500);

function radio_change(){
    if(radio_state == "tab"){
        radio_state = "window";
        document.getElementById("radio_tab").checked = false;
        document.getElementById("radio_window").checked = true;
        chrome.storage.local.set({"radio_state": radio_state}, function(){});
    }else{
        radio_state = "tab";
        document.getElementById("radio_tab").checked = true;
        document.getElementById("radio_window").checked = false;
        chrome.storage.local.set({"radio_state": radio_state}, function(){});

    }
}