import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

export enum DateFormatEnum {
  DATE_FORMAT_MDY = 'MMM D, YYYY',
  DATE_FORMAT_DMY = 'DD/MM/YYYY',
  DATE_FORMAT_MONTH_AND_YEAR = 'MMM, YYYY',
  DATE_FORMAT_FULL_YEAR = 'YYYY',
  DATE_FORMAT_INCLUDING_TIME = `MMM D, YYYY hh:mm a`,
}
