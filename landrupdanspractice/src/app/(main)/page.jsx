import { getAllActivities } from "@/lib/server-fetch";
import NotFoundPage from "../not-found";
import ActivityCard from "./activity-card";
import Footer from "./Footer";
export default async function HomePage() {
  const activities = await getAllActivities();

  return (
    <>
      <header className="sticky top-0 left-0 w-full max-w-screen-sm bg-mehroonish text-white p-4 text-center">
        Activities
      </header>

      <main className="h-[150vh] mt-4 w-full max-w-screen-sm">
        {activities.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </main>
      <Footer />
    </>
  );
}
