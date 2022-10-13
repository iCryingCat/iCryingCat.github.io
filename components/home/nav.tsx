import Link from "next/link";
import Post from '../../interfaces/post';
import Container from "../main/container";
import Dropdown from "../share/dropdown";

export type Group = {
    title: string,
    indexs: Post[],
}

type Props = {
    allGroups: Group[]
}

export default function Nav({ allGroups }: Props) {
    return (
        <div className="block flex flex-row px-2 py-1 bg-gradient-to-r from-blue-400 to-white">
            <Container>
                <div className="flex flex-row">
                    <h1 className="text-white text-4xl font-bold">
                        <Link href={"/"}>
                            <a>Crying Cat</a>
                        </Link>
                    </h1>
                    <div className="flex flex-row ml-10">
                        {
                            allGroups.map(group => {
                                return <Dropdown title={group.title} indexs={group.indexs} />;
                            })
                        }
                    </div>
                </div>

            </Container>
            <div className="mr-4">
                <h1 className="p-2 text-blue-400 hover:bg-blue-400 hover:text-white">
                    <Link href={"/login"}>
                        <a>Login</a>
                    </Link>
                </h1>
            </div>
        </div>
    );
};
