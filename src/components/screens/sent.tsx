
interface Model {
    data: {
        [key: string]: string;
    },
    onClose: any;
}

export function Sent({ data, onClose }: Model) {
    return (
        <div className="sent">
            <img src="/img/icon-done.svg" alt="done" />
            <h1>{data.Heading}</h1>
            <p>{data.Paragraph1}</p>
        </div>
    );
};
