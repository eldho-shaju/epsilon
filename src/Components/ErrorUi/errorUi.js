"use client";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";

const ErrorUi = (props) => {
  const { errorMsg = "Something went wrong" } = props;
  const router = useRouter();

  return (
    <section className="container mx-auto">
      <div className="flex flex-col justify-center items-center h-main">
        <Icon icon={"ooui:error"} className="text-red-600 text-6xl" />
        <h1 className="mt-4 text-xl md:text-2xl lg:text-3xl text-center">
          {errorMsg}
          <span>
            ..!!
            <span className="animate-ping">!</span>
          </span>
        </h1>
        <div className="mt-6 md:mt-8 flex gap-4">
          <button
            className="bg-zinc-950 hover:bg-zinc-700 text-white h-fit py-[5px] md:py-2 px-4 rounded"
            onClick={() => router.push("/")}
          >
            Home
          </button>
          <button
            className="bg-slate-600 hover:bg-slate-700 text-white h-fit py-[5px] md:py-2 py-2 px-4 rounded"
            onClick={() => router.back()}
          >
            Go Back
          </button>
        </div>
      </div>
    </section>
  );
};

export default ErrorUi;
