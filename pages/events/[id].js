import { useRouter } from "next/router";
const EventDetailPage = () => {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>The selected event! </h1>
    </div>
  );
};

export default EventDetailPage;
