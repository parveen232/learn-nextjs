export default function Post({ params }) {
    const { slug } = params;
    return <h1>{slug}</h1>
}