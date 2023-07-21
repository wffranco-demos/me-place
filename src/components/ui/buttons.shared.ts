export const sizes = {
  lg: "px-5 py-2.5",
  md: "px-4 py-2",
};

export type Size = keyof typeof sizes;

const styles = {
  light: {
    outline: "border-2 bg-transparent hover:bg-black/10 border-black text-black",
    primary: "border-2 bg-black hover:bg-gray-800 text-white border-transparent",
    inverted: "border-2 bg-gray-200 hover:bg-white text-black border-transparent",
    muted: "border-2 bg-black/10 hover:bg-black/20 text-black border-transparent",
  },
  dark: {
    outline: "dark:bg-transparent dark:hover:bg-white/10 dark:border-white dark:text-white",
    primary: "dark:bg-gray-200 dark:hover:bg-white dark:text-black",
    inverted: "dark:bg-black dark:hover:bg-gray-800 dark:text-white",
    muted: "dark:bg-white/10 dark:hover:bg-white/20 dark:text-white",
  },
};

export function getStyles(values: string|string[] = 'primary') {
  const [light, dark] = values instanceof Array ? values : values.split(/[, ]/);
  return [styles.light[light], styles.dark[dark || light]];
}

// type for size availables
export type Style = keyof typeof styles.light;
