import { useEffect, useState } from 'react';


function Reviews() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        async function load() {
            try {
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/posts/18/comments`
                );
                setComments(await response.json());
            } catch (error) {
                console.error(error);
            }
        }
        load();
    }, []);

    return (
        <section className="md:col-span-2 ...">
            <h2>Відгуки роботодавців</h2>
            {comments.map((c) => (
                <article key={c.id}>
                    <h3>{c.name}</h3>
                    <p>{c.email}</p>
                    <p>{c.body}</p>
                </article>
            ))}
        </section>
    );
}

export default Reviews;