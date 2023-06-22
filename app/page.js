import Footer from "@/components/home/footer";
import Header from "@/components/home/header";
import { SessionProvider } from "next-auth/react";

export default function Home({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <SessionProvider session={session}>
        <Header />
        <div className="text-2xl bg-orange-500">welcome!</div>
        <Footer />
      </SessionProvider>
    </>
  );
}
