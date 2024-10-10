export const fetchFromServerTag = "randomStrings123";

export const fetchFromServer = async (): Promise<string> =>
  await fetch("http://localhost:3000/api", {
    cache: "force-cache",
    next: {
      tags: [fetchFromServerTag]
    }
  })
    .then((resp) => resp.json())
    .then((data) => data.joke);