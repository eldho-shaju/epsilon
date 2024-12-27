"use client";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";

const ErrorPage = (props) => {
  const { errorMsg = "Something went wrong" } = props;
  const router = useRouter();

  return (
    <section className="container mx-auto">
      <div className="flex flex-col justify-center items-center h-main">
        <Icon icon={"ooui:error"} className="text-red-600 text-6xl" />
        <h1 className="mt-4 text-4xl">
          {errorMsg}
          <span>
            ..!!
            <span className="blinking">!</span>
          </span>
        </h1>
        <div className="mt-12 flex gap-4">
          <button
            className="bg-zinc-950 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => router.push("/")}
          >
            Home
          </button>
          <button
            className="bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => router.back()}
          >
            Go Back
          </button>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
