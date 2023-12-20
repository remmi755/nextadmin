import Link from "next/link";

const Homepage = () => {
  return (
    <div>
      <h1> Homepage</h1>
      <Link href={"/dashboard"}>
        <h2>Go to Dashboard</h2>
      </Link>
    </div>
  );
};

export default Homepage;
