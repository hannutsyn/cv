export function timePassedFrom(date: Date): { years: number; months: number } {
  const msInDay = 1000 * 60 * 60 * 24
  const currentDate = new Date()
  const timePassed = currentDate.getTime() - date.getTime()
  const years = Math.floor(timePassed / (msInDay * 365))
  const months = Math.floor((timePassed / (msInDay * 30)) % 12)
  return { years, months }
}

export * from './config'
