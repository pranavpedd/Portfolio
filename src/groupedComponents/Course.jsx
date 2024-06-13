/* eslint-disable */

function Course({ src, name, code }) {
    return (
        <span>
            <img src={src} alt='notebook icon' />
            <h2>{name}</h2>
            <p>{code}</p>
        </span>
    );
}

export default Course;
