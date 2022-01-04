import { useEffect, useMemo, useState } from "react";
import Container from "../Container/Container";
import Table from "../Table/Table";


function PostsPage() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => setData(json))
    }, [])

    const columns = useMemo(
        () => [
            {
                Header: 'ID',
                accessor: 'id',
            },
            {
                Header: 'User ID',
                accessor: 'userId',
            },
            {
                Header: 'Title',
                accessor: 'title',
            },
            {
                Header: 'Body',
                accessor: 'body',
            }
        ],
        []
    )

    return (
        <div>
            <Container>
                <div className="mb-4">
                  <span className="text-4xl text-gray-700">Posts</span>
                </div>
                <Table columns={columns} data={data} />
            </Container>
        </div>
    )
}

export default PostsPage;