import type { FunctionComponent } from "react";

import type { Metadata } from "next";

const metadata: Metadata = {
  title: "Client Report",
};

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default Layout;
export { metadata };
