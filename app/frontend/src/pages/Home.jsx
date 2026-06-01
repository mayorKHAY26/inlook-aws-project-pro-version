import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <main className="home">
        <h1>inlook-webmail-Komotehinse-version</h1>
        <p>A cloud-hosted webmail platform deployed with AWS, Terraform, Docker, Jenkins, ECS, ALB, Prometheus, and Grafana.</p>
      </main>
    </>
  );
}

export default Home;