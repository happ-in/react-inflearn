/** step1. react로만 화면만들기 */
function LikeButton() {
    const [liked, setLiked] = React.useState(false); // useState 컴포넌트 상태값 추가할 때 사용 
    const text = liked ? '좋아요 취소' : '좋아요';

    // createElement 리액트 요소(리액트 ui에서 나타내는 제일 작은 단위)를 반환
    return React.createElement(
        'button',                           // 1. 태그
        { onClick: () => setLiked(!liked)}, // 2. 속성값
        text,                               // 3. children 생성
    );
}

// dom에 랜더링
const domContainer = document.getElementById('root'); 
ReactDOM.render(React.createElement(LikeButton), domContainer);