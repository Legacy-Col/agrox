import { navlinks } from "@/constants/constants";
import { BellAlertIcon, ChatBubbleLeftRightIcon, UserCircleIcon } from "@heroicons/react/16/solid";
import Link from "next/link";


export default function NavBar() {
    return (
        <section className=" bg-neutral-700 text-white shadow-lg shadow-gray-100">
            <div className="conatiner mx-auto flex justify-around items-center py-4 px-6">
                <div className="text-3xl font-serif">AGROX</div>
                <nav className="hidden md:flex space-x-6">
                    {navlinks.map((nav, index) => (
                        <Link
                            href={nav.path}
                            key={index}
                            className="hover:text-green-500 hover:border-b-2"
                        >
                            {nav.name}
                        </Link>
                    ))}
                </nav>
                <div className="gap-6 hidden md:flex">
                    <BellAlertIcon
                        height={20}
                        width={20} />
                    <ChatBubbleLeftRightIcon
                        height={20}
                        width={20} />
                    <UserCircleIcon
                        height={20}
                        width={20} />
                </div>
            </div>
        </section>
    )
}