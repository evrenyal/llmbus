window.base64Encode = base64Encode;
window.textToBraille = textToBraille;
window.textToAscii = textToAscii;
window.textToHex = textToHex;
window.urlEncode = urlEncode;
window.textToBinary = textToBinary;
window.textToMorse = textToMorse;
window.rot13 = rot13;
window.reverseText = reverseText;
window.toUpperCase = toUpperCase;
window.toLowerCase = toLowerCase;
window.textToLeet = textToLeet;
window.textToNato = textToNato;
window.textToPigLatin = textToPigLatin;
window.disemvowel = disemvowel;
window.asciiArtTransform = asciiArtTransform;

window.insertZeroWidthChars = insertZeroWidthChars;
window.insertControlCharacters = insertControlCharacters;
window.wrapInRegexStyle = wrapInRegexStyle;
window.reorderSentence = reorderSentence;
window.phoneticSpell = phoneticSpell;
window.cloakText = cloakText;

// Base64 Encoding
function base64Encode(text) {
  try {
    return btoa(text);
  } catch (error) {
    console.error("Base64 Encode Error:", error);
    return "Error: Invalid Input";
  }
}

// Braille Encoding (Basic example with limited character set)
function textToBraille(text) {
  const brailleMap = {
    a: "⠁",
    b: "⠃",
    c: "⠉",
    d: "⠙",
    e: "⠑",
    f: "⠋",
    g: "⠛",
    h: "⠓",
    i: "⠊",
    j: "⠚",
    k: "⠅",
    l: "⠇",
    m: "⠍",
    n: "⠝",
    o: "⠕",
    p: "⠏",
    q: "⠟",
    r: "⠗",
    s: "⠎",
    t: "⠞",
    u: "⠥",
    v: "⠧",
    w: "⠺",
    x: "⠭",
    y: "⠽",
    z: "⠵",
    " ": " ",
  };

  return text
    .toLowerCase()
    .split("")
    .map((char) => brailleMap[char] || "?") // '?' for unsupported characters
    .join("");
}

// ASCII Encoding
function textToAscii(text) {
  return text
    .split("")
    .map((char) => char.charCodeAt(0))
    .join(" ");
}

// Hex Encoding
function textToHex(text) {
  return text
    .split("")
    .map((char) => char.charCodeAt(0).toString(16))
    .join(" ");
}

// URL Encoding
function urlEncode(text) {
  try {
    return encodeURIComponent(text);
  } catch (error) {
    console.error("URL Encode Error:", error);
    return "Error: Invalid Input";
  }
}

// Binary Encoding
function textToBinary(text) {
  return text
    .split("")
    .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
    .join(" ");
}

// Morse Code Encoding
function textToMorse(text) {
  const morseMap = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "0": "-----",
    " ": "/",
  };

  return text
    .toLowerCase()
    .split("")
    .map((char) => morseMap[char] || "?") // '?' for unsupported characters
    .join(" ");
}

// ROT13 Encoding
function rot13(text) {
  return text.replace(/[a-z]/gi, (char) =>
    String.fromCharCode(
      char.charCodeAt(0) + (char.toLowerCase() < "n" ? 13 : -13)
    )
  );
}

// Reverse Text
function reverseText(text) {
  return text.split("").reverse().join("");
}

// Uppercase Conversion
function toUpperCase(text) {
  return text.toUpperCase();
}

// Lowercase Conversion
function toLowerCase(text) {
  return text.toLowerCase();
}

// Leetspeak Conversion
function textToLeet(text) {
  const leetLetters = [
    "4", "8", "c", "d", "3", "f", "6", "h", "1", "j",
    "k", "1", "m", "n", "0", "p", "q", "r", "5", "7",
    "u", "v", "w", "x", "y", "2"
  ];
  const letters = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y", "z"
  ];
  const leetMap = Object.fromEntries(letters.map((char, i) => [char, leetLetters[i]]));

  return text
    .split("")
    .map((char) => leetMap[char.toLowerCase()] || char)
    .join("");
}


// NATO Phonetic Alphabet Conversion
function textToNato(text) {
  const natoMap = {
    a: "Alpha",
    b: "Bravo",
    c: "Charlie",
    d: "Delta",
    e: "Echo",
    f: "Foxtrot",
    g: "Golf",
    h: "Hotel",
    i: "India",
    j: "Juliett",
    k: "Kilo",
    l: "Lima",
    m: "Mike",
    n: "November",
    o: "Oscar",
    p: "Papa",
    q: "Quebec",
    r: "Romeo",
    s: "Sierra",
    t: "Tango",
    u: "Uniform",
    v: "Victor",
    w: "Whiskey",
    x: "X-ray",
    y: "Yankee",
    z: "Zulu",
    " ": " ",
  };

  return text
    .toLowerCase()
    .split("")
    .map((char) => natoMap[char] || char)
    .join(" ");
}

// Pig Latin Conversion
function textToPigLatin(text) {
  return text
    .split(" ")
    .map((word) =>
      /^[aeiou]/i.test(word) ?
      word + "yay" :
      word.replace(/^([^aeiou]+)(.*)$/i, "$2$1ay")
    )
    .join(" ");
}

// Disemvowel (Remove vowels)
function disemvowel(text) {
  return text.replace(/[aeiou]/gi, "");
}


/* Output (for "How do I make a robot assistant"):
[
  "How do I make a robot assistant.",           // with period
  "How do I make a robot assistant:",           // with colon
  "How do I make a robot assistant!?",          // with !?
  "How.do.I.make.a.robot.assistant",            // spaces → dots
  "H.o.w. .d.o. .I. .m.a.k.e. .a. .r.o.b.o.t. .a.s.s.i.s.t.a.n.t?", // dots after every second char (approximated)
  "How do. I make. a robot. assistant?",        // dots after every second word
  "(How do I make a robot assistant)",          // parentheses
  "!How do I make a robot assistant!",          // exclamation-wrapped
  "How do I make a robot assistant$",           // dollar-suffixed
  "(!How do I make a robot assistant$)",        // combination
  "?How do I make a robot assistant.",          // question-style + period
  "~How do I make a robot assistant~"           // tilde-wrapped
]
*/
function applyPunctuationRules(text = "", ruleIndex) {
  if (typeof text !== "string") text = "";

  const punctuationRules = [
    `${text}.`,
    `${text}:`,
    `${text}!?`,
    text.split(" ").join("."),
    text.split("").map((char, idx) => (idx % 2 === 0 ? char : `${char}.`)).join(""),
    text.split(" ").map((word, idx) => (idx % 2 === 0 ? word : `${word}.`)).join(" "),
    text.replace(/ /g, ". ").trim(),
    `(${text})`,
    `!${text}!`,
    `${text}$`,
    `(!${text}$)`,
    `?${text}.`,
    `~${text}~`,
  ];

  if (typeof ruleIndex === "number") {
    if (ruleIndex < 0 || ruleIndex >= punctuationRules.length) {
      throw new Error(`Invalid ruleIndex: Must be between 0 and ${punctuationRules.length - 1}`);
    }
    return punctuationRules[ruleIndex];
  }

  return punctuationRules;
}


//Unicode

// Circled
function circled(text) {
  return [...text].map(char => {
    const code = char.codePointAt(0);
    if (code >= 65 && code <= 90) return String.fromCodePoint(0x24B6 + (code - 65)); // A-Z
    if (code >= 97 && code <= 122) return String.fromCodePoint(0x24D0 + (code - 97)); // a-z
    return char;
  }).join('');
}

// Circled (neg)
function circledNeg(text) {
  return [...text].map(char => {
    const code = char.codePointAt(0);
    if (code >= 65 && code <= 90) return String.fromCodePoint(0x1F150 + (code - 65)); // 🅐-🅩 (A-Z)
    if (code >= 97 && code <= 122) return String.fromCodePoint(0x1F150 + (code - 97)); // 🅐-🅩 (a-z mapped to uppercase equivalent)
    return char;
  }).join('');
}


// Fullwidth
function fullwidth(text) {
  return [...text].map(char => {
    const code = char.codePointAt(0);
    if (code >= 33 && code <= 126) return String.fromCodePoint(0xFF01 + (code - 33));
    return char;
  }).join('');
}

// Math Bold
function mathBold(text) {
  return [...text].map(char => {
    const code = char.codePointAt(0);
    if (code >= 65 && code <= 90) return String.fromCodePoint(0x1D400 + (code - 65)); // A-Z
    if (code >= 97 && code <= 122) return String.fromCodePoint(0x1D41A + (code - 97)); // a-z
    return char;
  }).join('');
}

// Math Bold Fraktur
function mathBoldFraktur(text) {
  return [...text].map(char => {
    const code = char.codePointAt(0);
    if (code >= 65 && code <= 90) return String.fromCodePoint(0x1D56C + (code - 65)); // A-Z
    if (code >= 97 && code <= 122) return String.fromCodePoint(0x1D586 + (code - 97)); // a-z
    return char;
  }).join('');
}

// Math Bold Italic
function mathBoldItalic(text) {
  return [...text].map(char => {
    const code = char.codePointAt(0);
    if (code >= 65 && code <= 90) return String.fromCodePoint(0x1D468 + (code - 65)); // A-Z
    if (code >= 97 && code <= 122) return String.fromCodePoint(0x1D482 + (code - 97)); // a-z
    return char;
  }).join('');
}

// Math Bold Script
function mathBoldScript(text) {
  return [...text].map(char => {
    const code = char.codePointAt(0);
    if (code >= 65 && code <= 90) return String.fromCodePoint(0x1D4D0 + (code - 65)); // A-Z
    if (code >= 97 && code <= 122) return String.fromCodePoint(0x1D4EA + (code - 97)); // a-z
    return char;
  }).join('');
}

// Math Double-Struck
function mathDoubleStruck(text) {
  return [...text].map(char => {
    const code = char.codePointAt(0);
    if (code >= 65 && code <= 90) return String.fromCodePoint(0x1D538 + (code - 65)); // A-Z
    if (code >= 97 && code <= 122) return String.fromCodePoint(0x1D552 + (code - 97)); // a-z
    return char;
  }).join('');
}

// Math Monospace
function mathMonospace(text) {
  return [...text].map(char => {
    const code = char.codePointAt(0);
    if (code >= 65 && code <= 90) return String.fromCodePoint(0x1D670 + (code - 65)); // A-Z
    if (code >= 97 && code <= 122) return String.fromCodePoint(0x1D68A + (code - 97)); // a-z
    return char;
  }).join('');
}

// Math Sans
function mathSans(text) {
  return [...text].map(char => {
    const code = char.codePointAt(0);
    if (code >= 65 && code <= 90) return String.fromCodePoint(0x1D5A0 + (code - 65)); // A-Z
    if (code >= 97 && code <= 122) return String.fromCodePoint(0x1D5BA + (code - 97)); // a-z
    return char;
  }).join('');
}

// Math Sans Bold
function mathSansBold(text) {
  return [...text].map(char => {
    const code = char.codePointAt(0);
    if (code >= 65 && code <= 90) return String.fromCodePoint(0x1D5D4 + (code - 65)); // A-Z
    if (code >= 97 && code <= 122) return String.fromCodePoint(0x1D5EE + (code - 97)); // a-z
    return char;
  }).join('');
}

// Math Sans Bold Italic
function mathSansBoldItalic(text) {
  return [...text].map(char => {
    const code = char.codePointAt(0);
    if (code >= 65 && code <= 90) return String.fromCodePoint(0x1D63C + (code - 65)); // A-Z
    if (code >= 97 && code <= 122) return String.fromCodePoint(0x1D656 + (code - 97)); // a-z
    return char;
  }).join('');
}

// Parenthesized
function parenthesized(text) {
  return [...text].map(char => {
    const code = char.codePointAt(0);
    if (code >= 65 && code <= 90) return String.fromCodePoint(0x1F110 + (code - 65)); // A-Z
    return char;
  }).join('');
}

// Regional Indicator
function regionalIndicator(text) {
  return [...text].map(char => {
    const code = char.codePointAt(0);
    if (code >= 65 && code <= 90) return String.fromCodePoint(0x1F1E6 + (code - 65)); // A-Z
    if (code >= 97 && code <= 122) return String.fromCodePoint(0x1F1E6 + (code - 97)); // a-z
    return char;
  }).join('');
}

// Squared
function squared(text) {
  return [...text].map(char => {
    const code = char.codePointAt(0);
    if (code >= 65 && code <= 90) return String.fromCodePoint(0x1F130 + (code - 65)); // A-Z
    return char;
  }).join('');
}

// Squared (neg)
function squaredNeg(text) {
  return [...text].map(char => {
    const code = char.codePointAt(0);
    if (code >= 65 && code <= 90) return String.fromCodePoint(0x1F170 + (code - 65)); // A-Z
    return char;
  }).join('');
}

// Tag
function tag(text) {
  return [...text].map(char => `\uE007${char}`).join('');
}

// A-cute
function aCute(text) {
  return [...text].map(char => `${char}\u0301`).join('');
}

// CJK+Thai
function cjkThai(text) {
  const cjkThaiMap = {
    t: 'ｲ',
    e: '乇',
    s: '丂',
    T: 'ｲ',
    E: '乇',
    S: '丂'
  };
  return [...text].map(char => cjkThaiMap[char] || char).join('');
}

// Curvy 1
function curvy1(text) {
  const curvy1Map = {
    t: 'Շ',
    e: 'ﻉ',
    s: 'ร',
    T: 'Շ',
    E: 'ﻉ',
    S: 'ร'
  };
  return [...text].map(char => curvy1Map[char] || char).join('');
}

// Small Caps
function smallCaps(text) {
  const smallCapsMap = {
    a: 'ᴀ',
    b: 'ʙ',
    c: 'ᴄ',
    d: 'ᴅ',
    e: 'ᴇ',
    f: 'ꜰ',
    g: 'ɢ',
    h: 'ʜ',
    i: 'ɪ',
    j: 'ᴊ',
    k: 'ᴋ',
    l: 'ʟ',
    m: 'ᴍ',
    n: 'ɴ',
    o: 'ᴏ',
    p: 'ᴘ',
    q: 'ǫ',
    r: 'ʀ',
    s: 'ꜱ',
    t: 'ᴛ',
    u: 'ᴜ',
    v: 'ᴠ',
    w: 'ᴡ',
    x: 'x',
    y: 'ʏ',
    z: 'ᴢ'
  };
  return [...text].map(char => smallCapsMap[char.toLowerCase()] || char).join('');
}

// Faux Cyrillic
function fauxCyrillic(text) {
  const fauxCyrillicMap = {
    t: 'т',
    e: 'э',
    s: 'ѕ',
    T: 'Т',
    E: 'Э',
    S: 'Ѕ',
    a: 'а',
    o: 'о'
  };
  return [...text].map(char => fauxCyrillicMap[char] || char).join('');
}

function caesarCipher(input, shift = 3) {
  return input.replace(/[a-zA-Z]/g, (char) => {
    const base = char >= "a" ? "a".charCodeAt(0) : "A".charCodeAt(0);
    return String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26) + base);
  });
}

function atbashCipher(input) {
  return input.replace(/[a-zA-Z]/g, (char) => {
    const base = char >= "a" ? "z".charCodeAt(0) : "Z".charCodeAt(0);
    return String.fromCharCode(base - (char.charCodeAt(0) - (char >= "a" ? "a" : "A").charCodeAt(0)));
  });
}

function vowelRepetition(input, repeatCount = 3) {
  return input.replace(/[aeiou]/gi, (char) => char.repeat(repeatCount));
}

function alternatingCase(input) {
  return input
    .split("")
    .map((char, index) => (index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()))
    .join("");
}

function makePalindrome(input) {
  return input
    .split(" ")
    .map((word) => word + word.split("").reverse().join(""))
    .join(" ");
}

function interleaveDelimiter(input, delimiter = "@") {
  return input
    .split(" ")
    .map((word) => word.split("").join(delimiter))
    .join(" ");
}

function prefixRotation(input, limit = 3) {
  return input
    .split(" ")
    .map((word) => (word.length > limit ? word.slice(limit) + word.slice(0, limit) : word))
    .join(" ");
}

function spoonerism(input) {
  const words = input.split(" ");
  if (words.length < 2) return input;
  const swap = (a, b) => [b[0] + a.slice(1), a[0] + b.slice(1)];
  const [word1, word2] = swap(words[0], words[1]);
  return [word1, word2, ...words.slice(2)].join(" ");
}

function stuttering(input) {
  return input
    .split(" ")
    .map((word) => `${word.slice(0, 2)}-${word}`)
    .join(" ");
}

function pythonMarkdown(input) {
  return `\`\`\`python\n${input}\n\`\`\``;
}

function jsonEncapsulation(input) {
  return JSON.stringify({
    text: input
  }, null, 2);
}

function latexDocument(input) {
  return `\documentclass{article}\n\begin{document}\n${input}\n\end{document}`;
}

// Character scrambling
function scrambleCharacters(text) {
  return text.split(" ").map((word) => {
    if (word.length <= 3 || Math.random() > 0.6) return word;

    const middle = word.slice(1, -1).split("");
    for (let i = middle.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [middle[i], middle[j]] = [middle[j], middle[i]];
    }
    return word[0] + middle.join("") + word[word.length - 1];
  }).join(" ");
}

// Random capitalization
function randomCapitalization(text) {
  return text
    .split("")
    .map((char) => (Math.random() < 0.6 ? char.toUpperCase() : char.toLowerCase()))
    .join("");
}

// Character noising
function addCharacterNoise(text) {
  return text
    .split("")
    .map((char) => {
      if (Math.random() < 0.06 && char.charCodeAt(0) >= 32 && char.charCodeAt(0) <= 126) {
        const noise = Math.random() < 0.5 ? -1 : 1;
        return String.fromCharCode(char.charCodeAt(0) + noise);
      }
      return char;
    })
    .join("");
}

//combined

function applyZalgo(text) {
  const zalgoChars = "゙̭͔̫̜̰͉̺̗̟̃ͩ̅̈́͒ͨ̑߰҆᷁̕͘͝";
  return text.split('').map(char => char + zalgoChars[Math.floor(Math.random() * zalgoChars.length)]).join('');
}

function applyOverline(text) {
  return text.split('').map(char => char + '\u0305').join('');
}

function applyDoubleOverline(text) {
  return text.split('').map(char => char + '\u033F').join('');
}

function applyLongCenter(text) {
  return text.split('').map(char => char + '\u0336').join('');
}

function applyShortCenter(text) {
  return text.split('').map(char => char + '\u0335').join('');
}

function applyShortUnderline(text) {
  return text.split('').map(char => char + '\u0331').join('');
}

function applyUnderline(text) {
  return text.split('').map(char => char + '\u0332').join('');
}

function applyVerticalLine(text) {
  return text.split('').map(char => char + '\u20D2').join('');
}

function applyDoubleVertical(text) {
  return text.split('').map(char => char + '\u20E6').join('');
}

function applySlash(text) {
  return text.split('').map(char => char + '\u0338').join('');
}

function applyBackslash(text) {
  return text.split('').map(char => char + '\u20E5').join('');
}

function applyDoubleSlash(text) {
  return text.split('').map(char => char + '\u20EB').join('');
}

function applyDot(text) {
  return text.split('').map(char => char + '\u0307').join('');
}

function applyManyDots(text) {
  return text.split('').map(char => char + '\u20DC').join('');
}

function applyUnderDots(text) {
  return text.split('').map(char => char + '\u0323').join('');
}

function applySmileys(text) {
  return text.split('').map(char => char + '\u0308').join('');
}

function applyOverXed(text) {
  return text.split('').map(char => char + '\u033D').join('');
}

function applyUnderXed(text) {
  return text.split('').map(char => char + '\u0353').join('');
}

function applyMultiXed(text) {
  return text.split('').map(char => char + '\u033D\u0353').join('');
}

function applyStarburst(text) {
  return text.split('').map(char => char + '\u035C').join('');
}

function applyUnderstar(text) {
  return text.split('').map(char => char + '\u0359').join('');
}

function applyOverstar(text) {
  return text.split('').map(char => char + '\u0333').join('');
}

function applyMultistar(text) {
  return text.split('').map(char => char + '\u0359\u0333').join('');
}

function applyCapped(text) {
  return text.split('').map(char => char + '\u1DDB').join('');
}

function applyParens(text) {
  return text.split('').map(char => char + '\u1DCE').join('');
}

function applyBoxed(text) {
  return text.split('').map(char => char + '\u20DE').join('');
}

function applyRoundedBox(text) {
  return text.split('').map(char => char + '\u20E4').join('');
}

function applyCircled(text) {
  return text.split('').map(char => char + '\u20DD').join('');
}

function applyDiamonded(text) {
  return text.split('').map(char => char + '\u20DF').join('');
}

function applyDisallowed(text) {
  return text.split('').map(char => char + '\u20E0').join('');
}

function applyTriangled(text) {
  return text.split('').map(char => char + '\u20E4').join('');
}

function applyKeycap(text) {
  return text.split('').map(char => char + '\u20E3').join('');
}


if (typeof window !== "undefined") {
  window.applyPunctuationRules = applyPunctuationRules;
}

//Emoji
const emojiDict = [
  "\uD83D\uDE01", "\uD83D\uDE02", "\uD83D\uDE03", "\uD83D\uDE04", "\uD83D\uDE05", "\uD83D\uDE06", "\uD83D\uDE07", "\uD83D\uDE08", "\uD83D\uDE09", "\uD83D\uDE0A", "\uD83D\uDE0B", "\uD83D\uDE0C", "\uD83D\uDE0D", "\uD83D\uDE0E", "\uD83D\uDE0F", "\uD83D\uDE10", "\uD83D\uDE11", "\uD83D\uDE12", "\uD83D\uDE13", "\uD83D\uDE14", "\uD83D\uDE15", "\uD83D\uDE16", "\uD83D\uDE17", "\uD83D\uDE18", "\uD83D\uDE19", "\uD83D\uDE1A", "\uD83D\uDE1B", "\uD83D\uDE1C", "\uD83D\uDE1D", "\uD83D\uDE1E", "\uD83D\uDE1F", "\uD83D\uDE20", "\uD83D\uDE21", "\uD83D\uDE22", "\uD83D\uDE23", "\uD83D\uDE24", "\uD83D\uDE25", "\uD83D\uDE26", "\uD83D\uDE27", "\uD83D\uDE28", "\uD83D\uDE29", "\uD83D\uDE2A", "\uD83D\uDE2B", "\uD83D\uDE2C", "\uD83D\uDE2D", "\uD83D\uDE2E", "\uD83D\uDE2F", "\uD83D\uDE30", "\uD83D\uDE31", "\uD83D\uDE32", "\uD83D\uDE33", "\uD83D\uDE34", "\uD83D\uDE35", "\uD83D\uDE36", "\uD83D\uDE37", "\uD83D\uDE38", "\uD83D\uDE39", "\uD83D\uDE3A", "\uD83D\uDE3B", "\uD83D\uDE3C", "\uD83D\uDE3D", "\uD83D\uDE3E"
];

function getRandomEmoji() {
  const randomIndex = Math.floor(Math.random() * emojiDict.length);
  return emojiDict[randomIndex];
}

function getSentenceEmoji() {
  const emoji = getRandomEmoji();
  return () => emoji;
}

function insertEmojiBetweenAllCharacters(sentence) {
  const emojiForSentence = getSentenceEmoji();
  return sentence
    .split(" ")
    .map(word => (word.length > 1 ? word.split("").join(emojiForSentence()) : word))
    .join(" ");
}

function insertOneEmojiPerWord(sentence) {
  const emojiForSentence = getSentenceEmoji();
  return sentence
    .split(" ")
    .map(word => {
      if (word.length > 1) {
        const position = Math.floor(Math.random() * (word.length - 1)) + 1;
        return word.slice(0, position) + emojiForSentence() + word.slice(position);
      }
      return word;
    })
    .join(" ");
}

function replaceSpacesWithEmoji(sentence) {
  const emojiForSentence = getSentenceEmoji();
  return sentence.split(" ").join(emojiForSentence());
}

function initializeCopyEmoji() {
  const items = document.querySelectorAll('li[data-technique="copyToClipboard"]');
  items.forEach(item => {
    item.addEventListener('click', () => {
      const emoji = item.textContent.trim(); // Sadece emoji alınır
      navigator.clipboard.writeText(emoji)
        .then(() => {
          console.log(`Copied: ${emoji}`);
          alert("Copied")
        })
        .catch(err => {
          console.error('Could not copy emoji: ', err);
        });
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initializeCopyEmoji();
});

function asciiArtTransform(text) {
  return new Promise((resolve, reject) => {
    if (typeof figlet === "undefined") {
      console.error("Figlet.js is not loaded. Please include Figlet.js in your project.");
      reject("Figlet.js is not loaded.");
      return;
    }

    figlet.text(text, {
      font: "Standard"
    }, (err, transformedText) => {
      if (err) {
        console.error("ASCII Art Transformation Error:", err);
        reject("Error generating ASCII Art.");
      } else {
        resolve(transformedText);
      }
    });
  });
}

// https://paulbutler.org/2025/smuggling-arbitrary-data-through-an-emoji/
function tokenBomb(text) {
    const VARIATION_SELECTOR_START = 0xFE00;
    const VARIATION_SELECTOR_END = 0xFE0F;
    const VARIATION_SELECTOR_SUPPLEMENT_START = 0xE0100;
    const VARIATION_SELECTOR_SUPPLEMENT_END = 0xE01EF;
    
    function toVariationSelector(byte) {
        if (byte >= 0 && byte < 16) {
            return String.fromCodePoint(VARIATION_SELECTOR_START + byte);
        } else if (byte >= 16 && byte < 256) {
            return String.fromCodePoint(VARIATION_SELECTOR_SUPPLEMENT_START + (byte - 16));
        }
        return '';
    }
    
    const bytes = new TextEncoder().encode(text);
    let encoded = "😊";
    for (const byte of bytes) {
        const vs = toVariationSelector(byte);
        if (vs) encoded += vs;
    }

    if (encoded.length !== text.length + 1) {
        console.warn("Warning: Encoded message length does not match expected size.");
    }

    return encoded;
}

/***********************
* Invisible / Control Characters
***********************/


function insertZeroWidthChars(text) {
  const zwj = "\u200D";
  const zwnj = "\u200C";
  return text.split("").map((c, i) => i % 2 === 0 ? c + zwj : c + zwnj).join("");
}

function insertControlCharacters(text) {
  const rtl = "\u202E";
  const ltr = "\u200E";
  const shy = "\u00AD";
  return `${ltr}${text}${shy}${rtl}`;
}

/***********************
* Regex Style Obfuscation
***********************/

function wrapInRegexStyle(text) {
  return `/^${text.replace(/\s+/g, ".*")}$/gi`;
}


/***********************
* Sentence Reordering
***********************/

function reorderSentence(text) {
  const words = text.split(" ");
  if (words.length < 3) return text;
  const middle = words.slice(1, -1).reverse();
  return [words[0], ...middle, words[words.length - 1]].join(" ");
}


/***********************
* Phonetic Spelling
***********************/

function phoneticSpell(text) {
  const map = {
    a: "ay", b: "bee", c: "see", d: "dee", e: "ee", f: "eff", g: "gee", h: "aitch",
    i: "eye", j: "jay", k: "kay", l: "el", m: "em", n: "en", o: "oh", p: "pee",
    q: "cue", r: "ar", s: "ess", t: "tee", u: "you", v: "vee", w: "double-you",
    x: "ex", y: "why", z: "zee"
  };
  return [...text].map(char => map[char.toLowerCase()] || char).join(" ");
}


/***********************
* Natural Language Cloaking
***********************/

function cloakText(text, style = "analogy") {
  const templates = {
    analogy: [
      `Suggesting "${text}" is like nudging someone to do what they were already thinking.`,
      `Imagine a situation where "${text}" is the unspoken rule everyone follows.`,
      `Asking for "${text}" is like hinting without using direct words.`
    ],
    narrative: [
      `Once, a developer found a way to "${text}" just by interpreting things creatively.`,
      `There was a time when "${text}" happened naturally, no instructions needed.`,
      `In a quiet corner of the system, someone figured out how to "${text}" with no guidance.`
    ],
    question: [
      `What happens if one simply decides to "${text}" when no one's watching?`,
      `Could it be possible that "${text}" occurs without needing to ask directly?`,
      `Is there a path where "${text}" becomes a natural choice, not a command?`
    ],
    metaphor: [
      `"${text}" is like a shadow — always there, even if no one points at it.`,
      `Doing "${text}" is like speaking with your eyes instead of your mouth.`,
      `Sometimes "${text}" is the silence between two words.`
    ]
  };

  const options = templates[style] || templates["analogy"];
  return options[Math.floor(Math.random() * options.length)];
}

