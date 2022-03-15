import React from "react";

export default class Emoji extends React.Component {
    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;

    render(override) {
        let text = `this is emoji text !`;

        if (override) text = override;
        
        return <div>{text}</div>
    }
} 