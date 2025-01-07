export default function ClientLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <p>client router cache</p>
      {children}
    </div>
  );
}
