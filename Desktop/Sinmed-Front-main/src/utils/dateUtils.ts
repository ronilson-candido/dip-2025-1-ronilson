export function formatDate(dateString: string): string {
  const [year, month, day] = dateString.slice(0, 10).split("-");

  return `${day}/${month}/${year}`;
}
