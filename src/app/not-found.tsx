import Image from "next/image"
import notFound from "../../public/not-found.svg"

export async function generateMetadata() {
	return {
		title: '404',
		description: 'ページが見つかりませんでした。',
	}
}

const NotFound = () => {
    return (
        <div className="NotFound">
            <Image src={notFound} alt="" style={{width: "300px"}}/>
            <p>ページが見つかりませんでした。</p>
        </div>
    )
}

export default NotFound