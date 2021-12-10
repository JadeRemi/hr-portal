import imgIconWait from "../../assets/images/icon-wait.svg";

interface Model {
    data: {
        [key: string]: string;
    },
    onClose: any;
}

export function Wait({ data, onClose }: Model) {
    return (
        <div className="wait">
            <img src={imgIconWait} alt="wait" />
            <h1>{data.Heading}</h1>
            <p>{data.Paragraph1}</p><br />
            <p>{data.Paragraph2}</p>
        </div>
    );
};
