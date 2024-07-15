import {
  transformerNotationDiff,
  transformerNotationFocus,
  transformerNotationHighlight,
} from '@shikijs/transformers';
import { useTheme } from 'next-themes';
import { FC, useEffect, useState } from 'react';
import { codeToHtml } from 'shiki';

export const Code: FC<any> = (props) => {
  const [html, setHtml] = useState<any>(null);
  const { theme } = useTheme();
  const language = props?.children?.props?.className?.split('language-')?.[1] || 'ts';

  useEffect(() => {
    async function processCodeBlock() {
      try {
        Promise.resolve(
          setTimeout(async () => {
            setHtml(
              await codeToHtml(props.children.props.children, {
                lang: language,
                theme: theme === 'dark' ? 'vitesse-dark' : 'vitesse-light',
                transformers: [
                  transformerNotationDiff(),
                  transformerNotationHighlight(),
                  transformerNotationFocus(),
                ],
              })
            );
          }, 0)
        );
      } catch (error) {
        setHtml('');
      }
    }

    processCodeBlock();
  }, [theme]);

  if (!html) {
    return (
      <div className="flex flex-col gap-4 border border-border-primary-light dark:border-border-primary-dark rounded-lg p-4">
        <div className="animate-pulse h-[19px] bg-background-secondary-light dark:bg-background-secondary-dark w-4/5 rounded"></div>
        <div className="animate-pulse h-[19px] bg-background-secondary-light dark:bg-background-secondary-dark w-3/5 rounded"></div>
      </div>
    );
  }

  return <p dangerouslySetInnerHTML={{ __html: html }} className="!p-0" />;
};
