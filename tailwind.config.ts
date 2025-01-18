import type { Config } from "tailwindcss";
import aspectRatio from "@tailwindcss/aspect-ratio";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
