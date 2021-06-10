import dayjs from 'dayjs';
import { TimeUnitPluralEnum } from '../../utils';
import { TUseGenerateChartLabelsArgs } from '../types';

export const useGenerateChartLabels = ({
  start,
  end,
  multiplier,
  format,
}: TUseGenerateChartLabelsArgs) => {
  const labels: string[] = [];
  let current = start;

  while (dayjs(current).isBefore(dayjs(end))) {
    const formatted = dayjs(current)
      .tz(process.env.REACT_APP_TIMEZONE_NAME, true)
      .format(format);

    const date = dayjs(current)
      .add(multiplier, TimeUnitPluralEnum.minutes)
      .toDate();
    labels.push(formatted);
    current = date;
  }
  return labels;
};
