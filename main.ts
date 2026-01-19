import { Plugin, ItemView } from "obsidian";

export default class VimExplorerPlugin extends Plugin {
  async onload() {
    console.log("Vim Explorer Plugin: Logic Updated 1");

    this.registerDomEvent(document, "keydown", (evt: KeyboardEvent) => {
      // 1. Get the current active leaf (the pane you are actually looking at/clicked on)
      const activeLeaf = this.app.workspace.activeLeaf;

      if (!activeLeaf) return;

      // 2. Check if that leaf is the File Explorer
      const isExplorerActive =
        activeLeaf.view.getViewType() === "file-explorer";

      // 3. Safety check: ignore if you are typing in an input (like the search bar or renaming a file)
      const isTyping = ["INPUT", "TEXTAREA"].includes(
        (evt.target as HTMLElement).tagName,
      );

      if (isExplorerActive && !isTyping) {
        const keyMap: { [key: string]: string } = {
          j: "ArrowDown",
          k: "ArrowUp",
          h: "ArrowLeft",
          l: "ArrowRight",
        };

        const mappedKey = keyMap[evt.key];

        if (mappedKey && !evt.ctrlKey && !evt.altKey && !evt.metaKey) {
          console.log(`Vim Nav: ${evt.key} -> ${mappedKey}`);

          evt.preventDefault();
          evt.stopPropagation();

          // We dispatch the key to the container of the explorer
          const targetEl = activeLeaf.view.containerEl;
          targetEl.dispatchEvent(
            new KeyboardEvent("keydown", {
              key: mappedKey,
              code: mappedKey,
              bubbles: true,
              cancelable: true,
            }),
          );
        }
      }
    });

    // 4. Custom Command to properly focus the explorer
    this.addCommand({
      id: "focus-vim-explorer",
      name: "Focus File Explorer",
      callback: () => {
        const explorerLeaf =
          this.app.workspace.getLeavesOfType("file-explorer")[0];
        if (explorerLeaf) {
          this.app.workspace.setActiveLeaf(explorerLeaf, { focus: true });
          console.log("Explorer leaf activated and focused");
        }
      },
    });
  }
}
