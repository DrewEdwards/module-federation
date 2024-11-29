import dynamic from "next/dynamic";

const DedicatedAccount = dynamic(() => import("dedicated-account/Module"), {
  ssr: true
})
export default function Web() {
  return (
    <div>
      <h1>App Shell</h1>
      <h2>SOME THING HERE</h2>
      <DedicatedAccount />
    </div>
  );
}
