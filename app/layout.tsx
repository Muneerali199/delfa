import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Delfa - Premium Logistics Solutions',
  description: 'Fast, reliable, and affordable logistics services across India. Door-to-door delivery, freight transport, and supply chain solutions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}