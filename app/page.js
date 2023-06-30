import AuthDetails from "@/components/authDetails/authDetails";
import Header from "@/components/home/header";
import Crud from "@/components/todo/list";
export default function Home() {
  return (
    <>
      <Header />
      <Crud />
      <AuthDetails />
    </>
  );
}
