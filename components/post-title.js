export default function PostTitle({ children }) {
  return (
    <h1 className="text-6xl lg:text-7xl font-bold tracking-tighter leading-tight md:leading-none mb-12 mt-16 max-w-2xl mx-auto">
      {children}
    </h1>
  );
}
