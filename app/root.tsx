import type { MetaFunction } from "@remix-run/cloudflare";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/react/dist/routeModules";// or cloudflare/deno
import { CSSProperties } from "react";
import Navbar from "./Components/navbar";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Ekky Mulia Lasardi | Website",
  viewport: "width=device-width,initial-scale=1",
  keywords: "Ekky Mulia Lasardi, Ekky Mulia Lasardi Website",
  description: "Ekky Mulia Lasardi Portfolio Website"
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

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="https://unpkg.com/feather-icons"></script>
      </head>
      <body style={BodyStyle}>
        <Navbar/>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
