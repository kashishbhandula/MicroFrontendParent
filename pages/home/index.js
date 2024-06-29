import dynamic from "next/dynamic";
import { revalidate } from "@module-federation/nextjs-mf/utils";

const RemoteComponent = dynamic(() => import("remoteApp/pages/home"), {
  ssr: true,
  loading: () => <p>loading...</p>,
});

export default function HomePage() {
  return (
    <div suppressHydrationWarning={true}>
      This is host home page
      <br>s ds kk</br>
      <RemoteComponent />
    </div>
  );
}
export async function getServerSideProps() {
  await revalidate();
  return {
    props: { val: "Remote Server Side Loaded hurr9999r" },
  };
}
