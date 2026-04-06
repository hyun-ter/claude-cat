import '../styles/layout.css';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header className="header">
        <h1>🐱 고양이 댄스 파티</h1>
        <p>고양이와 함께 춤을 춰요!</p>
      </header>
      <main className="main">{children}</main>
      <footer className="footer">
        <p>Made with ❤️ and lots of cat energy</p>
      </footer>
    </div>
  );
}
