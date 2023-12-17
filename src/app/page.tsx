import type { FunctionComponent } from "react";

import { headers } from "next/headers";

const Page: FunctionComponent = () => {
  const address = headers().get("x-forwarded-for");
  let city = headers().get("city") || "other";
  let country = headers().get("country") || "other";

  return (
    <main>
      <p>
        Hello, world! The reported client address is {address}.
      </p>
      <p>
        Location - {city}, {country}.
      </p>
    </main>
  );
};

export default Page;
