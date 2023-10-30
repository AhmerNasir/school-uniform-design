import Shop from "@/components/Shop";
import Head from "next/head";
import React from "react";


function ShopPage () {
return(

    <>
    <Head>
      <title>Shop</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <Shop />
    </main>
  </>
)
}

export default ShopPage;