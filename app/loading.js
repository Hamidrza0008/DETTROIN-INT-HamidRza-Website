export default function Loading() {
  return (
    <div className="fixed inset-0 z-100 flex flex-col items-center justify-center gap-4 bg-background">
      <div className="relative flex h-14 w-14 items-center justify-center">
        <span className="absolute inset-0 animate-spin rounded-full border-2 border-primary/10 border-t-accent" />
        <span className="h-2 w-2 rounded-full bg-accent" />
      </div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/50">
        Krishna International School
      </p>
    </div>
  );
}
