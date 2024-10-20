import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetWebFonts,
} from "unocss";

import type { AttributifyAttributes } from '@unocss/preset-attributify'

declare global {
  namespace astroHTML.JSX {
    interface HTMLAttributes extends AttributifyAttributes { }
  }
}

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
