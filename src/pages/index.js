import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen items-center justify-center bg-[#d5e1ef]">
        <div className="bg-white flex flex-col space-y-4 items-center justify-center  px-4 pt-4 py-8 rounded-2xl ">
          <img
            className="rounded-3xl"
            src="/image-qr-code.png"
            width={400}
            height={400}
          />

          <p className="text-[#202f4e] font-bold text-center text-3xl max-w-sm">
            Improve your front-end skills by building projects
          </p>
          <p className="text-[#858995] text-center font-medium text-xl max-w-sm  ">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </>
  );
}
