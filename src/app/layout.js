import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { League_Spartan } from "next/font/google";
import "./globals.css";
import Cursor from "./Cursor"; // Import the new cursor component

const inter = League_Spartan({ subsets: ["latin"] });

export const metadata = {
  title: "Malay Kumar",
  description: "Malay Kumar Behera Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={inter.className}>
        <Cursor /> {/* Add the Cursor component */}
        {children}
      </body>
    </html>
  );
}
