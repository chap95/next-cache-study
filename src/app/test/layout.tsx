export default function TestLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <p className="text-[2rem] font-bold">Full Router Cache</p>

      <div>{children}</div>
    </div>
  );
}
