export default function PostTitle({ children }) {
  return (
    <h1 className="text-6xl lg:text-7xl font-black tracking-tighter leading-tight md:leading-none mb-6 mt-16 max-w-2xl mx-auto">
      {children}
    </h1>
  );
}
