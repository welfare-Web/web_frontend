import Nav from "@/components/nav/page";
import Fn from "@/components/footnote/page";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      {children}
      <Fn />
    </>
  );
}
