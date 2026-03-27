export function getVisiblePages(currentPage: number, totalPages: number) {
  return [currentPage - 1, currentPage, currentPage + 1].filter(
    (page) => page >= 1 && page <= totalPages,
  )
}
