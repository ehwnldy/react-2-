import { useRouter } from "next/router";

export default function UserRouterPage(){
    const router = useRouter()
    const {id,name,foo} = router.query
  
    console.log(foo)
    //get 방식으로 파라미터를 넘겨받음
    //해당 foo변수는 슬러그로 받음 즉 이 파일의 [foo]라는 파일명은 posts폴더로 접근했을 때 넣은 주소의 값이 곧 foo변수의 값
    //ex ~~/posts/aaaa => foo == aaa (key : value 관계) 슬러그( [] )로 만든 이름은 그 이름 자체의 의미는 없다.
    //다중슬러그) 일반파일과 슬러그가 섞인 파일 트리도 다를 것이 없다.

        // [...slug]방식처럼 슬러그에 ...을 붙인다면 url에
    // /를 기준으로 array방식으로 value가 정해진다.
    // [...slug] 방식의 대괄호가 하나인 방식은 catchAll방식은 세그먼트가 없다면 404에러 발생
    // [[...slug]] 방식은 세그먼트가 누락되어도 이런 오류가 발생하지 않는다. 

    return(  
        <div>
            <h1> foo : {foo} </h1>
            <h1> id : {id} </h1>
            <h1> name : {name} </h1>
        </div>
    )
}