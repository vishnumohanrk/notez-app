export function Footer({ children }: { children: React.ReactNode }) {
  return (
    <div className="sticky bottom-0 flex justify-end py-4">{children}</div>
  );
}
