import Image from "next/image";
export default function ActivityCard({ activity }) {
  return (
    <article className="relative w-full h-400 mb-4">
      <Image
        src={activity.asset.url}
        width={400}
        height={400}
        alt={activity.name}
        className="rounded-lg"
      />
      <div className="absolute bottom-4 left-0 right-0 bg-pink-500 bg-opacity-50 text-white p-4 z-10 text-center rounded-b-lg">
        <h2>{activity.name}</h2>
        <p>
          {activity.minAge}-<span>{activity.maxAge} år</span>
        </p>
      </div>
    </article>
  );
}
