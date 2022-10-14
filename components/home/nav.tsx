import Link from "next/link";
import Post from '../../interfaces/post';
import Container from "../main/container";
import Dropdown from "../share/dropdown";

export type Group = {
    title: string,
    indexs: Post[],
}

type Props = {
    allIndex: Group[]
}

export default function Nav({ allIndex }: Props) {
    return (
        <div className="block flex flex-row px-2 pt-5 bg-gradient-to-r from-blue-400 to-green-400">
            <Container>
                <div className="flex flex-row">
                    <h1 className="text-white text-4xl font-bold">
                        <Link href={"/"}>
                            <a>Crying Cat</a>
                        </Link>
                    </h1>
                    <div className="flex flex-row ml-10">
                        {
                            allIndex.map(group => {
                                return <Dropdown title={group.title} indexs={group.indexs} />;
                            })
                        }
                    </div>
                </div>

            </Container>
            <div>
                <h1 className="mr-4 py-2 px-4 text-white font-bold hover:bg-blue-400 hover:text-white">
                    <Link href={"/login"}>
                        <a>Login</a>
                    </Link>
                </h1>
            </div>
        </div>
    );
};
