import Layout from "./components/Layout/layout";
import Header from "next/dist/lib/load-custom-routes";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";


export default function Home() {
  return (
    <Layout meta={{
      title: "Home | TruckDriver",
      description: "TruckDrivers website"
    }}>

    </Layout>
  );
}
