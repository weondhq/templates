export default function HomePage() {
  return (
    <main className="shell">
      <div className="panel">
        <p className="kicker">[ deployed on weond ]</p>
        <h1>Next.js App Starter</h1>
        <p className="desc">
          Edit <code>app/page.tsx</code> and push to GitHub to ship your changes globally.
        </p>
        <div className="row">
          <a className="btn primary" href="https://weond.com/docs" target="_blank" rel="noreferrer">
            Documentation ↗
          </a>
        </div>
      </div>
    </main>
  );
}
