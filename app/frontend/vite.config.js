import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react],
  server: {
    host: "0.0.0.0",
    port: 3000,
    allowedHosts: [
      "inlook-webmail-komot-dev-alb-2013284388.us-east-1.elb.amazonaws.com"
    ]
  }
});