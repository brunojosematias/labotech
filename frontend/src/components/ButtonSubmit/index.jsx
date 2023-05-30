export function ButtonSubmit({ children }) {
  return (
    <button
      type="submit"
      className="w-28 text-orange text-center bg-background font-medium border-2 border-orange rounded-xl py-2 hover:bg-orange hover:text-black transition-all"
    >
      {children}
    </button>
  );
}
