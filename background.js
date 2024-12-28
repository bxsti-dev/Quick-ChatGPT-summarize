//chrome.storage.local.clear(); //clear saved options
chrome.storage.local.get("radio_state", function(item){
    console.log(item.radio_state);
});


chrome.contextMenus.removeAll();

chrome.contextMenus.create({
    id: "minimal",
    title: "minimal",
    contexts: ["selection"],
});
chrome.contextMenus.create({
    id: "very short",
    title: "very short",
    contexts: ["selection"],
});
chrome.contextMenus.create({
    id: "short",
    title: "short",
    contexts: ["selection"],
});
chrome.contextMenus.create({
    id: "custom",
    title: "custom word count",
    contexts: ["selection"],
});



chrome.contextMenus.onClicked.addListener(function(clickData,tab){

    if(clickData.selectionText != undefined){
        if(clickData.menuItemId == "minimal"){
            minimal_text(tab.id, clickData.selectionText); 
        }
        if(clickData.menuItemId == "very short"){
            very_short_text(tab.id, clickData.selectionText); 
        }
        if(clickData.menuItemId == "short"){
            short_text(tab.id, clickData.selectionText); 
        }
        if(clickData.menuItemId == "custom"){
            custom_text(tab.id, clickData.selectionText); 
        }
    }

})


function minimal_text(id, selectionText){
    chrome.scripting.executeScript({target: {tabId: id}, files: ['script.js']}, () => {
        chrome.scripting.executeScript({
            target: {tabId: id},
            args: [selectionText],
            func: (...args) => handle_minimal_text(...args),
        });
    });
}

function very_short_text(id, selectionText){
    chrome.scripting.executeScript({target: {tabId: id}, files: ['script.js']}, () => {
        chrome.scripting.executeScript({
            target: {tabId: id},
            args: [selectionText],
            func: (...args) => handle_very_short_text(...args),
        });
    });
}

function short_text(id, selectionText){
    chrome.scripting.executeScript({target: {tabId: id}, files: ['script.js']}, () => {
        chrome.scripting.executeScript({
            target: {tabId: id},
            args: [selectionText],
            func: (...args) => handle_short_text(...args),
        });
    });
}

function custom_text(id, selectionText){
    chrome.scripting.executeScript({target: {tabId: id}, files: ['script.js']}, () => {
        chrome.scripting.executeScript({
            target: {tabId: id},
            args: [selectionText],
            func: (...args) => handle_custom_text(...args),
        });
    });
}