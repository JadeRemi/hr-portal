
interface Model {
    data: {
        [key: string]: string;
    },
    onClose: any;
}

export function Wait({ data, onClose }: Model) {
    return (
        <div className="wait">
            <img src="/img/icon-wait.svg" alt="wait" />
            <h1>{data.Heading}</h1>
            <p>{data.Paragraph1}</p><br />
            <p>{data.Paragraph2}</p>
        </div>
    );
};
