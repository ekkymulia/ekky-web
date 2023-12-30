import type { MetaFunction } from "@remix-run/cloudflare";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/react/dist/routeModules";// or cloudflare/deno
import { CSSProperties } from "react";
import Navbar from "./Components/navbar";
import FootNote from "./Components/foot-note";
import { PAGE_META } from "./Components/navbar";


// export const handle = {
//   pageMeta: {PAGE_META.INDEX},
// };

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Ekky Mulia Lasardi | Website",
  viewport: "width=device-width,initial-scale=1",
  keywords: "Ekky Mulia Lasardi, Ekky Mulia Lasardi Website, Ekky, Ekky Mulia, ekky, ekky mulia, ekky mulia lasardi, kymulia, Kymulia, kymulia.me, kymulia.com",
  description: "Ekky Mulia Lasardi Portfolio Website, Previously known as Kymulia.me but now changed to kymulia.com",
  og:{
    title: "Ekky Mulia Lasardi | Website",
    type: "portfolio",
    url: "kymulia.com"
  }
});

export const links: LinksFunction = () => {
  return [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap",
    },
    {
      rel: "icon",
      href: "/asset/icons/logo2.svg",
      type: 'image/svg'
    },
  ];
};

const BodyStyle: CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: '500'
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <html>
      <head>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <h1>
          Sorry, {caught.status} {caught.statusText}
        </h1><br />
        <h2>If it occurs when you want to see my portfolio. please check the url, it should be: https://kymulia.com/project/"projectname"</h2>
        <a href='/'>◀ Back to Home</a>
        <Scripts />
      </body>
    </html>

  );
}


export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="https://unpkg.com/feather-icons"></script>
        <script>: {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-53CH23T');`}</script>

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LDJ21NSFEC"></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-LDJ21NSFEC');`}
        </script>
    </head>
    <body style={BodyStyle}>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-53CH23T"
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
        <Navbar />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <FootNote />
    </body>
      
    </html>
  );
}


