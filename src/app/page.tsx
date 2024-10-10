import styles from "./page.module.css";
import {Suspense} from "react";
import {RefreshButton} from "@/client-components";
import {AsyncJoke, SuspenseFallback} from "@/server-components";

export default async () => (
  <div className={styles.page}>
    <main className={styles.main}>
      <RefreshButton/>
      <Suspense key={Date.now().toString()} fallback={<SuspenseFallback/>}>
        <AsyncJoke/>
      </Suspense>
    </main>
  </div>
)
