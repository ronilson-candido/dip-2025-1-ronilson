import { Metadata } from "next";
import MarketingClient from "./MarketingClient";

export const metadata: Metadata = {
  title: "Área do Marketing",
  description: "Área do Marketing do Sinmed",
};

export default function Marketing() {
  return <MarketingClient />;
}
