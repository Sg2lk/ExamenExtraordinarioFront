/*
export default function Home() {
  return (
    <>
    Hey buenas a todos!
    </>
  );
}
*/

import { Handlers } from "$fresh/server.ts";

export const handler:Handlers = {
  GET: (req,c) => {
    return c.render();
  }
}

export default function Page(){
  return(
    <>Page</>
  )
}