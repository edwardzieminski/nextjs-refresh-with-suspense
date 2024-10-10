"use server";

import {revalidateTag} from "next/cache";
import {fetchFromServerTag} from "@/utils";

export const revalidateAll = async () => {
  console.log(`${new Date().toISOString()}: Revalidating started...`);
  revalidateTag(fetchFromServerTag);
  console.log(`${new Date().toISOString()}: Revalidating finished...`);
}