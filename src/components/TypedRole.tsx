"use client";

import { useEffect, useState } from "react";

// Types a word, pauses, deletes it, then types the next one.
// Visitors who prefer reduced motion just see the first word.
export default function TypedRole({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(words[0]);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const word = words[index];
    let timer: ReturnType<typeof setTimeout> | undefined;

    if (!deleting && text === word) {
      timer = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((index + 1) % words.length);
    } else {
      timer = setTimeout(
        () => setText(deleting ? text.slice(0, -1) : word.slice(0, text.length + 1)),
        deleting ? 45 : 90
      );
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [text, deleting, index, words]);

  return (
    <span className="typed-wrap">
      <span className="typed gradient-text">{text}</span>
      <span className="caret" aria-hidden="true" />
    </span>
  );
}
