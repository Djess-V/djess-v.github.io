import React from "react";
import {
  TfiMouseAlt,
  TfiMusicAlt,
  TfiHome,
  TfiLock,
  TfiPowerOff,
  TfiMicrosoftAlt,
  TfiAlignJustify,
  TfiArrowCircleLeft,
  TfiArrowCircleDown,
  TfiArrowCircleRight,
  TfiArrowCircleUp,
  TfiDirectionAlt,
} from "react-icons/tfi";

import {
  SlPicture,
  SlSocialYoutube,
  SlSocialGithub,
  SlCalculator,
  SlCalender,
  SlClock,
  SlControlRewind,
  SlControlPlay,
  SlControlPause,
  SlControlForward,
  SlVolumeOff,
  SlVolume1,
  SlVolume2,
} from "react-icons/sl";

const styleSVG = {
  width: "16px",
  height: "16px",
};

const styleSVGArrow = {
  width: "12px",
  height: "12px",
};

const btnUpP = [
  {
    data: [<TfiMouseAlt style={styleSVG} />],
    name: "mouseBtn",
    id: 1,
    code: "",
  },
  {
    data: [<TfiMusicAlt style={styleSVG} />],
    name: "soundBtn",
    id: 2,
    code: "",
  },
  { data: [<TfiHome style={styleSVG} />], name: "homeBtn", id: 3, code: "" },
  {
    data: [<TfiLock style={styleSVG} />, "PC"],
    name: "blockBtn",
    id: 4,
    code: "",
  },
  {
    data: [<TfiPowerOff style={styleSVG} />, "PC"],
    name: "offBtn",
    id: 5,
    code: "",
  },
];

const F8 = (
  <div className="btn1F_F8">
    <SlControlPlay style={{ width: "9px", height: "11px" }} />
    <SlControlPause style={{ width: "9px", height: "11px" }} />
  </div>
);

const btn1F = [
  { data: ["Esc", ""], id: 6, code: "Escape" },
  { data: [<SlPicture style={styleSVG} />, "F1"], id: 7, code: "F1" },
  { data: [<SlSocialYoutube style={styleSVG} />, "F2"], id: 8, code: "F2" },
  { data: [<SlSocialGithub style={styleSVG} />, "F3"], id: 9, code: "F3" },
  { data: [<SlCalculator style={styleSVG} />, "F4"], id: 10, code: "F4" },
  { data: [<SlClock style={styleSVG} />, "F5"], id: 11, code: "F5" },
  { data: [<SlCalender style={styleSVG} />, "F6"], id: 13, code: "F6" },
  { data: [<SlControlRewind style={styleSVG} />, "F7"], id: 14, code: "F7" },
  { data: [F8, "F8"], id: 15, code: "F8" },
  { data: [<SlControlForward style={styleSVG} />, "F9"], id: 16, code: "F9" },
  { data: [<SlVolumeOff style={styleSVG} />, "F10"], id: 17, code: "F10" },
  { data: [<SlVolume1 style={styleSVG} />, "F11"], id: 18, code: "F11" },
  { data: [<SlVolume2 style={styleSVG} />, "F12"], id: 19, code: "F12" },
  { data: ["Insert", "Scr Lk"], id: 20, code: "Insert" },
  { data: ["Delete", "Print Scr"], id: 21, code: "Delete" },
];

const btn2Number = [
  { data: ["~", "`", "Ё"], id: 22, code: "Backquote" },
  { data: ["!", "1"], id: 23, code: "Digit1" },
  { data: ["@", "2", '"'], id: 24, code: "Digit2" },
  { data: ["#", "3", "№"], id: 25, code: "Digit3" },
  { data: ["$", "4", ";"], id: 26, code: "Digit4" },
  { data: ["%", "5"], id: 27, code: "Digit5" },
  { data: ["^", "6", ":"], id: 28, code: "Digit6" },
  { data: ["&", "7", "?"], id: 29, code: "Digit7" },
  { data: ["*", "8"], id: 30, code: "Digit8" },
  { data: ["(", "9"], id: 31, code: "Digit9" },
  { data: [")", "0"], id: 32, code: "Digit0" },
  { data: ["_", "-"], id: 33, code: "Minus" },
  { data: ["+", "="], id: 34, code: "Equal" },
  { data: ["Backspace"], id: 35, code: "Backspace" },
];

const btn3Tab = [
  {
    data: ["Tab", <TfiDirectionAlt style={styleSVGArrow} />],
    id: 36,
    code: "Tab",
  },
  { data: ["Q", "", "Й"], id: 37, code: "KeyQ" },
  { data: ["W", "", "Ц"], id: 38, code: "KeyW" },
  { data: ["E", "", "У"], id: 39, code: "KeyE" },
  { data: ["R", "", "К"], id: 40, code: "KeyR" },
  { data: ["T", "", "Е"], id: 41, code: "KeyT" },
  { data: ["Y", "", "Н"], id: 42, code: "KeyY" },
  { data: ["U", "", "Г"], id: 43, code: "KeyU" },
  { data: ["I", "", "Ш"], id: 44, code: "KeyI" },
  { data: ["O", "", "Щ"], id: 45, code: "KeyO" },
  { data: ["P", "", "З"], id: 46, code: "KeyP" },
  { data: ["{", "[", "Х"], id: 47, code: "BracketLeft" },
  { data: ["}", "]", "Ъ"], id: 48, code: "BracketRight" },
];

const btn3CapsLock = [
  { data: ["Caps", "Lock", "A"], id: 49, code: "CapsLock" },
  { data: ["A", "", "Ф"], id: 50, code: "KeyA" },
  { data: ["S", "", "Ы"], id: 51, code: "KeyS" },
  { data: ["D", "", "В"], id: 52, code: "KeyD" },
  { data: ["F", "", "А"], id: 53, code: "KeyF" },
  { data: ["G", "", "П"], id: 54, code: "KeyG" },
  { data: ["H", "", "Р"], id: 55, code: "KeyH" },
  { data: ["J", "", "О"], id: 56, code: "KeyJ" },
  { data: ["K", "", "Л"], id: 57, code: "KeyK" },
  { data: ["L", "", "Д"], id: 58, code: "KeyL" },
  { data: [":", ";", "Ж"], id: 59, code: "Semicolon" },
  { data: ['"', "'", "Э"], id: 60, code: "Quote" },
  { data: ["|", "\\", "/"], id: 61, code: "Backslash" },
];

const btn4Shift = [
  { data: ["Shift"], id: 62, code: "ShiftLeft" },
  { data: ["|", "\\", "/"], id: 63, code: "IntlBackslash" },
  { data: ["Z", "", "Я"], id: 64, code: "KeyZ" },
  { data: ["X", "", "Ч"], id: 65, code: "KeyX" },
  { data: ["C", "", "С"], id: 66, code: "KeyC" },
  { data: ["V", "", "М"], id: 67, code: "KeyV" },
  { data: ["B", "", "И"], id: 68, code: "KeyB" },
  { data: ["N", "", "Т"], id: 69, code: "KeyN" },
  { data: ["M", "", "Ь"], id: 70, code: "KeyM" },
  { data: ["<", ",", "Б"], id: 71, code: "Comma" },
  { data: [">", ".", "Ю"], id: 72, code: "Period" },
  { data: ["?", "/", ",", "."], id: 73, code: "Slash" },
  {
    data: [
      "Page",
      <TfiArrowCircleUp
        style={{
          width: "7px",
          height: "7px",
        }}
      />,
      <TfiArrowCircleUp style={styleSVGArrow} />,
    ],
    id: 74,
    code: "ArrowUp",
  },
  { data: ["Shift"], id: 75, code: "ShiftRight" },
];

const btn5Space = [
  { data: ["Ctrl"], id: 76, code: "ControlLeft" },
  { data: ["FN"], id: 77, code: "" },
  {
    data: [<TfiMicrosoftAlt style={styleSVGArrow} />],
    id: 78,
    code: "MetaLeft",
  },
  { data: ["Alt"], id: 79, code: "AltLeft" },
  { data: [""], id: 80, code: "Space" },
  { data: ["AltGr"], id: 81, code: "AltRight" },
  {
    data: [
      "Ctrl",
      "",
      <TfiAlignJustify
        fill="#62bef3"
        style={{ width: "7px", height: "10px" }}
      />,
    ],
    id: 82,
    code: "ControlRight",
  },
  {
    data: ["Home", <TfiArrowCircleLeft style={styleSVGArrow} />],
    id: 83,
    code: "ArrowLeft",
  },
  {
    data: [
      "Page",
      <TfiArrowCircleDown
        style={{
          width: "7px",
          height: "7px",
        }}
      />,
      <TfiArrowCircleDown style={styleSVGArrow} />,
    ],
    id: 84,
    code: "ArrowDown",
  },
  {
    data: ["End", <TfiArrowCircleRight style={styleSVGArrow} />],
    id: 85,
    code: "ArrowRight",
  },
];

const notesData = [
  {
    data: [
      `Я вас любил: любовь еще, быть может,`,
      `В душе моей угасла не совсем;`,
      `Но пусть она вас больше не тревожит;`,
      `Я не хочу печалить вас ничем...`,
    ],
    modificator: 1,
  },
  {
    data: [
      `Зима недаром злится,`,
      `Прошла ее пора —`,
      `Весна в окно стучится`,
      `И гонит со двора.`,
      `И все засуетилось,`,
      `Все нудит Зиму вон —`,
      `И жаворонки в небе`,
      `Уж подняли трезвон...`,
    ],
    modificator: 2,
  },
  {
    data: [
      `Послушайте!`,
      `Ведь, если звезды зажигают —
    значит — это кому-нибудь нужно?`,
      `Значит — кто-то хочет, чтобы они были?`,
      `Значит – кто-то называет эти плевочки жемчужиной?`,
    ],
    modificator: 3,
  },
  {
    data: [
      `Кто душою благороден,
    а религия своя,
    с ним у нас нет разных родин.`,
      `Люди – родина моя.`,
      `Я в тебе родился снова.
    Ты шепни, любимая,
    нашим детям в дар три слова:`,
      `Люди – родина моя...`,
    ],
    modificator: 4,
  },
];

const menuInfo = [
  "Пусть кнопки на клавиатуре",
  "Перейти на страницу с адаптивным дизайном",
  "Поменять фон  рабочего стола компьютера",
];

const symbolId = [
  { data: [], id: 1, code: "" },
  { data: [], id: 2, code: "" },
  { data: [], id: 3, code: "" },
  { data: [], id: 4, code: "" },
  { data: [], id: 5, code: "" },
  { data: [], id: 6, code: "Escape" },
  { data: [], id: 7, code: "F1" },
  { data: [], id: 8, code: "F2" },
  { data: [], id: 9, code: "F3" },
  { data: [], id: 10, code: "F4" },
  { data: [], id: 11, code: "F5" },
  { data: [], id: 13, code: "F6" },
  { data: [], id: 14, code: "F7" },
  { data: [], id: 15, code: "F8" },
  { data: [], id: 16, code: "F9" },
  { data: [], id: 17, code: "F10" },
  { data: [], id: 18, code: "F11" },
  { data: [], id: 19, code: "F12" },
  { data: [], id: 20, code: "Insert" },
  { data: [], id: 21, code: "Delete" },
  { data: ["ё", "Ё", "`", "~"], id: 22, code: "Backquote" },
  { data: ["1", "!", "1", "!"], id: 23, code: "Digit1" },
  { data: ["2", '"', "2", "@"], id: 24, code: "Digit2" },
  { data: ["3", "№", "3", "#"], id: 25, code: "Digit3" },
  { data: ["4", ";", "4", "$"], id: 26, code: "Digit4" },
  { data: ["5", "%", "5", "%"], id: 27, code: "Digit5" },
  { data: ["6", ":", "6", "^"], id: 28, code: "Digit6" },
  { data: ["7", "?", "7", "&"], id: 29, code: "Digit7" },
  { data: ["8", "*", "8", "*"], id: 30, code: "Digit8" },
  { data: ["9", "(", "9", "("], id: 31, code: "Digit9" },
  { data: ["0", ")", "0", ")"], id: 32, code: "Digit0" },
  { data: ["-", "_", "-", "_"], id: 33, code: "Minus" },
  { data: ["=", "+", "=", "+"], id: 34, code: "Equal" },
  { data: [], id: 35, code: "Backspace" },
  { data: [], id: 36, code: "Tab" },
  { data: ["й", "Й", "q", "Q"], id: 37, code: "KeyQ" },
  { data: ["ц", "Ц", "w", "W"], id: 38, code: "KeyW" },
  { data: ["у", "У", "e", "E"], id: 39, code: "KeyE" },
  { data: ["к", "К", "r", "R"], id: 40, code: "KeyR" },
  { data: ["е", "Е", "t", "T"], id: 41, code: "KeyT" },
  { data: ["н", "Н", "y", "Y"], id: 42, code: "KeyY" },
  { data: ["г", "Г", "u", "U"], id: 43, code: "KeyU" },
  { data: ["ш", "Ш", "i", "I"], id: 44, code: "KeyI" },
  { data: ["щ", "Щ", "o", "O"], id: 45, code: "KeyO" },
  { data: ["з", "З", "p", "P"], id: 46, code: "KeyP" },
  { data: ["х", "Х", "[", "{"], id: 47, code: "BracketLeft" },
  { data: ["ъ", "Ъ", "]", "}"], id: 48, code: "BracketRight" },
  { data: [], id: 49, code: "CapsLock" },
  { data: ["ф", "Ф", "a", "A"], id: 50, code: "KeyA" },
  { data: ["ы", "Ы", "s", "S"], id: 51, code: "KeyS" },
  { data: ["в", "В", "d", "D"], id: 52, code: "KeyD" },
  { data: ["а", "А", "f", "F"], id: 53, code: "KeyF" },
  { data: ["п", "П", "g", "G"], id: 54, code: "KeyG" },
  { data: ["р", "Р", "h", "H"], id: 55, code: "KeyH" },
  { data: ["о", "О", "j", "J"], id: 56, code: "KeyJ" },
  { data: ["л", "Л", "k", "K"], id: 57, code: "KeyK" },
  { data: ["д", "Д", "l", "L"], id: 58, code: "KeyL" },
  { data: ["ж", "Ж", ";", ";"], id: 59, code: "Semicolon" },
  { data: ["э", "Э", "'", '"'], id: 60, code: "Quote" },
  { data: ["\\", "/", "\\", "|"], id: 61, code: "Backslash" },
  { data: [], id: 62, code: "ShiftLeft" },
  { data: ["\\", "/", "\\", "|"], id: 63, code: "IntlBackslash" },
  { data: ["я", "Я", "z", "Z"], id: 64, code: "KeyZ" },
  { data: ["ч", "Ч", "x", "X"], id: 65, code: "KeyX" },
  { data: ["с", "С", "c", "C"], id: 66, code: "KeyC" },
  { data: ["м", "М", "v", "V"], id: 67, code: "KeyV" },
  { data: ["и", "И", "b", "B"], id: 68, code: "KeyB" },
  { data: ["т", "Т", "n", "N"], id: 69, code: "KeyN" },
  { data: ["ь", "Ь", "m", "M"], id: 70, code: "KeyM" },
  { data: ["б", "Б", ",", "<"], id: 71, code: "Comma" },
  { data: ["ю", "Ю", ".", ">"], id: 72, code: "Period" },
  { data: [".", ",", "/", "?"], id: 73, code: "Slash" },
  { data: [], id: 74, code: "ArrowUp" },
  { data: [], id: 75, code: "ShiftRight" },
  { data: [], id: 76, code: "ControlLeft" },
  { data: [], id: 77, code: "" },
  { data: [], id: 78, code: "MetaLeft" },
  { data: [], id: 79, code: "AltLeft" },
  { data: [" ", " ", " ", " "], id: 80, code: "Space" },
  { data: [], id: 81, code: "AltRight" },
  { data: [], id: 82, code: "ControlRight" },
  { data: [], id: 83, code: "ArrowLeft" },
  { data: [], id: 84, code: "ArrowDown" },
  { data: [], id: 85, code: "ArrowRight" },
  { data: [], id: 86, code: "Enter" },
];

const serviceButtonsId = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 35, 36,
  49, 62, 74, 75, 77, 76, 78, 79, 81, 82, 83, 84, 85, 86,
];

export {
  styleSVG,
  btnUpP,
  btn1F,
  btn2Number,
  btn3Tab,
  btn3CapsLock,
  btn4Shift,
  btn5Space,
  notesData,
  menuInfo,
  symbolId,
  serviceButtonsId,
};
