export const usePath = () => useState<string>('path', () => '#home');
export const useDarkMode = () => useState<boolean>('darkMode', () => false);