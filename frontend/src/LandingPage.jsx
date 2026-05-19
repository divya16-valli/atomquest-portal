export default function LandingPage() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#000",
      color: "white",
      padding: "40px",
      fontFamily: "Arial"
    }}>
      
      <h1 style={{
        fontSize: "60px",
        textAlign: "center",
        color: "cyan"
      }}>
        AtomQuest Portal
      </h1>

      <p style={{
        textAlign: "center",
        fontSize: "22px",
        marginTop: "20px"
      }}>
        Goal Setting & Tracking Portal for AtomQuest Hackathon
      </p>

      <div style={{
        display: "flex",
        gap: "20px",
        marginTop: "60px",
        justifyContent: "center",
        flexWrap: "wrap"
      }}>

        <div style={{
          background: "#111",
          padding: "30px",
          borderRadius: "20px",
          width: "300px"
        }}>
          <h2>Employee Portal</h2>

          <p>Create goals and track achievements.</p>
        </div>

        <div style={{
          background: "#111",
          padding: "30px",
          borderRadius: "20px",
          width: "300px"
        }}>
          <h2>Manager Dashboard</h2>

          <p>Approve goals and review progress.</p>
        </div>

        <div style={{
          background: "#111",
          padding: "30px",
          borderRadius: "20px",
          width: "300px"
        }}>
          <h2>Admin Panel</h2>

          <p>Manage users, reports, and analytics.</p>
        </div>

      </div>

    </div>
  );
}