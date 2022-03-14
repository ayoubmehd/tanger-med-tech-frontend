import { ReactElement } from "react";
import Link from "next/link";

interface PaginatePropsType<T> {
  maxPages?: number;
  paginator: Paginate<T>;
}

function gentLink(currentPage: number, maxPages: number): ReactElement[] {
  const res: ReactElement[] = [];

  for (let i = currentPage; i <= maxPages; i++) {
    res.push(
      <li>
        <a
          href={`?page=${i}`}
          className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-500 bg-white text-blueGray-500"
        >
          {i}
        </a>
      </li>
    );
  }

  return res;
}

function Pagination<T>({ maxPages = 3, paginator }: PaginatePropsType<T>) {
  return (
    <div className="py-2 flex justify-center">
      <nav className="block">
        <ul className="flex pl-0 rounded list-none flex-wrap">
          <li>
            <Link href={`?page=${paginator.prevPage}`}>
              <a
                onClick={(e) => !paginator.prevPage && e.preventDefault()}
                className={`first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-500 bg-white text-blueGray-500 ${
                  !paginator.prevPage && "opacity-80"
                }`}
              >
                &lt;
              </a>
            </Link>
          </li>
          {/* {gentLink(paginator.currentPage, maxPages)} */}
          <li>
            <Link href={`?page=${paginator.nextPage}`}>
              <a
                onClick={(e) => !paginator.nextPage && e.preventDefault()}
                className={`first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-500 bg-white text-blueGray-500 ${
                  !paginator.nextPage && "opacity-80"
                }`}
              >
                &gt;
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
