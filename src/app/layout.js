import { Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/Header";

const jkt = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ["200", "400", "800"] });

export const metadata = {
  title: "Simpan Aja dulu | Heri R.",
  description: "Simpan alamat URL yang penting-penting.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
