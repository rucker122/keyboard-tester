
const light = true;
var log_element = 'log-content';
var key_listener = {};
var shortest_input = null;
const KEY_CODE_MAP = [
    {
        "keyCode": 27,
        "code": "Escape",
        "ASCII": 69,
        "Symbol": "Esc"
    },
    {
        "keyCode": 112,
        "code": "F1",
        "ASCII": 70,
        "Symbol": "F1"
    },
    {
        "keyCode": 113,
        "code": "F2",
        "ASCII": 70,
        "Symbol": "F2"
    },
    {
        "keyCode": 114,
        "code": "F3",
        "ASCII": 70,
        "Symbol": "F3"
    },
    {
        "keyCode": 115,
        "code": "F4",
        "ASCII": 70,
        "Symbol": "F4"
    },
    {
        "keyCode": 116,
        "code": "F5",
        "ASCII": 70,
        "Symbol": "F5"
    },
    {
        "keyCode": 117,
        "code": "F6",
        "ASCII": 70,
        "Symbol": "F6"
    },
    {
        "keyCode": 118,
        "code": "F7",
        "ASCII": 70,
        "Symbol": "F7"
    },
    {
        "keyCode": 119,
        "code": "F8",
        "ASCII": 70,
        "Symbol": "F8"
    },
    {
        "keyCode": 120,
        "code": "F9",
        "ASCII": 70,
        "Symbol": "F9"
    },
    {
        "keyCode": 121,
        "code": "F10",
        "ASCII": 70,
        "Symbol": "F10"
    },
    {
        "keyCode": 122,
        "code": "F11",
        "ASCII": 70,
        "Symbol": "F11"
    },
    {
        "keyCode": 123,
        "code": "F12",
        "ASCII": 70,
        "Symbol": "F12"
    },
    {
        "keyCode": 192,
        "code": "Backquote",
        "ASCII": 96,
        "Symbol": "`"
    },
    {
        "keyCode": 49,
        "code": "Digit1",
        "ASCII": 49,
        "Symbol": "1"
    },
    {
        "keyCode": 50,
        "code": "Digit2",
        "ASCII": 50,
        "Symbol": "2"
    },
    {
        "keyCode": 51,
        "code": "Digit3",
        "ASCII": 51,
        "Symbol": "3"
    },
    {
        "keyCode": 52,
        "code": "Digit4",
        "ASCII": 52,
        "Symbol": "4"
    },
    {
        "keyCode": 53,
        "code": "Digit5",
        "ASCII": 53,
        "Symbol": "5"
    },
    {
        "keyCode": 54,
        "code": "Digit6",
        "ASCII": 54,
        "Symbol": "6"
    },
    {
        "keyCode": 55,
        "code": "Digit7",
        "ASCII": 55,
        "Symbol": "7"
    },
    {
        "keyCode": 56,
        "code": "Digit8",
        "ASCII": 56,
        "Symbol": "8"
    },
    {
        "keyCode": 57,
        "code": "Digit9",
        "ASCII": 57,
        "Symbol": "9"
    },
    {
        "keyCode": 48,
        "code": "Digit0",
        "ASCII": 48,
        "Symbol": "0"
    },
    {
        "keyCode": 189,
        "code": "Minus",
        "ASCII": 45,
        "Symbol": "-"
    },
    {
        "keyCode": 187,
        "code": "Equal",
        "ASCII": 61,
        "Symbol": "="
    },
    {
        "keyCode": 8,
        "code": "Backspace",
        "ASCII": 66,
        "Symbol": ""
    },
    {
        "keyCode": 9,
        "code": "Tab",
        "ASCII": 84,
        "Symbol": ""
    },
    {
        "keyCode": 81,
        "code": "KeyQ",
        "ASCII": 113,
        "Symbol": "Q"
    },
    {
        "keyCode": 87,
        "code": "KeyW",
        "ASCII": 119,
        "Symbol": "W"
    },
    {
        "keyCode": 69,
        "code": "KeyE",
        "ASCII": 101,
        "Symbol": "E"
    },
    {
        "keyCode": 82,
        "code": "KeyR",
        "ASCII": 114,
        "Symbol": "R"
    },
    {
        "keyCode": 84,
        "code": "KeyT",
        "ASCII": 116,
        "Symbol": "T"
    },
    {
        "keyCode": 89,
        "code": "KeyY",
        "ASCII": 121,
        "Symbol": "Y"
    },
    {
        "keyCode": 85,
        "code": "KeyU",
        "ASCII": 117,
        "Symbol": "U"
    },
    {
        "keyCode": 73,
        "code": "KeyI",
        "ASCII": 105,
        "Symbol": "I"
    },
    {
        "keyCode": 79,
        "code": "KeyO",
        "ASCII": 111,
        "Symbol": "O"
    },
    {
        "keyCode": 80,
        "code": "KeyP",
        "ASCII": 112,
        "Symbol": "P"
    },
    {
        "keyCode": 219,
        "code": "BracketLeft",
        "ASCII": 91,
        "Symbol": "["
    },
    {
        "keyCode": 221,
        "code": "BracketRight",
        "ASCII": 93,
        "Symbol": "]"
    },
    {
        "keyCode": 220,
        "code": "Backslash",
        "ASCII": 92,
        "Symbol": "\\"
    },
    {
        "keyCode": 20,
        "code": "CapsLock",
        "ASCII": 67,
        "Symbol": ""
    },
    {
        "keyCode": 65,
        "code": "KeyA",
        "ASCII": 65,
        "Symbol": "A"
    },
    {
        "keyCode": 83,
        "code": "KeyS",
        "ASCII": 83,
        "Symbol": "S"
    },
    {
        "keyCode": 68,
        "code": "KeyD",
        "ASCII": 68,
        "Symbol": "D"
    },
    {
        "keyCode": 70,
        "code": "KeyF",
        "ASCII": 70,
        "Symbol": "F"
    },
    {
        "keyCode": 71,
        "code": "KeyG",
        "ASCII": 71,
        "Symbol": "G"
    },
    {
        "keyCode": 72,
        "code": "KeyH",
        "ASCII": 72,
        "Symbol": "H"
    },
    {
        "keyCode": 74,
        "code": "KeyJ",
        "ASCII": 74,
        "Symbol": "J"
    },
    {
        "keyCode": 75,
        "code": "KeyK",
        "ASCII": 75,
        "Symbol": "K"
    },
    {
        "keyCode": 76,
        "code": "KeyL",
        "ASCII": 76,
        "Symbol": "L"
    },
    {
        "keyCode": 186,
        "code": "Semicolon",
        "ASCII": 59,
        "Symbol": ";"
    },
    {
        "keyCode": 222,
        "code": "Quote",
        "ASCII": 39,
        "Symbol": "'"
    },
    {
        "keyCode": 13,
        "code": "Enter",
        "ASCII": 69,
        "Symbol": ""
    },
    {
        "keyCode": 16,
        "code": "ShiftLeft",
        "ASCII": 83,
        "Symbol": "Shift"
    },
    {
        "keyCode": 90,
        "code": "KeyZ",
        "ASCII": 90,
        "Symbol": "Z"
    },
    {
        "keyCode": 88,
        "code": "KeyX",
        "ASCII": 88,
        "Symbol": "X"
    },
    {
        "keyCode": 67,
        "code": "KeyC",
        "ASCII": 67,
        "Symbol": "C"
    },
    {
        "keyCode": 86,
        "code": "KeyV",
        "ASCII": 86,
        "Symbol": "V"
    },
    {
        "keyCode": 66,
        "code": "KeyB",
        "ASCII": 66,
        "Symbol": "B"
    },
    {
        "keyCode": 78,
        "code": "KeyN",
        "ASCII": 78,
        "Symbol": "N"
    },
    {
        "keyCode": 77,
        "code": "KeyM",
        "ASCII": 77,
        "Symbol": "M"
    },
    {
        "keyCode": 188,
        "code": "Comma",
        "ASCII": 44,
        "Symbol": ","
    },
    {
        "keyCode": 190,
        "code": "Period",
        "ASCII": 46,
        "Symbol": "."
    },
    {
        "keyCode": 191,
        "code": "Slash",
        "ASCII": 47,
        "Symbol": "/"
    },
    {
        "keyCode": 16,
        "code": "ShiftRight",
        "ASCII": 83,
        "Symbol": "Shift"
    },
    {
        "keyCode": 17,
        "code": "ControlLeft",
        "ASCII": 67,
        "Symbol": "Ctrl"
    },
    {
        "keyCode": 91,
        "code": "MetaLeft",
        "ASCII": 77,
        "Symbol": "Win"
    },
    {
        "keyCode": 18,
        "code": "AltLeft",
        "ASCII": 65,
        "Symbol": "Alt"
    },
    {
        "keyCode": 32,
        "code": "Space",
        "ASCII": 32,
        "Symbol": ""
    },
    {
        "keyCode": 18,
        "code": "AltRight",
        "ASCII": 65,
        "Symbol": "Alt"
    },
    {
        "keyCode": 93,
        "code": "ContextMenu",
        "ASCII": 67,
        "Symbol": "Menu"
    },
    {
        "keyCode": 17,
        "code": "ControlRight",
        "ASCII": 67,
        "Symbol": "Ctrl"
    },
    {
        "keyCode": 44,
        "code": "PrintScreen",
        "ASCII": 80,
        "Symbol": "Prt"
    },
    {
        "keyCode": 145,
        "code": "ScrollLock",
        "ASCII": 83,
        "Symbol": "ScrLck"
    },
    {
        "keyCode": 19,
        "code": "Pause",
        "ASCII": 80,
        "Symbol": ""
    },
    {
        "keyCode": 45,
        "code": "Insert",
        "ASCII": 73,
        "Symbol": "Ins"
    },
    {
        "keyCode": 36,
        "code": "Home",
        "ASCII": 72,
        "Symbol": ""
    },
    {
        "keyCode": 33,
        "code": "PageUp",
        "ASCII": 80,
        "Symbol": "Page<br/>Up"
    },
    {
        "keyCode": 46,
        "code": "Delete",
        "ASCII": 68,
        "Symbol": "Del"
    },
    {
        "keyCode": 35,
        "code": "End",
        "ASCII": 69,
        "Symbol": ""
    },
    {
        "keyCode": 34,
        "code": "PageDown",
        "ASCII": 80,
        "Symbol": "Page<br/>Down"
    },
    {
        "keyCode": 38,
        "code": "ArrowUp",
        "ASCII": 65,
        "Symbol": "Up"
    },
    {
        "keyCode": 37,
        "code": "ArrowLeft",
        "ASCII": 65,
        "Symbol": "Left"
    },
    {
        "keyCode": 40,
        "code": "ArrowDown",
        "ASCII": 65,
        "Symbol": "Down"
    },
    {
        "keyCode": 39,
        "code": "ArrowRight",
        "ASCII": 65,
        "Symbol": "Right"
    },
    {
        "keyCode": 144,
        "code": "NumLock",
        "ASCII": 78,
        "Symbol": "Num<br/>Lock"
    },
    {
        "keyCode": 111,
        "code": "NumpadDivide",
        "ASCII": 47,
        "Symbol": "/"
    },
    {
        "keyCode": 106,
        "code": "NumpadMultiply",
        "ASCII": 42,
        "Symbol": "*"
    },
    {
        "keyCode": 109,
        "code": "NumpadSubtract",
        "ASCII": 45,
        "Symbol": "-"
    },
    {
        "keyCode": 36,
        "code": "Numpad7",
        "ASCII": 72,
        "Symbol": "7"
    },
    {
        "keyCode": 38,
        "code": "Numpad8",
        "ASCII": 65,
        "Symbol": "8"
    },
    {
        "keyCode": 33,
        "code": "Numpad9",
        "ASCII": 80,
        "Symbol": "9"
    },
    {
        "keyCode": 107,
        "code": "NumpadAdd",
        "ASCII": 43,
        "Symbol": "+"
    },
    {
        "keyCode": 37,
        "code": "Numpad4",
        "ASCII": 65,
        "Symbol": "4"
    },
    {
        "keyCode": 12,
        "code": "Numpad5",
        "ASCII": 67,
        "Symbol": "5"
    },
    {
        "keyCode": 39,
        "code": "Numpad6",
        "ASCII": 65,
        "Symbol": "6"
    },
    {
        "keyCode": 35,
        "code": "Numpad1",
        "ASCII": 69,
        "Symbol": "1"
    },
    {
        "keyCode": 40,
        "code": "Numpad2",
        "ASCII": 65,
        "Symbol": "2"
    },
    {
        "keyCode": 34,
        "code": "Numpad3",
        "ASCII": 80,
        "Symbol": "3"
    },
    {
        "keyCode": 13,
        "code": "NumpadEnter",
        "ASCII": 69,
        "Symbol": "Enter"
    },
    {
        "keyCode": 45,
        "code": "Numpad0",
        "ASCII": 73,
        "Symbol": "0"
    },
    {
        "keyCode": 46,
        "code": "NumpadDecimal",
        "ASCII": 68,
        "Symbol": "."
    }
];



function getKeyData(){
    fetch('key_map.json')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
}

function addValueToObj(el){
    KEY_CODE_MAP.push(
        {
            "keyCode" : el.keyCode,
            "code" : el.code,
            "ASCII" : el.key.charCodeAt(),
        }
    );
}


window.onload = function (){

    document.getElementById("btn-clear").addEventListener("click", function(){ 
        document.getElementById(log_element).innerHTML = "";
        document.getElementById("shortest-input").innerHTML = "";
        shortest_input = null;
    });


    document.addEventListener('keydown', 
        
        function (e){
            if (!e.repeat){
                let press_time = new Date();
                key_listener[e.keyCode] = press_time.getTime();
            }
            if(light) lightingUpKey(e, true);
            event.preventDefault();
            
        });
    
    
    
    
    document.addEventListener('keyup', 
        function (e){
            let release_time = new Date();

            loggingKey(e, release_time);
            
            if(light) lightingUpKey(e, false);

            event.preventDefault();
        });
    
    
    initalKey();
};

function initalKey(){
    var keys = document.getElementsByClassName("key_valid");

    for(let key of keys){
        let keyCode = key.getAttribute("data-key");
        let keyFromMap = KEY_CODE_MAP.filter(k => k.code == keyCode)[0];
        if(keyFromMap !== null && keyFromMap !== undefined ){ 
            if(keyFromMap.Symbol.trim() === '')
                key.textContent = keyFromMap.code;
            else 
                key.innerHTML = keyFromMap.Symbol;
        }
    }
}

function loggingKey(e, release_time){
    // 計算時差
    let between_time = release_time.getTime() - key_listener[e.keyCode];

    // 建立 <p>，並加入按下的按鍵文字
    let displayText = document.createElement("p");
    displayText.className = "key_log_text";
    displayText.innerHTML = `<span class="label">${e.code}</span> `;
    
    // 加入輸入延遲文字
    let color = getLatencyColor(between_time);
    displayText.innerHTML += `<span class="${color}"><b> ${between_time} ms </b></span>`;
    
    // 加入至Log視窗
    document.getElementById(log_element).prepend(displayText);

    // 處理最短的輸入
    updateShortest(between_time);


}

function lightingUpKey(e, trigger){
    var key = document.querySelectorAll(`[data-key="${e.code}"]`)[0];
    if (trigger) key.classList.add("key-focus");
    else key.classList.remove("key-focus");
}

function getLatencyColor(between_time){
    if (between_time <= 16) return 'color_blue';
    else if (between_time <= 32) return 'color_green';
    else if (between_time <= 64) return 'color_yellow';
    else if (between_time <= 128) return 'color_orange';
    else return 'color_red';
}


function updateShortest(time){
    if(shortest_input === null)
        shortest_input = time;
    else if(time < shortest_input)
        shortest_input = time;
    else return;

    console.log(time);
    document.getElementById("shortest-input").innerHTML = shortest_input;
}