import { useRouter } from "next/router";
// Catch all route

const FilteredEventPage = () => {
    const router = useRouter();

    console.log(router.query)

    return (
        <div>
            <h1>The Filtered Event</h1>
        </div>
    );
}

export default FilteredEventPage;