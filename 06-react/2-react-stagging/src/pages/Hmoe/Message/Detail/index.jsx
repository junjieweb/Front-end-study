import {useParams} from "react-router-dom";

const mockData = [
    {id: '001', content: 'hello'},
    {id: '002', content: 'tom'},
    {id: '003', content: 'world'},
]

function Detail() {
    //获取传递过来的params参数
    let params = useParams();
    const result = mockData.find(detailObj => detailObj.id === params.id)

    return (
        <ul>
            <li>ID:{params.id}</li>
            <li>TITLE:{params.title}</li>
            <li>CONTENT:{result.content}</li>
        </ul>
    );

}

export default Detail;