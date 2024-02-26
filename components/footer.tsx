import { Link } from "@nextui-org/link";

const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center py-3">
      <div className="flex flex-col items-center">
        <small className="text-xs">
          &copy; 2024 - Calvin.Bochynski-Ng. All rights reserved.
        </small>
        <hr />
        <p className="text-center text-sm p-4 lg:max-w-3xl">
          <span className="font-bold">About this website:</span> built with{" "}
          <Link isExternal href="https://react.dev/" className="footer--link">
            React
          </Link>{" "}
          &{" "}
          <Link isExternal href="https://nextjs.org/" className="footer--link">
            Next.js
          </Link>{" "}
          (App Router & Server Action),{" "}
          <Link
            isExternal
            href="https://www.typescriptlang.org/"
            className="footer--link"
          >
            Typescript
          </Link>
          ,{" "}
          <Link
            isExternal
            href="https://tailwindcss.com/"
            className="footer--link"
          >
            Tailwind CSS
          </Link>
          ,{" "}
          <Link isExternal href="https://nextui.org/" className="footer--link">
            NextUI
          </Link>
          ,{" "}
          <Link
            isExternal
            href="https://particles.js.org/"
            className="footer--link"
          >
            tsparticles
          </Link>
          ,{" "}
          <Link isExternal href="https://react.email/" className="footer--link">
            React Email
          </Link>{" "}
          &{" "}
          <Link isExternal href="https://resend.com/" className="footer--link">
            Resend
          </Link>
          , deployed on{" "}
          <Link
            isExternal
            href="https://app.netlify.com/"
            className="footer--link"
          >
            Netlify
          </Link>
          .
        </p>
      </div>
    </footer>
  );
};
export default Footer;
