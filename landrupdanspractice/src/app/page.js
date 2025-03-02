import { Roboto, Racing_Sans_One } from "next/font/google";
import HomePage from "./(main)/page";
const robotoFont = Roboto({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const racingSansOneFont = Racing_Sans_One({
  subsets: ["latin"],
  weight: "400",
});
export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}
// {
//   <main className="flex flex-col space-y-8 items-center justify-center">
//         <div>
//           <p className="font-ubuntu font-[400]">Ubuntu400</p>
//           <p className="font-ubuntu font-[700]">Ubuntu700</p>
//         </div>
//         <div className="md:bg-red-500">
//           <p className={`${robotoFont.className} font-[100]`}>Roboto100</p>
//           <p
//             className={`${robotoFont.className} font-[200] bg-blackish text-white`}
//           >
//             Roboto200
//           </p>
//           <p className={`${robotoFont.className} font-[300]`}>Roboto300</p>
//           <p className={`${robotoFont.className} font-[400]`}>Roboto400</p>
//         </div>
//         <div>
//           <p className={`${racingSansOneFont.className} font-[400]`}>
//             Racing400
//           </p>
//         </div>
//         <div className="w-full h-1 bg-red-500 m-2"></div>
//       </main>
//       <footer className="flex flex-row space-x-6 items-center justify-center bg-pinkish">
//         <div>
//           <p className="font-ubuntu font-[400]">Ubuntu400</p>
//           <p className="font-ubuntu font-[700]">Ubuntu700</p>
//         </div>
//         <div>
//           <p className={`${robotoFont.className} font-[100]`}>Roboto100</p>
//           <p className={`${robotoFont.className} font-[200]`}>Roboto200</p>
//           <p className={`${robotoFont.className} font-[300]`}>Roboto300</p>
//           <p className={`${robotoFont.className} font-[400]`}>Roboto400</p>
//         </div>
//         <div>
//           <p className={`${racingSansOneFont.className} font-[400]`}>
//             Racing400
//           </p>
//         </div>
//       </footer> 
// }
