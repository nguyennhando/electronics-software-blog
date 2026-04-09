import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h2: (props) => <h2 {...props} />,
  h3: (props) => <h3 {...props} />,
  h4: (props) => <h4 {...props} />,
  a: (props) => (
    <a
      {...props}
      className="text-[var(--accent-strong)] underline decoration-[var(--accent)] underline-offset-4"
    />
  ),
  pre: (props) => <pre {...props} />,
  code: (props) => <code {...props} />,
  table: (props) => <table {...props} />,
};
