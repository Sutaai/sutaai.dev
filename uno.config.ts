import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetWebFonts,
} from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetWebFonts({
      fonts: {
        mono: ["JetBrains Mono"],
      },
      provider: "bunny",
    }),
  ],
  shortcuts: {
    "link": "underline hover:no-underline hover:p-2 hover:text-black hover:bg-white",
  }
});
