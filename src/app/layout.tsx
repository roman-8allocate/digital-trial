import type { Metadata } from "next";
import { Roboto, Open_Sans, Gothic_A1 } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const roboto = Roboto({
    variable: '--font-roboto',
    subsets: ['latin'],
    weight: ['300', '400', '700', '900']
});

const openSans = Open_Sans({
    variable: '--font-open-sans',
    subsets: ['latin']
})

const gothic = Gothic_A1({
    variable: '--font-gothic',
    subsets: ['latin'],
    weight: ['400']
})

export const metadata: Metadata = {
  title: "Digital Project",
  description: "Digital project, trial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${openSans.variable} ${gothic.variable} antialiased`}
      >
        <Header />
        <div className="pt-[102px]">
            {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
