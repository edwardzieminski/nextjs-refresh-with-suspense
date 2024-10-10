"use client";

import {revalidateAll} from "@/actions";
import {useCallback} from "react";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

export const RefreshButton = ({queryParam}: { queryParam?: string }) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )
  const onClick = async () => {
    queryParam && router.push(`${pathname}?${createQueryString(queryParam, Date.now().toString())}`)
    await revalidateAll()
  }

  return <button onClick={onClick}>Refresh!</button>;
}
