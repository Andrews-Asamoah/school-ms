import Header from "@/components/landingPage/header/header";
import Footer from "@/components/landingPage/footer/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div className="flex flex-1 h-full">{children}</div>
      <Footer />
    </div>
  );
}
