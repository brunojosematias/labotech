export function Timer() {
  return (
    <div className="text-6xl text-[#E1E1E6] flex items-center justify-center gap-3">
      <span className="bg-[#29292E] py-3 px-4 rounded-lg h-full">0</span>
      <span className="bg-[#29292E] py-3 px-4 rounded-lg h-full">0</span>
      <div className="text-orange overflow-hidden flex justify-center text-7xl font-extrabold">
        :
      </div>
      <span className="bg-[#29292E] py-3 px-4 rounded-lg h-full">0</span>
      <span className="bg-[#29292E] py-3 px-4 rounded-lg h-full">0</span>
    </div>
  );
}
