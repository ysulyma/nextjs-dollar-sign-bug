import Link from "next/link";

export default function Index() {
  return (
    <div>
      <p>
        This reproduces a bug with using <code>$</code> as a component name.
      </p>
      <ul>
        <li>
          <Link href="/server">works in server components</Link>
        </li>
        <li>
          <Link href="/client">breaks in client components</Link>
        </li>
        <li>
          <Link href="/client-rename">
            works in client components if I rename the import
          </Link>
        </li>
      </ul>
    </div>
  );
}
