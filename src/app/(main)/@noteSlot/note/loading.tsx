// loading placeholder
export default function NoteLoading() {
  return (
    <div className="animate-pulse">
      <div className="h-12 rounded-md bg-slate-800 p-4" />
      <div className="my-4 min-h-[calc(100vh-14rem)] rounded-md border">
        <div className="h-14 bg-slate-800" />
      </div>
      <div className="h-12 rounded-md bg-slate-800" />
    </div>
  );
}
