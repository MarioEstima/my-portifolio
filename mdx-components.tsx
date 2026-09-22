import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ className, ...props }) => (
      <h1
        className={`mt-10 mb-4 text-4xl font-semibold tracking-tight first:mt-0 ${className ?? ""}`}
        {...props}
      />
    ),
    h2: ({ className, ...props }) => (
      <h2
        className={`mt-10 mb-3 text-2xl font-semibold tracking-tight first:mt-0 ${className ?? ""}`}
        {...props}
      />
    ),
    h3: ({ className, ...props }) => (
      <h3
        className={`mt-8 mb-2 text-xl font-semibold tracking-tight first:mt-0 ${className ?? ""}`}
        {...props}
      />
    ),
    p: ({ className, ...props }) => (
      <p className={`mb-4 leading-relaxed opacity-80 ${className ?? ""}`} {...props} />
    ),
    ul: ({ className, ...props }) => (
      <ul
        className={`mb-4 list-disc space-y-1.5 pl-6 leading-relaxed opacity-80 ${className ?? ""}`}
        {...props}
      />
    ),
    ol: ({ className, ...props }) => (
      <ol
        className={`mb-4 list-decimal space-y-1.5 pl-6 leading-relaxed opacity-80 ${className ?? ""}`}
        {...props}
      />
    ),
    a: ({ className, ...props }) => (
      <a
        className={`underline decoration-neutral-400 underline-offset-4 hover:opacity-70 transition-opacity ${className ?? ""}`}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    ),
    blockquote: ({ className, ...props }) => (
      <blockquote
        className={`mb-4 border-l-2 border-neutral-400 pl-4 italic opacity-80 ${className ?? ""}`}
        {...props}
      />
    ),
    code: ({ className, ...props }) => {
      const isBlock = className?.includes("language-");
      if (isBlock) {
        return <code className={`block font-mono text-sm ${className ?? ""}`} {...props} />;
      }
      return (
        <code
          className="rounded-md bg-black/10 px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/10"
          {...props}
        />
      );
    },
    pre: ({ className, ...props }) => (
      <pre
        className={`mb-6 overflow-x-auto rounded-2xl bg-neutral-950 p-5 text-sm leading-relaxed text-neutral-100 ${className ?? ""}`}
        {...props}
      />
    ),
    hr: ({ className, ...props }) => <hr className={`my-8 border-current opacity-20 ${className ?? ""}`} {...props} />,
    img: ({ className, ...props }) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img className={`rounded-2xl my-6 ${className ?? ""}`} {...props} />
    ),
    ...components,
  };
}
