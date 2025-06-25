import { ProgressBar } from "../ProgressBar/ProgressBar";

export const Layout = ({ children }) => {
  return (
    <>
      <header>
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <span className="navbar-text">Хедер</span>
          </div>
        </nav>
      </header>
      <ProgressBar />
      {children}
      <footer className="py-3 my-4">
        <p className="text-center text-body-secondary">Written by R.Kislov</p>
      </footer>
    </>
  );
};
