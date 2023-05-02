import moment from 'moment-timezone'

export const formatToDateTimeLocal = 'YYYY-MM-DDTHH:mm'
export const formatDateTime = 'YYYY-MM-DD hh:mm:ss'

/**
 *
 * @param date string
 * @param timeZone string
 * This function formats the give datetime in given timezone
 */
export const formatDateToTimeZone = (date: string, timeZone: string) => {
  return moment.tz(date, 'utc').tz(timeZone).format(formatToDateTimeLocal)
}

/**
 *
 * @param date string
 * @param userCurrentTimeZone string
 * @param format string
 * This function formats local datetime into utc
 */
export const formatCurrentDateTimeToUTC = (
  date: string,
  userCurrentTimeZone: string,
) => {
  return moment.tz(date, userCurrentTimeZone).utc().format(formatDateTime)
}
