export default function Container({ children }) {
  return (
    <div className="w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl px-3 sm:px-5 md:px-6 lg:px-8 xl:px-10 mx-auto">
      {children}
    </div>
  );
}
