# LLMBUS v1.0 🚍

<p align="right">
  <img src="llmbus1.gif" alt="LLMBUS" width="50" height="50">
</p>

**Welcome aboard the LLMBUS** — a retro-cyberpunk toolkit built for developers, security professionals, and AI researchers.  
Step into a world where **neon lights flicker** and **synth rhythms** echo from 1999…

---

## 🎒 Key Features

| Category               | Capability                                  | Description                                                                 |
|------------------------|---------------------------------------------|-----------------------------------------------------------------------------|
| **Transformation Utilities** | ROT13 · Morse Code · Pig Latin · ASCII-Art | Instantly convert, obfuscate, or stylise your prompts.                     |
| **Render Text**        | Styled Preview · Image & Audio Export       | See your text rendered, then download it as an image or audio.             |
|                        | Background & Text Color                     | Customize colors before exporting as image.                                |
|                        | Download Audio                              | Convert text to speech (TTS) and save it.                                  |
| **Tokenizer**          | Tokenizer Viewer                            | View token boundaries for popular LLMs.                                    |
| **Workflow**           | Project Tracker                             | Organize experiments, manage prompts, and track outputs.                   |
| **Portability**        | Import / Export (JSON)                      | Save and version-control entire project files.                             |
| **Search**             | In-App Search                               | Quickly find any prompt or note.                                           |
| **Paraphrase**         | Text Rewriter                               | Rewrite text with new words, same meaning. Uses `phi-4:latest` by default. |

> 💡 *The default Ollama model is phi4:latest, but you can replace it with any model name you prefer.*

---

## 🖼️ Screenshot

![LLMBUS user-interface]([https://github.com/user-attachments/assets/b9ad1547-88b3-492e-9d54-84d14dbf4a49](https://github.com/evrenyal/llmbus/blob/main/llmbus.jpg?raw=true))

---

## 🛠️ Installation

1. **Install the LLMBUS Chrome Extension** (required).

2. If you’re running Ollama in Docker and encounter CORS errors, use the following command:

```bash
sudo docker run -d --gpus all \
  -v ollama:/root/.ollama \
  -p 11434:11434 \
  -e OLLAMA_HOST=0.0.0.0 \
  -e OLLAMA_ORIGINS="*" \
  --name ollama1337 ollama/ollama
```
## 🕹️ Acknowledgments

Big thanks to these amazing resources that inspired parts of **LLMBUS**:

- [OWASP AI Testing Guide](https://github.com/OWASP/www-project-ai-testing-guide/blob/main/Document/README.md)  
  *An evolving reference on testing AI systems for security and robustness.*

- [Garak (NVIDIA)](https://github.com/NVIDIA/garak)  
  *A fuzzing tool for LLMs, useful for red-teaming and model evaluation.*

- [Deck of Many Prompts](https://deckofmanyprompts.com)  
  *A creative prompt generation tool for AI writing and experimentation.*

- [Parseltongue](https://github.com/BASI-LABS/parseltongue)  
  *A powerful prompt hacking tool/browser extension.*

- [ArXiv: 2411.01084](https://arxiv.org/pdf/2411.01084)  
  *Plentiful Jailbreaks with String Compositions*

- [ArXiv: 2412.03556](https://arxiv.org/pdf/2412.03556)  
  *BEST-OF-N JAILBREAKING*

---

## 🕹️ **Important Note**

**This tool is strictly intended for ethical and research purposes only.**  
Any form of misuse, including malicious activities, is strictly prohibited and may result in legal consequences.  
Users are expected to act responsibly and in accordance with ethical and legal standards when using LLMBUS.
