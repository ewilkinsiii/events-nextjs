import Link from 'next/link'

import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/EventList';

const HomePage = () => {
    const featureEvents = getFeaturedEvents();

    return(
        <div>
            <h1>Home Page</h1>
            <ul>
                <li>
                    <Link href="/">Home </Link>
                </li>
                <li>
                    <Link href="/events">Events </Link>
                </li>
            </ul>
            <EventList items={featureEvents} />
        </div>
    );
}

export default HomePage;