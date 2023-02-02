import {
    LivepeerConfig,
    createReactClient,
    studioProvider,
  } from '@livepeer/react';

  export const livepeerClient = createReactClient({
    provider: studioProvider({
      apiKey: "72c55e93-987d-4acd-b4d0-d3fe18c92b7d",
    }),
  });