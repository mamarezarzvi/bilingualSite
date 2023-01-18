import Link from "next/link";

export const NavItem: React.FC<{
  name: string;
  route: string;
  isLTR?: boolean;
  className?: string;
}> = (props) => (
  <li
    key={props.name}
    className={`${
      props.isLTR ? "ml-8" : "mr-10"
    } min-w-10 text-sm font-bold text-white ${props.className}`}
  >
    <Link href={`/${props.route}`}>{props.name}</Link>
  </li>
);
