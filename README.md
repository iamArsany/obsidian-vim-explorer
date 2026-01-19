# Vim Explorer Navigation

A lightweight Obsidian plugin that brings **Vim-style navigation** (`j`, `k`, `h`, `l`) to your File Explorer sidebar. This plugin allows you to browse your vault without ever touching your mouse.

## Features

- **`j` / `k**`: Move selection down and up through your files and folders.
- **`l`**: Expand a folder or open the selected file.
- **`h`**: Collapse a folder or move focus to the parent folder.
- **Custom Focus Command**: Includes a command to jump focus directly from your editor to the file explorer.

---

## Installation (Development/Manual)

Since this plugin is in development, you can install it manually by following these steps:

### 1. Build the plugin

1. Clone this repository to your local machine.
2. Open your terminal in the project folder.
3. Install the necessary dependencies:

```bash
npm install
```

4. Compile the TypeScript code into JavaScript:

```bash
npm run build
```

### 2. Move to Obsidian

Once the build is finished, you need to move the files into your vault:

1. Navigate to your Obsidian vault folder.
2. Go to `.obsidian/plugins/`.
3. Create a new folder named `vim-explorer-nav`.
4. Copy the following **3 files** from your project into that new folder:

- `main.js`
- `manifest.json`
- `styles.css`

### 3. Enable the plugin

1. Open Obsidian.
2. Go to **Settings > Community Plugins**.
3. Click the **Refresh** icon.
4. Find **Vim Explorer Navigation** and toggle it **ON**.

---

## ️ Required Hotkey Configuration

**Important:** For the best experience, you must manually map the focus commands in Obsidian's settings. This allows you to jump between editing and navigating seamlessly.

### Set up "Jump to Explorer" (`Ctrl + H`)

1. Go to **Settings > Hotkeys**.
2. Search for: `Vim Explorer Navigation: Focus File Explorer`.
3. Assign it to **`Ctrl + H`**.

- _Note: Using this specific plugin command ensures the file list is correctly focused so that the `j/k` keys work immediately._

---

## ️ How it works

The plugin detects when the File Explorer is the "Active Leaf" in Obsidian. It intercepts the `j`, `k`, `h`, and `l` keys and translates them into standard Arrow Key events that Obsidian's native file tree understands.

> [!TIP]
> The plugin automatically disables itself if you are renaming a file or typing in an input box, so you don't accidentally navigate while trying to type.

---

### License

[MIT](https://www.google.com/search?q=LICENSE)
