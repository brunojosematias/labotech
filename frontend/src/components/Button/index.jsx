export function Button({ children }) {
  return (
    <button
      type="submit"
      className="w-full text-orange text-center bg-background font-medium border-2 border-orange rounded-3xl py-3 hover:bg-orange hover:text-black transition-all"
    >
      {children}
    </button>
  );
}
