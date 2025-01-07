import Link from "next/link";
import SomeComponent from "./SomeComponent";

const TestPage = async () => {
  return (
    <div>
      <h2>Data Cache</h2>
      <SomeComponent />
      <Link href="/test/client">client</Link>
    </div>
  );
};

export default TestPage;
