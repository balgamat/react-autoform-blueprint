import { LocaleUtils } from 'react-day-picker';
import { format, parse, setDay } from 'date-fns';
import * as locales from 'date-fns/locale';

const getLocale = (locale?: string) => {
  const replaced = `${locale}`.replace('_', '-');
  // @ts-ignore
  return locales[locale] || locales[replaced.split('-')[0]] || locales['enUS'];
};

export const localeUtils: LocaleUtils = {
  formatDate: (date, formatStr, locale?) =>
    format(date, (formatStr || '').toString(), { locale: getLocale(locale) }),
  formatDay: (date, locale) => format(date, 'eeee do MMMM yyyy', { locale: getLocale(locale) }),
  formatMonthTitle: (month, locale) => format(month, 'LLLL', { locale: getLocale(locale) }),
  formatWeekdayLong: (weekday, locale?) =>
    format(setDay(new Date(), weekday), 'cccc', { locale: getLocale(locale) }),
  formatWeekdayShort: (weekday, locale?) =>
    format(setDay(new Date(), weekday), 'ccc', { locale: getLocale(locale) }),
  getFirstDayOfWeek: locale => getLocale(locale).options.weekStartsOn,
  // @ts-ignore
  getMonths: locale =>
    // @ts-ignore
    [...new Array(12)].map((_, i) =>
      format(new Date(2000, i, 1), 'LLLL', { locale: getLocale(locale) }),
    ),
  parseDate: (str, formatStr, locale) =>
    parse(str, formatStr || '', new Date(), { locale: getLocale(locale) }),
};
