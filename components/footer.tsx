const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center py-3">
      <div className="flex flex-col items-center">
        <small className="text-xs">
          &copy; 2024 - Calvin.Bochynski-Ng. All rights reserved.
        </small>
        <hr />
        <p>
          <strong>About this website: </strong>built with React & Next.js (App
          Router & Server Action), Typescript, Tailwind CSS, React Email &
          Resend.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
