import imgIconDone from "../../assets/images/icon-done.svg";

interface Model {
    data: {
        [key: string]: string;
    },
    onClose: any;
}

export function Sent({ data, onClose }: Model) {
    return (
        <div className="sent">
            <img src={imgIconDone} alt="done" />
            <h1>{data.Heading}</h1>
            <p>{data.Paragraph1}</p>
        </div>
    );
};
