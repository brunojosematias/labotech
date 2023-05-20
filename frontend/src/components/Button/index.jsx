export function Button(props) {
  return (
    <button
      type="submit"
      className="w-full text-orange text-center bg-background font-medium border-2 border-orange my-5 rounded-3xl py-3 hover:bg-orange hover:text-black transition-all"
    >
      {props.children}
    </button>
  );
}
