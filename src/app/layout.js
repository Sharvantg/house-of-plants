export const metadata = {
  title: "House of Plants",
  description: "Built by Sharvan TG",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
