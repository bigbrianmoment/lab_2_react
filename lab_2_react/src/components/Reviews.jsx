import { useEffect, useState } from 'react';

function Reviews() {
    const [comments, setComments] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function load() {
            try {
                const response = await fetch(
                    'https://jsonplaceholder.typicode.com/posts/18/comments'
                );
                if (!response.ok) {
                    throw new Error(
                        `Не вдалося завантажити відгуки: ${response.status}`
                    );
                }
                setComments(await response.json());
            } catch (error) {
                console.error(error);
                setError('Не вдалося завантажити відгуки. Спробуйте пізніше.');
            } finally {
                setIsLoading(false);
            }
        }
        load();
    }, []);

    return (
        <section className="md:col-span-2 p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-semibold text-brand-900 dark:text-emerald-200 mb-4">
                Відгуки роботодавців
            </h2>
            {isLoading && <p>Завантаження відгуків...</p>}
            {error && <p role="alert">{error}</p>}
            {!isLoading && !error && (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {comments.map((comment) => (
                        <article
                            key={comment.id}
                            className="p-4 border-l-4 border-brand-700 bg-slate-50 dark:bg-slate-700 rounded-r-lg"
                        >
                            <h3 className="font-semibold mb-1">{comment.name}</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                                {comment.email}
                            </p>
                            <p className="text-sm leading-relaxed">
                                {comment.body}
                            </p>
                        </article>
                    ))}
                </div>
            )}
        </section>
    );
}

export default Reviews;
