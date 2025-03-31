
import { Meta } from "@/components/_common/Meta";
import { ToDoApp } from "@/components/_common/ToDoApp";

function TestPage() {
  return (
    <>
      <Meta
        title="testing"
        description="all my tests"
        image="/web-assets/images/start.png"
      />
      <ToDoApp />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      layoutValues: { hasHeader: false, hasFooter: false },
    },
  };
}

export default TestPage;
