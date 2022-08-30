import {useLocation,} from "react-router-dom";

const mockData = [
    {id: '001', content: 'hello'},
    {id: '002', content: 'tom'},
    {id: '003', content: 'world'},
]

function Detail() {
    // 获取传递过来的params参数
    // const {id, title} = useParams();
    // const result = mockData.find(detailObj => detailObj.id === id)

    // 获取传递过来的search参数
    // const [search] = useSearchParams()
    // const id = search.getAll('id')[0]
    // const title = search.getAll('title')[0]
    // const result = mockData.find(detailObj => detailObj.id === id)

    // 获取传递过来的state参数
    const {state} = useLocation()
    const {id, title} = state
    const result = mockData.find(detailObj => detailObj.id === id)

    return (
        <ul>
            <li>ID:{id}</li>
            <li>TITLE:{title}</li>
            <li>CONTENT:{result.content}</li>
        </ul>
    );

}

export default Detail;
