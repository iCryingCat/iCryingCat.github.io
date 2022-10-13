import Link from "next/link";
import DropdownStyles from './dropdown-styles.module.css';

const Dropdown = ({ title, indexs }) => {
    return (
        <div >
            <div className={DropdownStyles['dropdown']}>
                <button className={DropdownStyles['dropbtn']}>{title}</button>
                <div className={DropdownStyles["dropdown-content"]}>
                    {
                        indexs.map((index) => {
                            return (
                                <Link as={`/posts/${index.slug}`} href={`/posts/[slug]`}>
                                    <a>{index.title}</a>
                                </Link>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Dropdown;