/** step1. react�θ� ȭ�鸸��� */
function LikeButton() {
    const [liked, setLiked] = React.useState(false); // useState ������Ʈ ���°� �߰��� �� ��� 
    const text = liked ? '���ƿ� ���' : '���ƿ�';

    // createElement ����Ʈ ���(����Ʈ ui���� ��Ÿ���� ���� ���� ����)�� ��ȯ
    return React.createElement(
        'button',                           // 1. �±�
        { onClick: () => setLiked(!liked)}, // 2. �Ӽ���
        text,                               // 3. children ����
    );
}

// dom�� ������
const domContainer = document.getElementById('root'); 
ReactDOM.render(React.createElement(LikeButton), domContainer);