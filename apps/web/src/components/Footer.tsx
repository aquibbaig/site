import { emailLink, linkedInLink } from '@/constants';

export const Footer = () => {
  return (
    <footer>
      <nav aria-label="Contact links">
        <ul className="flex flex-wrap gap-4">
          <li>
            <a className="external-link" href={emailLink}>
              Email
            </a>
          </li>
          <li>
            <a className="external-link" href={linkedInLink} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
