import * as Dialog from '@radix-ui/react-dialog';
import {
  transformerNotationDiff,
  transformerNotationFocus,
  transformerNotationHighlight,
} from '@shikijs/transformers';
import { Maximize2, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import { type FC, useEffect, useRef, useState } from 'react';
import { codeToHtml } from 'shiki';

export const Code: FC<any> = (props) => {
  const [html, setHtml] = useState<any>(null);
  const { theme, systemTheme } = useTheme();
  const language = props?.children?.props?.className?.split('language-')?.[1] || 'ts';
  const code = String(props.children.props.children);
  const diagramId = useRef(`mermaid-${Math.random().toString(36).slice(2)}`);
  const renderCount = useRef(0);

  const isDark = theme === 'dark' || (theme === 'system' && systemTheme === 'dark');
  const isLargeMermaid =
    language === 'mermaid' &&
    (code.includes('flowchart TD') ||
      code
        .split('\n')
        .filter((line) => line.trim().length > 0).length > 16);

  useEffect(() => {
    let cancelled = false;

    const timer = window.setTimeout(() => {
      void (async () => {
        try {
          if (language === 'mermaid') {
            const { default: mermaid } = await import('mermaid');
            const renderId = `${diagramId.current}-${++renderCount.current}-${
              isDark ? 'dark' : 'light'
            }`;

            mermaid.initialize({
              startOnLoad: false,
              securityLevel: 'strict',
              theme: isDark ? 'dark' : 'default',
            });

            const { svg } = await mermaid.render(renderId, code);

            if (!cancelled) {
              setHtml(svg);
            }

            return;
          }

          const highlightedCode = await codeToHtml(code, {
            lang: language,
            theme: isDark ? 'dark-plus' : 'light-plus',
            transformers: [
              transformerNotationDiff(),
              transformerNotationHighlight(),
              transformerNotationFocus(),
            ],
          });

          if (!cancelled) {
            setHtml(highlightedCode);
          }
        } catch (error) {
          if (!cancelled) {
            setHtml((currentHtml: any) => currentHtml || '');
          }
        }
      })();
    }, 0);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [theme, isDark, code, language]);

  if (!html) {
    return (
      <div className="flex flex-col gap-4 border border-border rounded-lg p-4">
        <div className="animate-pulse h-[19px] bg-card w-4/5 rounded"></div>
        <div className="animate-pulse h-[19px] bg-card w-3/5 rounded"></div>
      </div>
    );
  }

  if (language === 'mermaid') {
    return (
      <Dialog.Root>
        <div
          className={
            isLargeMermaid
              ? 'relative h-[400px] w-full overflow-auto rounded-md border border-border p-4 [&_p]:m-0 [&_svg]:mx-auto'
              : 'relative w-full overflow-auto rounded-md border border-border p-4 [&_p]:m-0 [&_svg]:mx-auto [&_svg]:max-w-full'
          }
        >
          <Dialog.Trigger asChild>
            <button
              type="button"
              aria-label="Maximize diagram"
              className="absolute right-3 top-3 z-10 rounded-md border border-border bg-background/90 p-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Maximize2 size={16} />
            </button>
          </Dialog.Trigger>
          <p dangerouslySetInnerHTML={{ __html: html }} className="!p-0" />
        </div>

        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-50 flex h-[min(88vh,900px)] w-[min(92vw,1100px)] -translate-x-1/2 -translate-y-1/2 flex-col gap-4 rounded-md border border-border bg-background p-4 shadow-lg data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 md:p-6">
            <div className="flex items-center justify-between gap-4">
              <Dialog.Title className="text-sm font-medium">Architecture diagram</Dialog.Title>
              <Dialog.Close asChild>
                <button
                  type="button"
                  aria-label="Close diagram"
                  className="rounded-md bg-background p-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <X size={18} />
                </button>
              </Dialog.Close>
            </div>
            <div className="min-h-0 flex-1 overflow-hidden rounded-md border-t border-border bg-background p-6 [&_p]:flex [&_p]:h-full [&_p]:items-center [&_p]:justify-center [&_p]:m-0 [&_svg]:h-[90%] [&_svg]:max-h-[90%] [&_svg]:max-w-[90%] [&_svg]:w-auto">
              <p dangerouslySetInnerHTML={{ __html: html }} className="!p-0" />
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    );
  }

  return (
    <div>
      <p dangerouslySetInnerHTML={{ __html: html }} className="!p-0" />
    </div>
  );
};
