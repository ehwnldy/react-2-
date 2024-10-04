export default function Blog(props){
    console.log(props)
    return(
        <div>
            <p>Blog PAGE</p>
            <p>blog : {props.params.blog}</p>
            <p>blog : {props.searchParams.id}</p>
            <p>blog : {props.searchParams.name}</p>
        </div>
    )

} 

// params에는 [blog]슬러그가 들어가 있다.
