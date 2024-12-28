var radio_state;
chrome.storage.local.get("radio_state", function(item){
    radio_state = item.radio_state;
    console.log(radio_state);
});

function handle_minimal_text(selectionText){
    if(radio_state == "tab"){
        window.open("https://chatgpt.com/?q="+"summarize the text in one short sentence:%0A%0A "+selectionText);
    }else{
        window.open("https://chatgpt.com/?q="+"summarize the text in one short sentence:%0A%0A "+selectionText, "", "width=500,height=700");
    }   
}

function handle_very_short_text(selectionText){
    if(radio_state == "tab"){
        window.open("https://chatgpt.com/?q="+"summarize the text in a few sentences (max=5 sentences):%0A%0A "+selectionText)
    }else{
        window.open("https://chatgpt.com/?q="+"summarize the text in a few sentences (max=5 sentences):%0A%0A "+selectionText, "", "width=500,height=700")
    }
}

function handle_short_text(selectionText){
    if(radio_state == "tab"){
        window.open("https://chatgpt.com/?q="+"summarize the text:%0A%0A "+selectionText)
    }else{
        window.open("https://chatgpt.com/?q="+"summarize the text:%0A%0A "+selectionText, "", "width=500,height=700")
    }
}

function handle_custom_text(selectionText){
    var word_count = prompt("Enter word count");
    if(!isNaN(word_count)){ //if int
        if(radio_state == "tab"){
            window.open("https://chatgpt.com/?q="+"summarize the text in "+word_count+" words. Try to make a sentence/sentences:%0A%0A "+selectionText)
        }else{
            window.open("https://chatgpt.com/?q="+"summarize the text in "+word_count+" words. Try to make a sentence/sentences:%0A%0A "+selectionText, "", "width=500,height=700")
        }
    }else{
        alert(word_count+" is not a valid number!");
    }
}