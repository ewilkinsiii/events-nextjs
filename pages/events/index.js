import { useRouter } from "next/router";

const EventsPage = () => {
  const router = useRouter();

  console.log(router.query);


  return (
    <div>
      <h1>The Events Page</h1>
    </div>
  );
};

export default EventsPage;
