export default function Container({ children }) {
  return (
    <div className="container mx-auto px-5 md:px-8 max-w-screen-xl">
      {children}
    </div>
  );
}
