export default function SkeletonPostCard() {
  return (
    <div className="shadow-sm/20 px-6 py-5 space-y-5 rounded-xl ">
      <div className="h-2 w-1/2 bg-slate-300"></div>
      <div className="space-y-2">
        <div className="h-2 w-ful bg-slate-300"></div>
        <div className="h-2 w-ful bg-slate-300"></div>
        <div className="h-2 w-ful bg-slate-300"></div>
      </div>
      <div className="h-2 w-1/2 bg-slate-300"></div>
    </div>
  );
}
