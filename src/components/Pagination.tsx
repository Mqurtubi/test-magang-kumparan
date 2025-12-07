import type { PaginationLinks } from "../types";
type PaginationType = {
  links: PaginationLinks;
  onClickPage: (page: number) => void;
  loading: boolean;
};
export default function Pagination({
  links,
  onClickPage,
  loading,
}: PaginationType) {
  const currentPage =
    links.prev == null ? links.first.page : links.prev.page + 1;

  return loading ? (
    ""
  ) : (
    <div className="flex justify-center items-center space-x-5">
      <button
        className="rounded border border-slate-200 px-5 py-1"
        onClick={() => onClickPage(links.prev!.page)}
        disabled={!links.prev}
      >
        Previous
      </button>
      <p>
        Page {currentPage} of {links.last.page}
      </p>
      <button
        className="rounded border border-slate-200 px-5 py-1"
        onClick={() => onClickPage(links.next!.page)}
        disabled={!links.next}
      >
        Next
      </button>
    </div>
  );
}
