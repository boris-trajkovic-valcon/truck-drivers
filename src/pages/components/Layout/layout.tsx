import Head from "next/head";
import styles from "../../../styles/Home.module.css";
import Header from "../Header/header";
import Footer from "../Footer/footer";

interface LayoutProps {
  children: React.ReactNode;
  meta: any;
}

const Layout = ({ children, meta }: LayoutProps) => {
  const { title, description, icon } = meta;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="stylesheet" href={icon || "/public/favicon.ico"} />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
