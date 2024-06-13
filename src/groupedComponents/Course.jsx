/* eslint-disable */

function Course({ src, name, code }) {
    return (
        <span>
            <img
                src={src}
                alt='notebook icon'></img>
            <p>
                {name} <br />
                {code}
            </p>
            {/* <p>{code}</p> */}
        </span>
    );
}

export default Course;
