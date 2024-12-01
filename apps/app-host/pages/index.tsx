import { Button } from "@other_drew/ui";
import dynamic from "next/dynamic";
import Link from "next/link";

const DedicatedAccount = dynamic(() => import("dedicated-account/Module"), {
  ssr: true
});

export default function AppShell() {
  return (
    <div>
      <h1>App Shell</h1>
      <Button message="some_message" />
      <h2>SOME THING HERE</h2>
      <DedicatedAccount />
      <Link href="/dedicated-account">View More</Link>
    </div>
  );
}
