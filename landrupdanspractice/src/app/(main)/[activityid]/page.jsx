import { getActivityDetails } from "@/lib/server-fetch";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
export default async function ActivityDetailPage({ params }) {
  const id = (await params).activityid;
  const activityDetail = await getActivityDetails(id);
  console.log("activity detail: ", activityDetail);

  const cookieStore = await cookies();
  const userId = cookieStore.get("landrup_uid").value;
  console.log(userId);
  // if(userId==activityDetail.instructorId){
  //     return <button>Redigere</button>
  // }

  return (
    <>
      <Image
        src={activityDetail.asset.url}
        width={400}
        height={400}
        alt={activityDetail.name}
      />
      <h1>{activityDetail.name}</h1>
      <p className="capitalize">
        {activityDetail.weekday}
        {activityDetail.time}
      </p>
      <p>{activityDetail.description}</p>
      {userId == activityDetail.instructorId && (
        <Link href={"/edit-activity/" + id}>Redigere Aktivitet</Link>
      )}
    </>
  );
}
