export const writingHighlights = [
  'writing-highlight-blue',
  'writing-highlight-green',
  'writing-highlight-amber',
  'writing-highlight-violet',
  'writing-highlight-rose',
];

export function getWritingHighlight(key: string) {
  const hash = Array.from(key).reduce((value, character) => {
    return (value * 31 + character.charCodeAt(0)) >>> 0;
  }, 0);

  return writingHighlights[hash % writingHighlights.length];
}
