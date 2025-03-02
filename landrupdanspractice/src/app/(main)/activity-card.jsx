import Image from "next/image";
export default function ActivityCard({activity}){
    return (
        <article className="p-4">
            <h2>{activity.name}</h2>
            <Image src={activity.asset.url} width={400} height={400} alt={activity.name}></Image>
        </article>
    );
}