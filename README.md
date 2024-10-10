## 🚀 Refresh Feature Example with `revalidateTag` and React Suspense

This example demonstrates how to implement a refresh feature using the `revalidateTag` function while keeping React
Suspense functional.

## 🔑 Key Detail

The key part of this solution involves using the `key` prop on the `Suspense` component to force a re-render. One
important point is that the suspense boundary is inside a server component, and refreshing doesn't change any search
parameters or other state that would naturally trigger a re-render.

## 🕰️ The Approach

To handle this, the current time is used as the `key`. During revalidation, the component re-renders when the key
changes. The `Suspense` key only updates when revalidation is triggered, which you can observe using React Dev Tools.

## 🔍 How It Works

If you inspect the process in React Dev Tools, you'll see how the Suspense key changes and when re-rendering happens.
This method ensures that the refresh behaves as expected without introducing unnecessary issues.