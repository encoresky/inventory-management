import "./globals.css";
import { lato, DMSans } from "@/font";
import { Provider } from "@/utils/next-export";
import { store } from "@/store";
import LayoutMain from "@/components/LayoutMain";

export const metadata = {
  title: "EST Device Manage",
  description: "A device management app for Encoresky.",
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${DMSans.variable} ${lato.variable} overflow-x-hidden`}
    >
      {/* className="overflow-hidden" */}
      <body className="overflow-hidden relative">
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
