import dayjs from 'dayjs';

export const Footer = () => {
  return (
    <div>
      <p>© {dayjs().format('YYYY')} Aquib Baig</p>
    </div>
  );
};
