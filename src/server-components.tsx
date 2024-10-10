import {FC} from "react";
import {fetchFromServer} from "@/utils";
import {unstable_noStore as noStore} from 'next/cache'

export const SuspenseFallback: FC = () => {
  console.log(`${new Date().toISOString()}: Fallback rendered...`);
  return <div>🔃🔃🔃🔃🔃🔃</div>;
}

export const AsyncJoke: FC = async () => {
  noStore();
  const data = await fetchFromServer();
  return <p>{data}</p>
}