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
    }),
  ],
});
