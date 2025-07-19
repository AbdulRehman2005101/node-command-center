# node-command-center
# Node.js CLI Practice Projects

This repository contains two simple command-line interface (CLI) projects built using Node.js. The projects demonstrate working with command-line arguments manually and with the help of the `commander` library.

## 1. Word Counter

### Manual CLI Attempt (using `process.argv`)

Initially, I tried to build a word counter CLI by manually accessing command-line arguments using `process.argv`. While this method worked for basic usage, it had some major limitations:

- Difficult to manage multiple arguments
- No built-in help or usage information
- Lack of structure for more complex command-line options

Because of these limitations, I decided to use a CLI argument parser library.

### Using Commander

To improve the functionality and user experience, I rewrote the word counter using the [`commander`](https://www.npmjs.com/package/commander) library. Commander makes it easier to:

- Parse and handle arguments and options
- Display help messages
- Create a clean structure for CLI commands

You can run the word counter using:
```bash
node word-counter.js -h
```

# CLI Todo App

This is a simple command-line Todo application built with Node.js using the `commander` library. It allows you to manage your daily tasks directly from the terminal.

## Features

- Add tasks
- Delete tasks
- Mark tasks as done
- List all tasks
- Display helpful usage information

All tasks are stored locally in a JSON file named `todos.json`.

---

## Getting Started

### Prerequisites

- Node.js installed on your machine

### Installation

1. Clone the repository or navigate to the `cliTodo` folder:
   ```bash
   git clone <repository-url>
   cd cliTodo
```
