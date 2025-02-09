import PageLayout from "@/pages/PageLayout";
import "../styles/global.css";

export const metadata = {
  title: "Epsilon Metal Furnishing",
  description:
    "Epsilon Metal Furnishing is a one-stop solution for all your metal furniture needs. From sleek and modern designs to industrial and rustic styles, we offer a wide range of options to complement any interior aesthetic.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/images/logo.svg" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body className="scrollbar overflow-x-hidden box-border">
        <div id="root" className="flex flex-col min-h-screen">
          <PageLayout>{children}</PageLayout>
        </div>
      </body>
    </html>
  );
}
