import NavMenu from "../layout/NavMenu";

export const Contact = () => {
  return (
    <div className="relative">
      <NavMenu />

      <section className="min-h-screen bg-white flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-8 text-center">
          <p className="text-lg text-black" style={{ fontFamily: 'Inter', fontWeight: 700, letterSpacing: '-0.05em', lineHeight: '1.3' }}>
            imnotniqo@gmail.com         
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;