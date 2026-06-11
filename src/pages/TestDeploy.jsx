// TEMPORARY deploy-pipeline smoke test — safe to delete.
// Route: /test  (added in App.jsx). Remove this file + its route to clean up.
export default function TestDeploy() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 12, padding: 40, textAlign: 'center' }}>
      <h1 style={{ fontSize: 32, fontWeight: 700 }}>✅ Autodeploy works</h1>
      <p style={{ opacity: 0.7 }}>Temporary test page — deployed from GitHub → Replit.</p>
      <code>build marker: deploy-test-01</code>
    </div>
  )
}
