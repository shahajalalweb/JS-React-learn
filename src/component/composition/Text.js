export default function Text({addEmoji}){
    const text = "I love JavaScript";
    return <div>
        {addEmoji ? addEmoji(text, '❤️') : text}
    </div>
}