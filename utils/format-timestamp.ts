export function formatTimestamp(timestamp: number): string {
  const date = new Date(timestamp * 1000);
  const formatter = new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZone: 'UTC',
    timeZoneName: 'short'
  });

  return formatter.format(date);
}
