import {NextResponse} from "next/server";

export const GET = async () => {
  const promise = new Promise<{ joke: string }>((resolve) => {
    setTimeout(() => {
      resolve(fetch("https://geek-jokes.sameerkumar.website/api?format=json", {cache: "no-store"})
        .then((resp) => resp.json()));
    }, 1500);
  });
  return NextResponse.json(await promise, {status: 200});
}