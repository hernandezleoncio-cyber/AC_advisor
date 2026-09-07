export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <a className="wordmark" href="#top" aria-label="AC Advisory home">
          <span className="wordmark-mono">AC</span>
          <span className="wordmark-name">Advisory</span>
        </a>
        <p>Connecting great food to the right retailers.</p>
        <p className="footer-meta">© {new Date().getFullYear()} AC Advisory. By private introduction.</p>
      </div>
    </footer>
  );
}
