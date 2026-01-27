'use client'
import { useState } from 'react';

export default function LikeButton() {
    const [likes, setLikes] = useState(0);

    function handleClick() {
        setLikes(likes + 1);
    }

    return <button onClick={handleClick}> Likes ({ likes }) </button>;
};

// The 'use client' tells Next.js/React.js to render this on the browser as compared to server side rendering which would take this JSX/Javascript and compute it into a strand of HTML before passing it into the browser. Since the like button is dependent on the user, we want this to render on the browser (or client). A navigation bar, for example doesn't change and can be rendered on the server and passed into the browser.