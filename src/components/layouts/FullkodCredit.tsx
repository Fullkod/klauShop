// "Desarrollado por Fullkod" (CREA0004): el mismo crédito en todas las pantallas.
export function FullkodCredit({ className = "" }: { className?: string }) {
  return (
    <a
      href="https://fullkod.com/?ref=klaushop"
      target="_blank"
      rel="noopener"
      className={`inline-flex items-center gap-1.5 text-[13px] text-neutral-500 transition-colors hover:text-neutral-700 ${className}`}
    >
      Desarrollado por
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand/fullkod-symbol.svg" alt="" className="h-3.5 w-3.5" />
      <span className="font-semibold text-neutral-700">Fullkod</span>
    </a>
  );
}
