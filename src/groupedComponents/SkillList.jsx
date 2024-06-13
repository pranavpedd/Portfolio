/* eslint-disable */

function SkillList({ src, skill }) {
    return (
        <span>
            <img src={src} alt='checkmark icon'></img>
            <p>{skill}</p>
        </span>
    );
}

export default SkillList;
